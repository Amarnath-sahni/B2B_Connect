import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Navigation,
  Save,
  ArrowLeft,
  Loader2,
  LocateFixed,
  Search,
  Crosshair,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// --------------------------------------------------
// Leaflet marker fix
// --------------------------------------------------

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

// --------------------------------------------------
// Address Page
// --------------------------------------------------

const AddressPage = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [loadingAddress, setLoadingAddress] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    houseNumber: "",
    street: "",
    locality: "",
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

    if (!savedAddress) return;

    try {
      const parsed = JSON.parse(savedAddress);

      setFormData({
        fullName: parsed.fullName || "",
        phone: parsed.phone || "",
        houseNumber: parsed.houseNumber || "",
        street: parsed.street || "",
        locality: parsed.locality || "",
        landmark: parsed.landmark || "",
        city: parsed.city || "",
        state: parsed.state || "",
        pincode: parsed.pincode || "",
      });

      if (
        parsed.latitude !== undefined &&
        parsed.longitude !== undefined
      ) {
        setPosition([
          Number(parsed.latitude),
          Number(parsed.longitude),
        ]);
      }
    } catch (error) {
      console.error("Invalid saved address:", error);
    }
  }, []);

  // --------------------------------------------------
  // Reverse Geocoding
  // --------------------------------------------------

  const getAddressFromCoordinates = async (lat, lng) => {
    try {
      setLoadingAddress(true);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
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

      const houseNumber =
        address.house_number || "";

      const street =
        address.road ||
        address.pedestrian ||
        address.footway ||
        "";

      const locality =
        address.neighbourhood ||
        address.suburb ||
        address.quarter ||
        address.residential ||
        "";

      const city =
        address.city ||
        address.town ||
        address.village ||
        address.municipality ||
        "";

      const state =
        address.state || "";

      const pincode =
        address.postcode || "";

      setFormData((prev) => ({
        ...prev,
        houseNumber:
          houseNumber || prev.houseNumber,

        street:
          street || prev.street,

        locality:
          locality || prev.locality,

        city:
          city || prev.city,

        state:
          state || prev.state,

        pincode:
          pincode || prev.pincode,
      }));
    } catch (error) {
      console.error("Reverse geocoding failed:", error);
    } finally {
      setLoadingAddress(false);
    }
  };

  // --------------------------------------------------
  // Current Location
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

        await getAddressFromCoordinates(lat, lng);

        setLoadingLocation(false);
      },
      (error) => {
        setLoadingLocation(false);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert(
              "Location permission was denied. Please allow location access."
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
  // Map Position Change
  // --------------------------------------------------

  const handleMapPositionChange = async (lat, lng) => {
    setPosition([lat, lng]);

    await getAddressFromCoordinates(lat, lng);
  };

  // --------------------------------------------------
  // Input Change
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
  // Save
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

    if (
      !formData.houseNumber.trim() &&
      !formData.street.trim() &&
      !formData.locality.trim()
    ) {
      alert("Please enter your complete address.");
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
    alert("Your Address Save SuccessFully...");
    navigate(-1);
  };

  const formattedSelectedAddress = [
    formData.houseNumber,
    formData.street,
    formData.locality,
    formData.city,
    formData.state,
    formData.pincode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="min-h-screen bg-[#F8F9FC]">

      {/* --------------------------------------------------
          Header
      -------------------------------------------------- */}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-600"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Delivery Address
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Pin your exact delivery location and confirm your address.
          </p>
        </div>
      </header>

      {/* --------------------------------------------------
          Main
      -------------------------------------------------- */}

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* ==================================================
              MAP
          ================================================== */}

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Map Header */}

            <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <div className="flex items-center gap-2.5">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                    <MapPin
                      size={20}
                      className="text-indigo-600"
                    />
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-900">
                      Choose Location
                    </h2>

                    <p className="text-xs text-slate-500">
                      Pin your exact delivery point
                    </p>
                  </div>

                </div>
              </div>

              <button
                type="button"
                onClick={getCurrentLocation}
                disabled={loadingLocation}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-indigo-200/50 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
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

            <div className="relative h-[420px] sm:h-[500px]">

              <MapContainer
                center={position}
                zoom={17}
                minZoom={12}
                maxZoom={19}
                scrollWheelZoom
                zoomControl={true}
                className="h-full w-full"
              >

                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapCenter
                  position={position}
                />

                <LocationMarker
                  position={position}
                  onPositionChange={handleMapPositionChange}
                />

              </MapContainer>

              {/* Top instruction */}

              <div className="pointer-events-none absolute left-1/2 top-4 z-[1000] w-[calc(100%-32px)] max-w-md -translate-x-1/2">

                <div className="flex items-center justify-center gap-2 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-center shadow-lg backdrop-blur">

                  <Crosshair
                    size={16}
                    className="shrink-0 text-indigo-600"
                  />

                  <p className="text-xs font-semibold text-slate-700 sm:text-sm">
                    Move the pin to your exact house or street
                  </p>

                </div>

              </div>

              {/* Address Preview */}

              <div className="absolute bottom-4 left-4 right-4 z-[1000] sm:left-5 sm:right-auto sm:w-[410px]">

                <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md">

                  <div className="flex gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50">
                      <MapPin
                        size={19}
                        className="text-indigo-600"
                      />
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex items-center justify-between gap-3">

                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          Selected Location
                        </p>

                        {loadingAddress && (
                          <Loader2
                            size={15}
                            className="shrink-0 animate-spin text-indigo-600"
                          />
                        )}

                      </div>

                      <p className="mt-1 text-sm font-semibold leading-5 text-slate-800">
                        {loadingAddress
                          ? "Finding your address..."
                          : formattedSelectedAddress ||
                            "Select a location on the map"}
                      </p>

                      <p className="mt-1 text-[11px] text-slate-400">
                        {position[0].toFixed(6)},{" "}
                        {position[1].toFixed(6)}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* ==================================================
              ADDRESS FORM
          ================================================== */}

          <form
            onSubmit={handleSaveAddress}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >

            <div className="mb-6">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                  <Navigation
                    size={19}
                    className="text-indigo-600"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Address Details
                  </h2>

                  <p className="text-xs text-slate-500">
                    Confirm your delivery information
                  </p>
                </div>

              </div>

            </div>

            <div className="space-y-4">

              {/* Name */}

              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />

              {/* Phone */}

              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />

              {/* House */}

              <Input
                label="House / Flat / Building"
                name="houseNumber"
                value={formData.houseNumber}
                onChange={handleChange}
                placeholder="e.g. House No. 24, Flat 302"
              />

              {/* Street */}

              <Input
                label="Street / Gali / Road"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="e.g. Gali No. 3, Main Road"
              />

              {/* Locality */}

              <Input
                label="Locality / Area"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                placeholder="e.g. Sector 62, Indirapuram"
              />

              {/* Landmark */}

              <Input
                label={
                  <>
                    Landmark
                    <span className="ml-1 font-normal text-slate-400">
                      (Optional)
                    </span>
                  </>
                }
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                placeholder="Nearby landmark"
              />

              {/* City / State */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <Input
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />

                <Input
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  required
                />

              </div>

              {/* PIN */}

              <Input
                label="PIN Code"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="6-digit PIN code"
                inputMode="numeric"
                maxLength={6}
                required
              />

            </div>

            {/* Save */}

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200/50 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              <Save size={18} />
              Save Address & Continue
            </button>

            <p className="mt-3 text-center text-xs text-slate-400">
              Your pin location will be saved with your delivery address.
            </p>

          </form>

        </div>
      </main>
    </div>
  );
};

// --------------------------------------------------
// Recenter Map
// --------------------------------------------------

const MapCenter = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 17, {
      duration: 0.8,
    });
  }, [position, map]);

  return null;
};

// --------------------------------------------------
// Marker
// --------------------------------------------------

const LocationMarker = ({
  position,
  onPositionChange,
}) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      onPositionChange(lat, lng);
    },
  });

  return (
    <Marker
      position={position}
      draggable
      eventHandlers={{
        dragend: (event) => {
          const marker = event.target;
          const { lat, lng } = marker.getLatLng();

          onPositionChange(lat, lng);
        },
      }}
    />
  );
};

// --------------------------------------------------
// Reusable Input
// --------------------------------------------------

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  inputMode,
  maxLength,
}) => {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        inputMode={inputMode}
        maxLength={maxLength}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      />
    </div>
  );
};

export default AddressPage;