import { BadgeCheck, Tag, ShieldCheck, Timer } from "lucide-react";

/* ============================================================
   FEATURE DATA
============================================================ */

const features = [
  {
    icon: BadgeCheck,
    iconClass: "text-[#7C3AED]",
    bgClass: "bg-[#EDE9FE]",
    title: "Verified Factories",
    description: "All factories are verified for quality & reliability",
  },
  {
    icon: Tag,
    iconClass: "text-[#F97316]",
    bgClass: "bg-[#FEF3E2]",
    title: "Best Prices",
    description: "Compare pricing and get the best deals",
  },
  {
    icon: ShieldCheck,
    iconClass: "text-[#10B981]",
    bgClass: "bg-[#ECFDF5]",
    title: "Secure Payments",
    description: "Safe and secure transaction system",
  },
  {
    icon: Timer,
    iconClass: "text-[#F59E0B]",
    bgClass: "bg-[#FEF3E2]",
    title: "On-Time Delivery",
    description: "Track your order in real-time till it reaches you",
  },
];

/* ============================================================
   FEATURE ITEM
============================================================ */

const FeatureItem = ({ icon: Icon, iconClass, bgClass, title, description }) => {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bgClass}`}
      >
        <Icon size={20} strokeWidth={2.2} className={iconClass} />
      </div>

      <div className="min-w-0">
        <p className="text-[14px] font-bold text-[#102D5B]">{title}</p>
        <p className="mt-0.5 text-[13px] leading-snug text-[#64748B]">
          {description}
        </p>
      </div>
    </div>
  );
};

/* ============================================================
   TRUST FEATURES STRIP
============================================================ */

const TrustFeatures = () => {
  return (
    <section className="px-5 py-8 sm:px-8 lg:px-10 bg-pink-100">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(30,41,59,0.06)] sm:p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;