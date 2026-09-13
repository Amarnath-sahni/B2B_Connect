
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Shirt,
  Factory,
  IndianRupee,
  ShoppingCart,
  Truck,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import image from "../../assets/image.png";

/* ============================================================
   STATIC DATA
   ============================================================ */

const processSteps = [
  { title: "Select Product", icon: Shirt, color: "#6366F1" },
  { title: "Choose Factory", icon: Factory, color: "#8B5CF6" },
  { title: "Get Best Pricing", icon: IndianRupee, color: "#F97316" },
  { title: "Place Order", icon: ShoppingCart, color: "#8B5CF6" },
  { title: "Track Shipment", icon: Truck, color: "#6366F1" },
  { title: "Delivered", icon: CheckCircle, color: "#10B981" },
];

const STEP_INTERVAL_MS = 1800;
const CIRCLE_SIZE = 50;

/*
 * Anchor points for the desktop process flow.
 * Kept outside the component so they are not recreated.
 */
const stepAnchors = [
  { x: 42, y: 8 },
  { x: 20, y: 23 },
  { x: 10, y: 42 },
  { x: 10, y: 61 },
  { x: 20, y: 79 },
  { x: 42, y: 92 },
];

/* ============================================================
   SVG PATH
   ============================================================ */

const buildSmoothPath = (points) => {
  if (points.length < 2) return "";

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const current = points[i];
    const next = points[i + 1];

    const midX = (current.x + next.x) / 2;
    const midY = (current.y + next.y) / 2;

    d += ` Q ${current.x} ${current.y} ${midX} ${midY}`;
  }

  const last = points[points.length - 1];

  d += ` L ${last.x} ${last.y}`;

  return d;
};

/*
 * Static value.
 * No need to calculate this on every ProcessFlow render.
 */
const processPath = buildSmoothPath(stepAnchors);

/* ============================================================
   TRUST ITEM
   ============================================================ */

const TrustItem = ({
  icon: Icon,
  iconClass,
  bgClass,
  title,
  subtitle,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div
        aria-hidden="true"
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${bgClass}`}
      >
        <Icon size={20} className={iconClass} />
      </div>

      <div>
        <p className="whitespace-nowrap text-[11px] font-bold text-[#122D59]">
          {title}
        </p>

        <p className="whitespace-nowrap text-[10px] text-[#526581]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

/* ============================================================
   PROCESS STEP
   ============================================================ */

const ProcessStep = ({ step, active, reducedMotion }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={false}
      animate={
        reducedMotion
          ? { opacity: 1, scale: 1 }
          : {
              opacity: active ? 1 : 0.5,
              scale: active ? 1 : 0.97,
            }
      }
      transition={{ duration: 0.3 }}
      className="relative z-20 flex items-center"
    >
      {/* STEP CIRCLE */}

      <motion.div
        initial={false}
        animate={
          reducedMotion || !active
            ? {
                scale: 1,
                boxShadow: "0 8px 20px rgba(40,40,100,0.10)",
              }
            : {
                scale: [1, 1.06, 1],
                boxShadow: [
                  `0 0 0px ${step.color}00`,
                  `0 0 22px ${step.color}60`,
                  `0 0 8px ${step.color}20`,
                ],
              }
        }
        transition={
          reducedMotion || !active
            ? { duration: 0.25 }
            : {
                duration: STEP_INTERVAL_MS / 1000,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        style={{
          height: CIRCLE_SIZE,
          width: CIRCLE_SIZE,
        }}
        className="relative flex shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-white"
      >
        {active && !reducedMotion && (
          <motion.div
            aria-hidden="true"
            animate={{
              opacity: [0.15, 0.35, 0.15],
              scale: [0.85, 1.1, 0.85],
            }}
            transition={{
              duration: STEP_INTERVAL_MS / 1000,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(
                circle,
                ${step.color}40 0%,
                transparent 70%
              )`,
            }}
          />
        )}

        <Icon
          aria-hidden="true"
          size={21}
          strokeWidth={2.3}
          className="relative z-10"
          style={{ color: step.color }}
        />
      </motion.div>

      {/* LABEL */}

      <motion.div
        initial={false}
        animate={
          reducedMotion
            ? { opacity: 1, x: 0 }
            : {
                opacity: active ? 1 : 0.65,
                x: active ? 4 : 0,
              }
        }
        transition={{ duration: 0.3 }}
        className="ml-2 flex h-[36px] items-center rounded-full border border-white bg-white/90 px-4 shadow-[0_7px_20px_rgba(60,50,120,0.10)] backdrop-blur-xl"
      >
        <span className="whitespace-nowrap text-[11px] font-bold text-[#142E5C]">
          {step.title}
        </span>
      </motion.div>
    </motion.div>
  );
};

