import {
  ShoppingBag,
  ShoppingCart,
  MapPin,
  Headphones,
  History,
  Truck,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Browse Products",
    icon: ShoppingBag,
    path: "/categories",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "My Cart",
    icon: ShoppingCart,
    path: "/cart",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "Saved Addresses",
    icon: MapPin,
    path: "/dashboard/addresses",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Support",
    icon: Headphones,
    path: "/support",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Order History",
    icon: History,
    path: "/dashboard/orders/history",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Track Shipment",
    icon: Truck,
    path: "/shipment",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
];

const QuickActions = () => {
  return (
    <section>
      {/* Section Header */}
      <div className="mb-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6955E8]">
          Quick Access
        </p>

        <h2 className="mt-0.5 text-lg font-extrabold tracking-tight text-[#17386F]">
          What would you like to do?
        </h2>
      </div>

      {/* 3 Cards Per Row */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.path}
              className="group flex items-center justify-between rounded-xl border border-[#E8EAF4] bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D8D2FF] hover:shadow-md"
            >
              {/* Icon + Title */}
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${action.iconBg}`}
                >
                  <Icon size={17} className={action.iconColor} />
                </div>

                <span className="truncate text-sm font-semibold text-[#17386F]">
                  {action.title}
                </span>
              </div>

              {/* Arrow */}
              <ChevronRight
                size={16}
                className="ml-3 shrink-0 text-[#B7BDCC] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#6955E8]"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;