import OrderOverview from "./OrderOverview";
import RecentOrders from "./RecentOrders";
import ActiveShipment from "./ActiveShipment";
import QuickActions from "./QuickActions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FE]">

      {/* ================= HEADER ================= */}
      
<section className="border-b border-[#E8EAF4] bg-[#F8F9FE]">
  <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-6 lg:px-10">
    <div className="flex items-center justify-between gap-4">
      {/* Left */}
      <div className="min-w-0">
        <div className="mb-1 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6955E8]" />

          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6955E8]">
            My Dashboard
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="hidden shrink-0 items-center gap-2 sm:flex">
        <div className="rounded-lg border border-[#E8EAF4] bg-[#F8F9FC] px-3 py-2">
          <p className="text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
            Account
          </p>
          <p className="text-xs font-semibold text-[#17386F]">
            Personal Dashboard
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ================= MAIN ================= */}
      <main className="mx-auto max-w-[1440px] space-y-7 px-6 py-7 lg:px-10">

        {/* Order Counts */}
        <OrderOverview />

        {/* Shipment + Recent Orders */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <ActiveShipment />

          <RecentOrders />
        </div>

        {/* Quick Actions */}
        <QuickActions />

      </main>
    </div>
  );
};

export default Dashboard;