/* ============================================================
   DESKTOP PROCESS FLOW
   ============================================================ */

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    /*
     * Do not create a timer when the user prefers reduced motion.
     */
    if (reducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveStep((current) =>
        current === processSteps.length - 1 ? 0 : current + 1
      );
    }, STEP_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="relative h-full w-full">
      {/* CONNECTOR */}

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <motion.path
          d={processPath}
          fill="none"
          stroke="#C4B5FD"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="0.6 3.2"
          vectorEffect="non-scaling-stroke"
          initial={false}
          animate={
            reducedMotion
              ? { strokeDashoffset: 0 }
              : { strokeDashoffset: [0, -40] }
          }
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        />
      </svg>

      {/* PROCESS STEPS */}

      {processSteps.map((step, index) => {
        const anchor = stepAnchors[index];

        return (
          <div
            key={step.title}
            className="absolute"
            style={{
              left: `${anchor.x}%`,
              top: `${anchor.y}%`,
              transform: `translate(-${CIRCLE_SIZE / 2}px, -50%)`,
            }}
          >
            <ProcessStep
              step={step}
              active={index === activeStep}
              reducedMotion={reducedMotion}
            />
          </div>
        );
      })}
    </div>
  );
};

/* ============================================================
   HERO SECTION
   ============================================================ */

const HeroSec = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-white"
    >
      {/* ======================================================
          HERO IMAGE

          Using <img> instead of CSS background allows the
          browser to prioritize and measure the image properly.
      ====================================================== */}

      <img
        src={image}
        alt="Textile manufacturing and wholesale clothing supply"
        fetchPriority="high"
        decoding="async"
        width="1920"
        height="1080"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* ======================================================
          IMAGE OVERLAY
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[2%] to-white/10"
      />

      {/* ======================================================
          DECORATIVE LIGHTS

          Hidden on smaller screens to reduce GPU work.
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[25%] top-[-100px] hidden h-[450px] w-[450px] rounded-full bg-[#B9A3FF]/20 blur-[120px] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-150px] right-[20%] hidden h-[400px] w-[400px] rounded-full bg-[#F9A8D4]/20 blur-[110px] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[210px] -right-[120px] hidden h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#F472B6] via-[#FB7185] to-[#FDBA74] lg:block"
      />

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 grid w-full grid-cols-1 lg:min-h-[calc(100vh-50px)] lg:grid-cols-[48%_52%]">
        {/* ====================================================
            LEFT CONTENT
            <div className="flex flex-col justify-center px-5 py-10 sm:px-8 lg:px-8 xl:px-10">
        ==================================================== */}

