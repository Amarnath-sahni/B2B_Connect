import {
  Package,
  Truck,
  CheckCircle2,
  Clock3,
  XCircle,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const RecentOrders = () => {
  const orders = [
    {
      id: "FL-10295",
      product: "Premium Cotton T-Shirt",
      quantity: "500 pieces",
      amount: "₹1,24,500",
      date: "Sep 6, 2026",
      status: "Pending",
    },
    {
      id: "FL-10294",
      product: "Organic Cotton Fabric",
      quantity: "300 meters",
      amount: "₹86,400",
      date: "Sep 4, 2026",
      status: "In Transit",
    },
    {
      id: "FL-10290",
      product: "Denim Fabric",
      quantity: "200 meters",
      amount: "₹64,800",
      date: "Aug 28, 2026",
      status: "Delivered",
    },
  ];

  const statusConfig = {
    Pending: {
      icon: Clock3,
      style: "bg-orange-50 text-orange-600",
    },
    "In Transit": {
      icon: Truck,
      style: "bg-blue-50 text-blue-600",
    },
    Delivered: {
      icon: CheckCircle2,
      style: "bg-emerald-50 text-emerald-600",
    },
    Cancelled: {
      icon: XCircle,
      style: "bg-red-50 text-red-600",
    },
  };

  return (
    <section className="rounded-2xl border border-[#E7E9F2] bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#EEF0F5] px-6 py-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#6955E8]">
            Orders
          </p>

          <h2 className="mt-1 text-xl font-extrabold text-[#17386F]">
            Recent Orders
          </h2>
        </div>

        <Link
          to="/dashboard/orders"
          className="text-sm font-bold text-[#6955E8] hover:text-[#5141D6]"
        >
          View all
        </Link>
      </div>

      {/* Orders */}
      <div className="divide-y divide-[#EEF0F5]">
        {orders.map((order) => {
          const config = statusConfig[order.status];
          const StatusIcon = config.icon;

          return (
            <Link
              key={order.id}
              to={`/orders/${order.id}`}
              className="flex flex-col gap-4 px-6 py-5 transition hover:bg-[#FAFAFE] md:flex-row md:items-center md:justify-between"
            >
              {/* Product */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F2FF]">
                  <Package size={19} className="text-[#6955E8]" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#17386F]">
                    {order.product}
                  </h3>

                  <p className="mt-1 text-xs text-[#94A3B8]">
                    #{order.id} · {order.quantity}
                  </p>
                </div>
              </div>

              {/* Amount */}
              <div className="md:text-right">
                <p className="text-sm font-extrabold text-[#17386F]">
                  {order.amount}
                </p>

                <p className="mt-1 text-xs text-[#94A3B8]">
                  {order.date}
                </p>
              </div>

              {/* Status */}
              <div
                className={`flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${config.style}`}
              >
                <StatusIcon size={13} />
                {order.status}
              </div>

              <ChevronRight
                size={17}
                className="hidden text-[#CBD0DD] md:block"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RecentOrders;