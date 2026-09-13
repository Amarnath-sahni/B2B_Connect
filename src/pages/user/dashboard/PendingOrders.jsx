import { Clock3, Package, Store, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PendingOrders = () => {
  // Temporary order data
  const pendingOrders = [
    {
      id: "FL-10295",
      product: "Premium Cotton T-Shirt",
      quantity: "500 pieces",
      factory: "Mumbai Textile Factory",
      amount: "₹1,24,500",
      orderedAt: "September 6, 2026",
    },
  ];

  return (
    <section className="overflow-hidden rounded-2xl border border-[#E6E8F2] bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-[#EEF0F5] px-6 py-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-[#E87516]">
          Waiting for Seller
        </p>

        <div className="mt-1 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-[#17386F]">
              Pending Orders
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Your order is waiting for factory acknowledgement.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF7ED] px-4 py-2 text-xs font-bold text-[#EA580C]">
            <Clock3 size={14} />
            Awaiting Confirmation
          </span>
        </div>
      </div>

      {/* Orders */}
      <div className="space-y-4 p-6 lg:p-8">
        {pendingOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-[#E8EAF2] bg-[#FCFCFF] p-5"
          >
            <div className="flex flex-col justify-between gap-5 md:flex-row">
              
              {/* Product */}
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F3F1FF]">
                  <Package
                    size={25}
                    className="text-[#6955E8]"
                  />
                </div>

                <div>
                  <h3 className="font-extrabold text-[#17386F]">
                    {order.product}
                  </h3>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Order #{order.id}
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Quantity: {order.quantity}
                  </p>
                </div>
              </div>

              {/* Amount */}
              <div className="md:text-right">
                <p className="text-xs text-[#94A3B8]">
                  Order Value
                </p>

                <p className="mt-1 text-lg font-extrabold text-[#17386F]">
                  {order.amount}
                </p>
              </div>
            </div>

            {/* Factory */}
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-white p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
                <Store size={18} className="text-[#6955E8]" />
              </div>

              <div>
                <p className="text-xs text-[#94A3B8]">
                  Seller / Factory
                </p>

                <p className="text-sm font-bold text-[#17386F]">
                  {order.factory}
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="mt-5 flex flex-col justify-between gap-4 rounded-xl border border-[#FDE7C7] bg-[#FFFBF5] p-4 md:flex-row md:items-center">
              <div className="flex items-start gap-3">
                <Clock3
                  size={18}
                  className="mt-0.5 shrink-0 text-[#E87516]"
                />

                <div>
                  <p className="text-sm font-bold text-[#9A5B13]">
                    Waiting for factory acknowledgement
                  </p>

                  <p className="mt-1 text-xs text-[#A16207]">
                    The factory will review and confirm your order.
                  </p>
                </div>
              </div>

              <Link
                to={`/orders/${order.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D9D3FF] bg-white px-4 py-2.5 text-sm font-bold text-[#6955E8] transition hover:bg-[#F5F3FF]"
              >
                View Order
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PendingOrders;