<div className="flex flex-col justify-Center items-center text-center px-6 py-10 sm:px-8 lg:px-10 xl:px-12">
          <h1
            id="hero-title"
            className="max-w-[650px] text-[34px] font-extrabold leading-[1.02] tracking-[-1.5px] text-[#040a14] sm:text-[40px] lg:text-[44px] xl:text-[46px]"
          >
            Trusted Textile Sourcing
            <span className="mt-1 block bg-gradient-to-r from-[#5B5FEF] via-[#A855F7] to-[#F05CA8] bg-clip-text text-transparent">
              From Factory to Delivery
            </span>
          </h1>

          <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-[#30466C] sm:text-[15px]">
            Connect with textile factories, compare wholesale pricing,
            place bulk clothing orders, and track your shipment from
            factory to delivery.
          </p>

          {/* ==================================================
              CTA BUTTONS
          ================================================== */}

          <nav
            aria-label="Hero navigation"
            className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              to="/categories"
              className="group inline-flex h-[46px] items-center gap-3 rounded-xl bg-gradient-to-r from-[#5B55E8] to-[#7957F3] px-6 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(91,85,232,0.28)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2"
            >
              Explore Categories

              <ArrowRight
                aria-hidden="true"
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/how-it-works"
              className="inline-flex h-[46px] items-center gap-3 rounded-xl border border-[#D9DDEE] bg-white/80 px-5 text-[13px] font-bold text-[#142E5C] shadow-sm backdrop-blur-md transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2"
            >
              How It Works

              <Play
                aria-hidden="true"
                size={14}
                fill="currentColor"
              />
            </Link>
          </nav>

          {/* ==================================================
              TRUST INFORMATION
          ================================================== */}

          <div
            aria-label="FabricLink benefits"
            className="mt-10 flex flex-wrap items-center gap-6 lg:gap-5"
          >
            <TrustItem
              icon={CheckCircle2}
              iconClass="text-[#10B981]"
              bgClass="bg-[#ECFDF5]"
              title="Factory Network"
              subtitle="Trusted Suppliers"
            />

            <TrustItem
              icon={IndianRupee}
              iconClass="text-[#6366F1]"
              bgClass="bg-[#EEF2FF]"
              title="Best Pricing"
              subtitle="Competitive Rates"
            />

            <TrustItem
              icon={Truck}
              iconClass="text-[#8B5CF6]"
              bgClass="bg-[#F5F3FF]"
              title="On-Time Delivery"
              subtitle="Reliable & Fast"
            />
          </div>
        </div>

        {/* ====================================================
            DESKTOP PROCESS
        ==================================================== */}

        <div className="relative hidden min-h-[600px] lg:block">
          <ProcessFlow />
        </div>
      </div>

      {/* ======================================================
          MOBILE PROCESS
      ====================================================== */}

      <div className="relative z-20 mt-4 block px-5 pb-10 lg:hidden">
        <div className="relative mx-auto max-w-md">
          {/* Vertical connector */}

          <svg
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[25px] top-[25px]"
            style={{ left: CIRCLE_SIZE / 2 - 1 }}
            width="2"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 2 100"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="#C4B5FD"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="1 3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative flex flex-col gap-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={
                    reducedMotion
                      ? false
                      : { opacity: 0, x: -8 }
                  }
                  whileInView={
                    reducedMotion
                      ? undefined
                      : { opacity: 1, x: 0 }
                  }
                  viewport={{ once: true, amount: 0.5 }}
                  transition={
                    reducedMotion
                      ? undefined
                      : {
                          duration: 0.35,
                          delay: index * 0.05,
                        }
                  }
                  className="relative z-10 flex min-h-[52px] items-center"
                >
                  <div
                    style={{
                      height: CIRCLE_SIZE,
                      width: CIRCLE_SIZE,
                    }}
                    className="flex shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-white shadow-[0_7px_22px_rgba(60,50,120,0.12)]"
                  >
                    <Icon
                      aria-hidden="true"
                      size={20}
                      style={{ color: step.color }}
                    />
                  </div>

                  <div className="ml-2 flex h-[36px] items-center rounded-full border border-white bg-white/90 px-4 shadow-md backdrop-blur-md">
                    <span className="text-[11px] font-bold text-[#142E5C]">
                      {step.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
