
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
   HOW IT WORKS
============================================================ */

const HowItWorks = () => {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="w-full overflow-hidden
        bg-[#F4F3EF] px-5 py-10 sm:px-8 sm:py-20 lg:px-10 lg:py-17"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* ==================================================
            HEADING
        ================================================== */}

        <div className="max-w-[700px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7C3AED] sm:text-xs">
            How FabricLink Works
          </p>

          <h2
            id="how-it-works-title"
            className="mt-3 text-[28px] font-extrabold leading-[1.18] tracking-[-0.025em] text-[#102D5B] sm:text-[34px] lg:text-[38px]"
          >
            From Product to Delivery,
            <span className="text-[#5B4BCE]"> Made Simple</span>
          </h2>

          <p className="mt-4 max-w-[640px] text-[14px] leading-7 text-[#64748B] sm:text-[15px]">
            Choose what you need, connect with trusted factories, get the right
            price, and receive your order with confidence.
          </p>
        </div>

        {/* ==================================================
            DESKTOP / TABLET JOURNEY
        ================================================== */}

        <div className="relative mt-14 hidden md:block lg:mt-16">
          {/* Main horizontal journey line */}

          <div
            aria-hidden="true"
            className="absolute left-[8.33%] right-[8.33%] top-[55px] h-px bg-[#DDE3EE]"
          />

          {/* Journey nodes */}

          <div className="grid grid-cols-6 gap-3 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="
                    group relative min-w-0 cursor-default rounded-[20px]
                    border border-transparent px-2 py-3 text-center
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:border-[#E2E7F0]
                    hover:bg-white
                    hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]
                    lg:px-3 lg:py-4
                  "
                >
                  {/* Step number */}

                  <div className="mb-3 flex justify-center">
                    <span
                      className="
                        inline-flex h-6 min-w-6 items-center justify-center
                        rounded-full border border-[#E1E5EE] bg-[#FAFBFF]
                        px-1.5 text-[10px] font-bold tracking-wide text-[#64748B]
                        transition-all duration-300
                        group-hover:border-[#CFC8FF]
                        group-hover:text-[#5B4BCE]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}

                  <div className="relative z-10 flex justify-center">
                    <div
                      className={`
                        flex h-[82px] w-[82px]
                        items-center justify-center
                        rounded-[24px]
                        border border-white
                        ${step.bgClass}
                        shadow-[0_8px_24px_rgba(15,23,42,0.05)]
                        ring-1 ring-[#E8EBF2]
                        transition-all duration-300
                        group-hover:-translate-y-0.5
                        group-hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]
                      `}
                    >
                      <Icon
                        aria-hidden="true"
                        size={32}
                        strokeWidth={1.9}
                        className={`${step.iconClass} transition-transform duration-300 group-hover:scale-105`}
                      />
                    </div>
                  </div>

                  {/* Small connector marker */}

                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute z-20 top-[52px] hidden h-2 w-2 rounded-full
                        border-2 border-[#FAFBFF] bg-[#C7D0DE]
                        lg:block
                      "
                      style={{ right: "-2.5%" }}
                    />
                  )}

                  {/* Content */}

                  <div className="mt-5">
                    <h3 className="min-h-[20px] text-[13px] font-bold leading-5 text-[#102D5B] lg:text-[14px]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[155px] text-[11px] leading-[1.55] text-[#64748B] lg:text-[12px]">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            MOBILE JOURNEY
        ================================================== */}

        <div className="mt-11 md:hidden">
          <div className="relative">
            {/* Vertical journey line */}

            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[40px] top-10 w-px bg-[#DDE3EE]"
            />

            <div className="relative space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="
                      group relative flex items-start gap-4
                      rounded-[18px] border border-[#E9EDF4]
                      bg-white/70 p-3
                      transition-all duration-200
                      active:scale-[0.99]
                      active:bg-white
                    "
                  >
                    {/* Number + icon */}

                    <div className="relative z-10 flex w-[58px] shrink-0 flex-col items-center">
                      <span className="mb-2 text-[10px] font-bold tracking-[0.1em] text-[#64748B]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div
                        className={`
                          flex h-[58px] w-[58px]
                          items-center justify-center
                          rounded-[18px] border border-white
                          ${step.bgClass}
                          shadow-[0_6px_18px_rgba(15,23,42,0.05)]
                          ring-1 ring-[#E8EBF2]
                        `}
                      >
                        <Icon
                          aria-hidden="true"
                          size={25}
                          strokeWidth={1.9}
                          className={step.iconClass}
                        />
                      </div>
                    </div>

                    {/* Content */}

                    <div className="min-w-0 flex-1 pt-6">
                      <h3 className="text-[14px] font-bold leading-5 text-[#102D5B]">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 text-[13px] leading-6 text-[#64748B]">
                        {step.description}
                      </p>
                    </div>
                  </article>
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
