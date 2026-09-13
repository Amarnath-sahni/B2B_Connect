import {
  Shirt,
  Factory,
  IndianRupee,
  ShoppingCart,
  Truck,
  CheckCircle,
} from "lucide-react";

/* ============================================================
   STEP DATA
============================================================ */

const steps = [
  {
    icon: Shirt,
    iconClass: "text-[#7C3AED]",
    bgClass: "bg-[#EDE9FE]",
    title: "Select Product",
    description: "Choose the product you want to order",
  },
  {
    icon: Factory,
    iconClass: "text-[#2563EB]",
    bgClass: "bg-[#DBEAFE]",
    title: "Choose Factory",
    description: "Browse factories and compare options",
  },
  {
    icon: IndianRupee,
    iconClass: "text-[#059669]",
    bgClass: "bg-[#D1FAE5]",
    title: "Get Pricing",
    description: "Receive best quotes from factories",
  },
  {
    icon: ShoppingCart,
    iconClass: "text-[#D97706]",
    bgClass: "bg-[#FEF3C7]",
    title: "Place Order",
    description: "Confirm order and make payment",
  },
  {
    icon: Truck,
    iconClass: "text-[#E11D48]",
    bgClass: "bg-[#FEE2E2]",
    title: "Shipment",
    description: "We handle production and shipping",
  },
  {
    icon: CheckCircle,
    iconClass: "text-[#0D9488]",
    bgClass: "bg-[#CCFBF1]",
    title: "Delivered",
    description: "Get your order delivered to you",
  },
];

/* ============================================================
   CONNECTOR
============================================================ */

const Connector = () => {
  return (
    <div className="flex w-full items-center px-1">
      <div className="h-[2px] flex-1 border-t-2 border-dashed border-[#D9D6F8]" />

      <span className="mx-1 h-2 w-2 shrink-0 rotate-45 bg-[#B9AEFA]" />

      <div className="h-[2px] flex-1 border-t-2 border-dashed border-[#D9D6F8]" />
    </div>
  );
};

/* ============================================================
   HOW IT WORKS
============================================================ */

const HowItWorks = () => {
  return (
    <section className="w-full px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1180px]">

        {/* ==================================================
            HEADING
        ================================================== */}

        <div className="text-center">
          <h2 className="text-[24px] font-extrabold tracking-[-0.02em] text-[#102D5B] sm:text-[28px]">
            How It Works
          </h2>

          <p className="mx-auto mt-2 max-w-md text-[13px] leading-relaxed text-[#64748B] sm:text-[14px]">
            A simple process from selecting your product to final delivery
          </p>
        </div>

        {/* ==================================================
            DESKTOP TIMELINE
        ================================================== */}

        <div className="mt-12 hidden md:block">

          {/* ICON + CONNECTOR ROW */}

          <div
            className="
              grid items-center
              grid-cols-[72px_minmax(35px,1fr)_72px_minmax(35px,1fr)_72px_minmax(35px,1fr)_72px_minmax(35px,1fr)_72px_minmax(35px,1fr)_72px]
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="contents">
                  {/* ICON */}

                  <div className="flex justify-center">
                    <div
                      className={`
                        flex h-[72px] w-[72px]
                        items-center justify-center
                        rounded-[18px]
                        ${step.bgClass}
                        shadow-[0_8px_22px_rgba(15,23,42,0.04)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)]
                      `}
                    >
                      <Icon
                        size={30}
                        strokeWidth={2}
                        className={step.iconClass}
                      />
                    </div>
                  </div>

                  {/* CONNECTOR */}

                  {index < steps.length - 1 && (
                    <Connector />
                  )}
                </div>
              );
            })}
          </div>

          {/* ==================================================
              TEXT ROW

              Same exact grid as icon row.
          ================================================== */}

          <div
            className="
              mt-5 grid
              grid-cols-[72px_minmax(35px,1fr)_72px_minmax(35px,1fr)_72px_minmax(35px,1fr)_72px_minmax(35px,1fr)_72px_minmax(35px,1fr)_72px]
            "
          >
            {steps.map((step, index) => (
              <div key={step.title} className="contents">

                {/* TEXT */}

                <div className="px-0 text-center">
                  <h3 className="whitespace-nowrap text-[13px] font-bold leading-tight text-[#102D5B]">
                    {index + 1}. {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[145px] text-[12px] leading-[1.45] text-[#64748B]">
                    {step.description}
                  </p>
                </div>

                {/* EMPTY CONNECTOR COLUMN */}

                {index < steps.length - 1 && <div />}
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================
            MOBILE
        ================================================== */}

        <div className="mx-auto mt-9 max-w-md md:hidden">
          <div className="relative">

            {/* Vertical line */}

            <div className="absolute left-[27px] top-7 bottom-7 w-px bg-gradient-to-b from-[#C4B5FD] via-[#BFDBFE] to-[#99F6E4]" />

            <div className="relative space-y-7">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="relative flex items-start gap-4"
                  >
                    {/* ICON */}

                    <div
                      className={`
                        relative z-10
                        flex h-14 w-14 shrink-0
                        items-center justify-center
                        rounded-2xl
                        ${step.bgClass}
                        ring-4 ring-[#FAFBFF]
                      `}
                    >
                      <Icon
                        size={24}
                        strokeWidth={2}
                        className={step.iconClass}
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="pt-1">
                      <h3 className="text-[14px] font-bold text-[#102D5B]">
                        {index + 1}. {step.title}
                      </h3>

                      <p className="mt-1 text-[13px] leading-relaxed text-[#64748B]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;