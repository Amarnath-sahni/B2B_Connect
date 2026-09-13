
import {
  Clock3,
  PackageCheck,
  Truck,
  CheckCircle2,
  XCircle,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const OrderOverview = () => {
  const orderStats = [
    {
      title: "Pending",
      count: 2,
      description: "Waiting for seller",
      icon: Clock3,
      path: "/dashboard/orders/pending",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      countColor: "text-orange-600",
    },
    {
      title: "Active Orders",
      count: 1,
      description: "Being processed",
      icon: PackageCheck,
      path: "/dashboard/orders/active",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      countColor: "text-indigo-600",
    },
    {
      title: "Shipments",
      count: 3,
      description: "On the way",
      icon: Truck,
      path: "/dashboard/shipments",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      countColor: "text-blue-600",
    },
    {
      title: "Delivered",
      count: 12,
      description: "Successfully delivered",
      icon: CheckCircle2,
      path: "/dashboard/orders/delivered",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      countColor: "text-emerald-600",
    },
    {
      title: "Cancelled",
      count: 2,
      description: "Cancelled orders",
      icon: XCircle,
      path: "/dashboard/orders/cancelled",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      countColor: "text-red-500",
    },
  ];

  return (
    <section>
      {/* Header */}
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-[#6955E8]">
          About Orders
        </p>
      </div>

      {/* Order Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {orderStats.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.path}
              className="group rounded-xl border border-[#E7E9F2] bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D8D2FF] hover:shadow-md"
            >
              {/* ROW 1: Icon + Name + Arrow */}
              <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center gap-2.5">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}
                  >
                    <Icon size={17} className={item.iconColor} />
                  </div>

                  <p className="truncate text-sm font-semibold text-[#17386F]">
                    {item.title}
                  </p>
                </div>

                <ChevronRight
                  size={16}
                  className="shrink-0 text-[#CBD0DD] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#6955E8]"
                />
              </div>

              {/* ROW 2: Count + Description */}
              <div className="mt-3 flex items-end justify-between border-t border-[#F1F2F6] pt-3">
                <div>
                  <p
                    className={`text-2xl font-extrabold leading-none ${item.countColor}`}
                  >
                    {item.count}
                  </p>

                  <p className="mt-1.5 text-[11px] text-[#94A3B8]">
                    {item.description}
                  </p>
                </div>

                <span className="text-[10px] font-medium text-[#A0A7B5]">
                  View
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default OrderOverview;