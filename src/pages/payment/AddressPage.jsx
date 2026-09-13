import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Navigation,
  Save,
  ArrowLeft,
  Loader2,
  LocateFixed,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const DEFAULT_POSITION = [30.7046, 76.7179];

const AddressPage = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState(DEFAULT_POSITION);

  const [loadingLocation, setLoadingLocation] = useState(false);
  const [loadingAddress, setLoadingAddress] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  // --------------------------------------------------
  // Load saved address
  // --------------------------------------------------

  useEffect(() => {
    const savedAddress = localStorage.getItem("shippingAddress");

    if (savedAddress) {
      try {
        const parsed = JSON.parse(savedAddress);

        setFormData({
          fullName: parsed.fullName || "",
          phone: parsed.phone || "",
          address: parsed.address || "",
          landmark: parsed.landmark || "",
          city: parsed.city || "",
          state: parsed.state || "",
          pincode: parsed.pincode || "",
        });

        if (parsed.latitude && parsed.longitude) {
          setPosition([parsed.latitude, parsed.longitude]);
        }
      } catch (error) {
        console.error("Invalid saved address:", error);
      }
    }
  }, []);

  // --------------------------------------------------
  // Reverse Geocoding
  // Coordinates -> Address
  // --------------------------------------------------

  const getAddressFromCoordinates = async (lat, lng) => {
    try {
      setLoadingAddress(true);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unable to fetch address");
      }

      const data = await response.json();

      const address = data.address || {};

      const road =
        address.road ||
        address.neighbourhood ||
        address.suburb ||
        "";

      const houseNumber = address.house_number || "";

      const formattedAddress = [houseNumber, road]
        .filter(Boolean)
        .join(", ");

      setFormData((prev) => ({
        ...prev,

        address:
          formattedAddress ||
          data.display_name ||
          prev.address,

        city:
          address.city ||
          address.town ||
          address.village ||
          address.municipality ||
          "",

        state: address.state || "",

        pincode: address.postcode || "",
      }));
    } catch (error) {
      console.error("Reverse geocoding failed:", error);

      alert(
        "Location found, but we could not automatically get the complete address. Please enter it manually."
      );
    } finally {
      setLoadingAddress(false);
    }
  };

  // --------------------------------------------------
  // Get Current Location
  // --------------------------------------------------

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (location) => {
        const lat = location.coords.latitude;
        const lng = location.coords.longitude;

        setPosition([lat, lng]);

        // Automatically convert GPS -> address
        await getAddressFromCoordinates(lat, lng);

        setLoadingLocation(false);
      },

      (error) => {
        setLoadingLocation(false);

        console.error("Location error:", error);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert(
              "Location permission was denied. Please allow location access in your browser."
            );
            break;

          case error.POSITION_UNAVAILABLE:
            alert("Your current location is unavailable.");
            break;

          case error.TIMEOUT:
            alert("Location request timed out. Please try again.");
            break;

          default:
            alert("Unable to get your current location.");
        }
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  // --------------------------------------------------
  // Map click
  // --------------------------------------------------

  const handleMapPositionChange = async (lat, lng) => {
    setPosition([lat, lng]);

    await getAddressFromCoordinates(lat, lng);
  };

  // --------------------------------------------------
  // Form Change
  // --------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "pincode"
          ? value.replace(/\D/g, "").slice(0, 6)
          : value,
    }));
  };

  // --------------------------------------------------
  // Save Address
  // --------------------------------------------------

  const handleSaveAddress = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!formData.address.trim()) {
      alert("Please enter your address.");
      return;
    }

    if (!formData.city.trim()) {
      alert("Please enter your city.");
      return;
    }

    if (!formData.state.trim()) {
      alert("Please enter your state.");
      return;
    }

    if (formData.pincode.length !== 6) {
      alert("Please enter a valid 6-digit PIN code.");
      return;
    }

    const addressData = {
      ...formData,
      latitude: position[0],
      longitude: position[1],
    };

    localStorage.setItem(
      "shippingAddress",
      JSON.stringify(addressData)
    );

    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/cart")}
            className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </button>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Delivery Address
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Select your current location or enter your address manually.
            </p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">

            {/* Map Header */}
            <div className="flex flex-col gap-4 border-b p-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <div className="flex items-center gap-2">
                  <MapPin
                    size={20}
                    className="text-indigo-600"
                  />

                  <h2 className="font-bold text-slate-900">
                    Select Location
                  </h2>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Click on the map or use your current location.
                </p>
              </div>

              <button
                type="button"
                onClick={getCurrentLocation}
                disabled={loadingLocation}
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loadingLocation ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    Detecting...
                  </>
                ) : (
                  <>
                    <LocateFixed size={17} />
                    Use Current Location
                  </>
                )}
              </button>
            </div>

            {/* Map */}
            <div className="relative h-[500px]">
              <MapContainer
                center={position}
                zoom={14}
                scrollWheelZoom={true}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker
                  position={position}
                  onPositionChange={handleMapPositionChange}
                />
              </MapContainer>

              {/* Loading overlay */}
              {loadingAddress && (
                <div className="absolute left-1/2 top-5 z-[1000] -translate-x-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-xl">
                    <Loader2
                      size={17}
                      className="animate-spin text-indigo-600"
                    />

                    Finding address...
                  </div>
                </div>
              )}

              {/* Coordinates */}
              <div className="absolute bottom-4 left-4 z-[1000] rounded-xl bg-white/95 px-4 py-3 text-xs shadow-lg backdrop-blur">
                <p className="font-semibold text-slate-700">
                  Selected Location
                </p>

                <p className="mt-1 text-slate-500">
                  {position[0].toFixed(6)},{" "}
                  {position[1].toFixed(6)}
                </p>
              </div>
            </div>
          </div>

          {/* Address Form */}
          <form
            onSubmit={handleSaveAddress}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50"
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                Address Details
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your location details will be filled automatically.
              </p>
            </div>

            <div className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  placeholder="House no, street, area"
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

              {/* Landmark */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Landmark
                  <span className="ml-1 font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Nearby landmark"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {/* City / State */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    required
                  />
                </div>

              </div>

              {/* PIN */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  PIN Code
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit PIN code"
                  inputMode="numeric"
                  maxLength={6}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  required
                />
              </div>

            </div>

            {/* Save */}
            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-4 font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              <Save size={19} />
              Save Address & Continue
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <Navigation size={14} />
              Your selected map location will also be saved.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------
// Map Marker Component
// --------------------------------------------------

const LocationMarker = ({
  position,
  onPositionChange,
}) => {
  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;

      await onPositionChange(lat, lng);
    },
  });

  return <Marker position={position} />;
};

export default AddressPage;