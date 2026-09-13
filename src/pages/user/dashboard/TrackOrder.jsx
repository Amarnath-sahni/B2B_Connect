import { Link } from "react-router-dom";

const TrackOrder = () => {
  const steps = [
    {
      title: "Order Placed",
      description: "Your order has been placed",
      completed: true,
    },
    {
      title: "Order Confirmed",
      description: "Factory has confirmed your order",
      completed: true,
    },
    {
      title: "Processing",
      description: "Your products are being prepared",
      completed: true,
    },
    {
      title: "Shipped",
      description: "Package has left the factory",
      completed: true,
    },
    {
      title: "In Transit",
      description: "Your package is on the way",
      completed: false,
    },
    {
      title: "Delivered",
      description: "Package delivered to you",
      completed: false,
    },
  ];

  return (
    <section className="overflow-hidden rounded-2xl border border-[#E6E8F2] bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#EEF0F5] px-6 py-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#6955E8]">
            Shipment Tracking
          </p>

          <h2 className="mt-1 text-2xl font-extrabold text-[#17386F]">
            Track Your Order
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Follow your order from factory to delivery.
          </p>
        </div>

        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF4E9] px-4 py-2 text-xs font-bold text-[#E87516]">
          <span className="h-2 w-2 rounded-full bg-[#F47B20]" />
          In Transit
        </span>
      </div>

      <div className="p-6 lg:p-8">
        {/* Order Information */}
        <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#F5F3FF] to-[#FFF4FB] p-5 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
              📦
            </div>

            <div>
              <h3 className="font-extrabold text-[#17386F]">
                Premium Cotton T-Shirt
              </h3>

              <p className="mt-1 text-xs text-[#64748B]">
                Order #FL-10294 · 500 pieces
              </p>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-xs text-[#94A3B8]">
              Estimated Delivery
            </p>

            <p className="mt-1 font-extrabold text-[#17386F]">
              September 9, 2026
            </p>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="mt-10">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div key={step.title} className="flex gap-4">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      step.completed
                        ? "bg-[#6955E8] text-white shadow-md shadow-[#6955E8]/20"
                        : "border-2 border-[#DDE1ED] bg-white text-[#A0A8BB]"
                    }`}
                  >
                    {step.completed ? "✓" : index + 1}
                  </div>

                  {!isLast && (
                    <div
                      className={`my-1 h-12 w-0.5 ${
                        step.completed
                          ? "bg-[#6955E8]"
                          : "bg-[#E4E7EF]"
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
                  <h4
                    className={`text-sm font-bold ${
                      step.completed
                        ? "text-[#17386F]"
                        : "text-[#94A3B8]"
                    }`}
                  >
                    {step.title}
                  </h4>

                  <p className="mt-1 text-xs text-[#94A3B8]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Status */}
        <div className="mt-8 flex flex-col justify-between gap-5 rounded-xl border border-[#E8E5FC] bg-[#FAF9FF] p-5 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-medium text-[#94A3B8]">
              Current Location
            </p>

            <p className="mt-1 text-sm font-bold text-[#17386F]">
              Mumbai Distribution Center
            </p>

            <p className="mt-1 text-xs text-[#64748B]">
              Package is moving toward your delivery address.
            </p>
          </div>

          <Link
            to="/orders/FL-10294"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#5B4DED] to-[#8737E8] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#6955E8]/20 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            View Order Details →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrackOrder;