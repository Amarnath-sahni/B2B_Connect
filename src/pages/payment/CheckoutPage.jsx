
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  Package,
  CheckCircle2,
  Plus,
  Pencil,
  Smartphone,
} from "lucide-react";

import { useCart } from "../../Context/CartContext.jsx";

const CheckoutPage = () => {
  const { cart, subtotal } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [savedAddress, setSavedAddress] = useState(null);

  /* ============================================================
     LOAD SAVED ADDRESS
  ============================================================ */

  useEffect(() => {
    const address = localStorage.getItem("shippingAddress");

    if (address) {
      try {
        setSavedAddress(JSON.parse(address));
      } catch (error) {
        console.error("Invalid saved address:", error);
        setSavedAddress(null);
      }
    }
  }, []);

  /* ============================================================
     PLACE ORDER
  ============================================================ */

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      navigate("/cart");
      return;
    }

    if (!savedAddress) {
      alert("Please add a delivery address first.");
      navigate("/address");
      return;
    }

    const orderData = {
      customer: savedAddress,
      products: cart,
      subtotal,
      delivery: 0,
      total: subtotal,
      paymentMethod,
    };

    console.log("Order Data:", orderData);

    alert("Order placed successfully!");

    // Later:
    // navigate("/order-success");
    navigate("/shipment");
  };

  /* ============================================================
     CHANGE ADDRESS
  ============================================================ */

  const handleChangeAddress = () => {
    navigate("/address");
  };

  /* ============================================================
     EMPTY CART
  ============================================================ */

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] px-4 py-12">
        <div className="mx-auto flex max-w-[700px] flex-col items-center rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
            <Package
              size={38}
              className="text-indigo-600"
            />
          </div>

          <h1 className="mt-6 text-2xl font-black text-[#102D5B]">
            Your Cart is Empty
          </h1>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Add some products to your cart before proceeding
            to checkout.
          </p>

          <Link
            to="/products/accessories"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
          >
            Start Shopping
            <ArrowRight size={17} />
          </Link>

        </div>
      </main>
    );
  }

  /* ============================================================
     CHECKOUT PAGE
  ============================================================ */

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* ========================================================
          HEADER
      ======================================================== */}

      <div className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8">

          <div className="flex items-center gap-2 text-sm text-slate-500">

            <Link
              to="/cart"
              className="flex items-center gap-1 transition hover:text-indigo-600"
            >
              <ArrowLeft size={15} />
              Cart
            </Link>

            <span>/</span>

            <span className="font-semibold text-[#102D5B]">
              Checkout
            </span>

          </div>

          <h1 className="mt-4 text-3xl font-black text-[#102D5B]">
            Checkout
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Confirm your address and payment method to place
            your order.
          </p>

        </div>
      </div>

      {/* ========================================================
          CHECKOUT CONTENT
      ======================================================== */}

      <section className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6 lg:px-8">

        <form onSubmit={handlePlaceOrder}>

          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

            {/* ==================================================
                LEFT SIDE
            ================================================== */}

            <div className="space-y-6">

              {/* ==================================================
                  CONTACT INFORMATION
              ================================================== */}

              

              {/* ==================================================
                  SHIPPING ADDRESS
              ================================================== */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                {/* HEADER */}

                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                      <MapPin
                        size={20}
                        className="text-purple-600"
                      />
                    </div>

                    <div>

                      <h2 className="text-lg font-black text-[#102D5B]">
                        Shipping Address
                      </h2>

                      <p className="text-xs text-slate-500">
                        Where should we deliver your order?
                      </p>

                    </div>

                  </div>

                  {/* CHANGE ADDRESS */}

                  {savedAddress && (
                    <button
                      type="button"
                      onClick={handleChangeAddress}
                      className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 transition hover:text-indigo-700"
                    >
                      <Pencil size={14} />
                      Change
                    </button>
                  )}

                </div>

                {/* ==================================================
                    NO ADDRESS
                ================================================== */}

                {!savedAddress ? (
                  <div className="mt-6 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-7 text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
                      <MapPin
                        size={25}
                        className="text-indigo-600"
                      />
                    </div>

                    <h3 className="mt-4 text-base font-black text-[#102D5B]">
                      No delivery address found
                    </h3>

                    <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-slate-500">
                      Add your delivery address with your location
                      and PIN code before placing the order.
                    </p>

                    <button
                      type="button"
                      onClick={() => navigate("/address")}
                      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-xs font-bold text-white shadow-md shadow-indigo-100 transition hover:bg-indigo-700"
                    >
                      <Plus size={16} />
                      Add New Address
                    </button>

                  </div>
                ) : (

                  /* ==================================================
                     SAVED ADDRESS
                  ================================================== */

                  <div className="mt-6 rounded-2xl border-2 border-indigo-500 bg-indigo-50/40 p-5">

                    <div className="flex items-start gap-4">

                      {/* ICON */}

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                        <MapPin
                          size={21}
                          className="text-indigo-600"
                        />
                      </div>

                      {/* ADDRESS */}

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-2">

                          <h3 className="text-sm font-black text-[#102D5B]">
                            {savedAddress.fullName}
                          </h3>

                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
                            SELECTED
                          </span>

                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {savedAddress.address}
                        </p>

                        {savedAddress.landmark && (
                          <p className="mt-1 text-xs text-slate-500">
                            Near {savedAddress.landmark}
                          </p>
                        )}

                        <p className="mt-1 text-sm font-semibold text-slate-700">
                          {savedAddress.city},{" "}
                          {savedAddress.state} -{" "}
                          {savedAddress.pincode}
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                          Phone:{" "}
                          <span className="font-semibold text-slate-700">
                            {savedAddress.phone}
                          </span>
                        </p>

                      </div>

                    </div>

                    {/* LOCATION */}

                    {savedAddress.latitude &&
                      savedAddress.longitude && (
                        <div className="mt-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5">

                          <MapPin
                            size={15}
                            className="text-indigo-600"
                          />

                          <span className="text-[10px] text-slate-500">
                            Location selected on map
                          </span>

                          <span className="ml-auto text-[10px] font-semibold text-slate-400">
                            {Number(
                              savedAddress.latitude
                            ).toFixed(4)}
                            ,{" "}
                            {Number(
                              savedAddress.longitude
                            ).toFixed(4)}
                          </span>

                        </div>
                      )}

                    {/* CHANGE */}

                    <button
                      type="button"
                      onClick={handleChangeAddress}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white py-2.5 text-xs font-bold text-indigo-600 transition hover:bg-indigo-50"
                    >
                      <Pencil size={14} />
                      Change Delivery Address
                    </button>

                  </div>
                )}

                {/* ADD ANOTHER */}

                {savedAddress && (
                  <button
                    type="button"
                    onClick={() => navigate("/address")}
                    className="mt-4 flex items-center gap-2 text-xs font-bold text-indigo-600 transition hover:text-indigo-700"
                  >
                    <Plus size={15} />
                    Add New Address
                  </button>
                )}

              </div>

              {/* ==================================================
                  DELIVERY
              ================================================== */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

  {/* Header */}
  <div className="flex items-center gap-3">

    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
      <Truck size={20} className="text-emerald-600" />
    </div>

    <div>
      <h2 className="text-lg font-black text-[#102D5B]">
        Delivery Method
      </h2>

      <p className="text-xs text-slate-500">
        Choose the delivery speed that works for you.
      </p>
    </div>

  </div>

  {/* Delivery Options */}
  <div className="mt-5 space-y-3">

    {/* Standard */}
    <button
      type="button"
      className="w-full rounded-xl border-2 border-indigo-500 bg-indigo-50/50 p-4 text-left transition hover:shadow-sm"
    >
      <div className="flex items-center justify-between gap-3">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
            <Truck size={19} className="text-indigo-600" />
          </div>

          <div>
            <p className="text-sm font-bold text-[#102D5B]">
              Standard Delivery
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Estimated delivery in 3–7 business days
            </p>
          </div>

        </div>

        <span className="text-sm font-black text-emerald-600">
          FREE
        </span>

      </div>
    </button>

    {/* Quick */}
    <button
      type="button"
      className="w-full rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50/30 hover:shadow-sm"
    >
      <div className="flex items-center justify-between gap-3">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50">
            <Truck size={19} className="text-amber-600" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-[#102D5B]">
                Quick Delivery
              </p>

              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                POPULAR
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Estimated delivery in 2–4 business days
            </p>
          </div>

        </div>

        <span className="whitespace-nowrap text-sm font-black text-slate-700">
          ₹149
        </span>

      </div>
    </button>

    {/* Express */}
    <button
      type="button"
      className="w-full rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50/30 hover:shadow-sm"
    >
      <div className="flex items-center justify-between gap-3">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50">
            <Truck size={19} className="text-rose-600" />
          </div>

          <div>
            <p className="text-sm font-bold text-[#102D5B]">
              Express Delivery
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Estimated delivery in 1–2 business days
            </p>
          </div>

        </div>

        <span className="whitespace-nowrap text-sm font-black text-slate-700">
          ₹299
        </span>

      </div>
    </button>

  </div>

  {/* Info */}
  <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
    <p className="text-xs leading-5 text-slate-500">
      Delivery estimates may vary depending on factory processing time,
      product availability, and your delivery location.
    </p>
  </div>

</div>

              {/* ==================================================
                  PAYMENT
              ================================================== */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                    <CreditCard
                      size={20}
                      className="text-orange-600"
                    />
                  </div>

                  <div>

                    <h2 className="text-lg font-black text-[#102D5B]">
                      Payment Method
                    </h2>

                    <p className="text-xs text-slate-500">
                      Choose your preferred payment method.
                    </p>

                  </div>

                </div>

                <div className="mt-5 space-y-3">

                  {/* COD */}

                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition ${
                      paymentMethod === "cod"
                        ? "border-indigo-500 bg-indigo-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="h-4 w-4 accent-indigo-600"
                      />

                      <div>

                        <p className="text-sm font-bold text-[#102D5B]">
                          Cash on Delivery
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Pay when your order arrives
                        </p>

                      </div>

                    </div>

                    <span className="rounded-lg bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                      AVAILABLE
                    </span>

                  </label>

                  {/* ONLINE PAYMENT */}

                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition ${
                      paymentMethod === "online"
                        ? "border-indigo-500 bg-indigo-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={(e) =>
                          setPaymentMethod(e.target.value)
                        }
                        className="h-4 w-4 accent-indigo-600"
                      />

                      <div>

                        <p className="text-sm font-bold text-[#102D5B]">
                          Online Payment
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          UPI, Cards, Net Banking & more
                        </p>

                      </div>

                    </div>

                    <CreditCard
                      size={20}
                      className="text-indigo-600"
                    />

                  </label>

                </div>
              </div>

            </div>

            {/* ==================================================
                RIGHT — ORDER SUMMARY
            ================================================== */}

            <div className="h-fit lg:sticky lg:top-24">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <h2 className="text-xl font-black text-[#102D5B]">
                  Order Summary
                </h2>

                {/* PRODUCTS */}

                <div className="mt-5 space-y-4">

                  {cart.map((item) => (

                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex gap-3"
                    >

                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />

                        <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
                          {item.quantity}
                        </span>

                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-sm font-bold text-[#102D5B]">
                          {item.name}
                        </p>

                        {item.size && (
                          <p className="mt-1 text-xs text-slate-500">
                            Size: {item.size}
                          </p>
                        )}

                        <p className="mt-1 text-xs font-bold text-indigo-600">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>

                      </div>

                      <p className="text-sm font-black text-[#102D5B]">
                        ₹
                        {(
                          item.price * item.quantity
                        ).toLocaleString("en-IN")}
                      </p>

                    </div>

                  ))}

                </div>

                <div className="my-5 h-px bg-slate-200" />

                {/* PRICE */}

                <div className="space-y-4">

                  <div className="flex items-center justify-between text-sm">

                    <span className="text-slate-500">
                      Subtotal
                    </span>

                    <span className="font-bold text-[#102D5B]">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>

                  </div>

                  <div className="flex items-center justify-between text-sm">

                    <span className="text-slate-500">
                      Delivery
                    </span>

                    <span className="font-bold text-emerald-600">
                      FREE
                    </span>

                  </div>

                  <div className="flex items-center justify-between text-sm">

                    <span className="text-slate-500">
                      Taxes
                    </span>

                    <span className="font-bold text-slate-600">
                      Included
                    </span>

                  </div>

                </div>

                <div className="my-5 h-px bg-slate-200" />

                {/* TOTAL */}

                <div className="flex items-center justify-between">

                  <span className="font-bold text-[#102D5B]">
                    Total
                  </span>

                  <span className="text-2xl font-black text-indigo-600">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>

                </div>

                {/* PLACE ORDER */}

                <button
                  type="submit"
                  className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-bold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700 active:scale-[0.98]"
                >
                  Place Order
                  <ArrowRight size={18} />
                </button>

                {/* SECURITY */}

                <div className="mt-5 rounded-xl bg-emerald-50 p-4">

                  <div className="flex gap-3">

                    <ShieldCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />

                    <div>

                      <p className="text-xs font-bold text-emerald-800">
                        Secure Checkout
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-emerald-700">
                        Your information is protected with secure
                        checkout and verified textile sellers.
                      </p>

                    </div>

                  </div>

                </div>

                {/* TRUST */}

                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-slate-50 p-3 text-center">

                    <CheckCircle2
                      size={18}
                      className="mx-auto text-emerald-500"
                    />

                    <p className="mt-1 text-[10px] font-bold text-slate-600">
                      Verified Sellers
                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 text-center">

                    <Truck
                      size={18}
                      className="mx-auto text-indigo-500"
                    />

                    <p className="mt-1 text-[10px] font-bold text-slate-600">
                      Track Shipment
                    </p>

                  </div>

                </div>

              </div>

              {/* BACK TO CART */}

              <Link
                to="/cart"
                className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-slate-500 transition hover:text-indigo-600"
              >
                <ArrowLeft size={15} />
                Return to Cart
              </Link>

            </div>

          </div>

        </form>

      </section>

    </main>
  );
};

export default CheckoutPage;
