import {
  Truck,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const ActiveShipment = () => {
  return (
    <section className="rounded-2xl border border-[#E7E9F2] bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#6955E8]">
            Shipment
          </p>

          <h2 className="mt-1 text-xl font-extrabold text-[#17386F]">
            Active Shipment
          </h2>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
          <Truck size={19} className="text-blue-600" />
        </div>
      </div>

      {/* Order */}
      <div className="mt-5 rounded-xl bg-gradient-to-r from-[#F5F3FF] to-[#F8FAFF] p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-extrabold text-[#17386F]">
              Organic Cotton Fabric
            </h3>

            <p className="mt-1 text-xs text-[#64748B]">
              Order #FL-10294 · 300 meters
            </p>
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-blue-600">
            In Transit
          </span>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-[11px] font-semibold">
            <span className="text-[#6955E8]">Shipped</span>
            <span className="text-[#6955E8]">In Transit</span>
            <span className="text-[#A0A8BB]">Delivered</span>
          </div>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E8EAF2]">
            <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#5B4DED] to-[#8737E8]" />
          </div>
        </div>

        {/* Location */}
        <div className="mt-4 flex items-center gap-2">
          <MapPin size={14} className="text-[#6955E8]" />

          <p className="text-xs text-[#64748B]">
            Currently at Mumbai Distribution Center
          </p>
        </div>
      </div>

      {/* Button */}
      <Link
        to="/dashboard/shipments"
        className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#DCD7FF] py-2.5 text-sm font-bold text-[#6955E8] transition hover:bg-[#F7F5FF]"
      >
        Track Shipment
        <ArrowRight size={16} />
      </Link>
    </section>
  );
};

export default ActiveShipment;