import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  Package,
} from "lucide-react";

import { useCart } from "../../Context/CartContext.jsx";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
  } = useCart();

  /* ============================================================
     EMPTY CART
  ============================================================ */

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] px-4 py-12">
        <div className="mx-auto flex max-w-[700px] flex-col items-center rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
            <ShoppingCart
              size={38}
              className="text-indigo-600"
            />
          </div>

          <h1 className="mt-6 text-2xl font-black text-[#102D5B]">
            Your Cart is Empty
          </h1>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            You haven't added any products to your cart yet.
            Explore our textile products and find something you
            like.
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
     CART PAGE
  ============================================================ */

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1180px] px-4 py-7 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-[#102D5B]">
            Shopping Cart
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Review your products before checkout.
          </p>
        </div>
      </div>

      {/* Main */}

      <section className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* ==================================================
              CART ITEMS
          ================================================== */}

          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex gap-4">
                  {/* Image */}

                  <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Info */}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="truncate text-base font-bold text-[#102D5B]">
                          {item.name}
                        </h2>

                        {item.size && (
                          <p className="mt-1 text-xs text-slate-500">
                            Size:{" "}
                            <span className="font-semibold text-slate-700">
                              {item.size}
                            </span>
                          </p>
                        )}
                      </div>

                      {/* Remove */}

                      <button
                        onClick={() =>
                          removeFromCart(item.id, item.size)
                        }
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-500"
                        title="Remove"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>

                    {/* Price */}

                    <p className="mt-3 text-lg font-black text-indigo-600">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>

                    {/* Quantity */}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id,
                              item.size
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50"
                        >
                          <Minus size={15} />
                        </button>

                        <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-2 text-sm font-bold text-[#102D5B]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id,
                              item.size
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50"
                        >
                          <Plus size={15} />
                        </button>
                      </div>

                      {/* Item total */}

                      <p className="text-sm font-black text-[#102D5B]">
                        ₹
                        {(
                          item.price * item.quantity
                        ).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ==================================================
              ORDER SUMMARY
          ================================================== */}

          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-xl font-black text-[#102D5B]">
              Order Summary
            </h2>

            <div className="my-5 h-px bg-slate-200" />

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

            <div className="flex items-center justify-between">
              <span className="font-bold text-[#102D5B]">
                Total
              </span>

              <span className="text-2xl font-black text-indigo-600">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Checkout */}

            <Link
              to="/checkout"
              className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-bold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700"
            >
              Proceed to Checkout
              <ArrowRight size={18} />
            </Link>

            {/* Trust */}

            <div className="mt-5 flex items-start gap-3 rounded-xl bg-emerald-50 p-3">
              <Package
                size={18}
                className="mt-0.5 shrink-0 text-emerald-600"
              />

              <p className="text-xs leading-5 text-emerald-700">
                Secure checkout with verified textile sellers
                and reliable shipment tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;