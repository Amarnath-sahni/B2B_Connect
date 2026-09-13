import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Factory,
  Users,
  ShieldCheck,
  TrendingUp,
  Target,
  HeartHandshake,
  ArrowRight,
  BadgeCheck,
  Package,
  Truck,
  Search,
  ChevronDown,
  CheckCircle2,
  Star,
  MapPin,
} from "lucide-react";

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    {
      number: "500+",
      label: "Manufacturing Partners",
      icon: Factory,
    },
    {
      number: "10K+",
      label: "Products Listed",
      icon: Package,
    },
    {
      number: "5K+",
      label: "Business Connections",
      icon: Users,
    },
    {
      number: "50+",
      label: "Locations Covered",
      icon: MapPin,
    },
  ];

  const values = [
    {
      title: "Verified Manufacturing Partners",
      description:
        "Discover manufacturers and factories with detailed business information, capabilities and product categories.",
      icon: ShieldCheck,
    },
    {
      title: "Easy Factory Discovery",
      description:
        "Search and compare factories based on products, manufacturing capabilities, location and ratings.",
      icon: Search,
    },
    {
      title: "Simplified Order Journey",
      description:
        "Manage your journey from product discovery and factory selection to orders and shipment tracking.",
      icon: Truck,
    },
  ];

  const faqs = [
    {
      question: "What is this manufacturing marketplace?",
      answer:
        "Our platform helps businesses discover products, explore manufacturers, compare factory capabilities and manage their orders in one organized place.",
    },
    {
      question: "How can I find a suitable factory?",
      answer:
        "You can explore factories, review their ratings, locations, manufacturing capabilities, products and other important business information before making a decision.",
    },
    {
      question: "Can I compare different manufacturers?",
      answer:
        "Yes. Our goal is to make factory discovery easier by providing important information such as products, ratings, manufacturing capacity and minimum order quantities.",
    },
    {
      question: "Can I track my orders and shipments?",
      answer:
        "Yes. Users can manage their orders, check order status and track shipments through their dashboard.",
    },
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          About Us | Textile Manufacturers & Factory Marketplace
        </title>

        <meta
          name="description"
          content="Discover how our textile manufacturing marketplace connects businesses with factories, manufacturers and suppliers. Explore products, compare factories and manage orders easily."
        />

        <meta
          name="keywords"
          content="textile manufacturers, textile factories, clothing manufacturers, factory marketplace, garment manufacturers, textile suppliers"
        />

        <link rel="canonical" href="/about" />
      </Helmet>

      <main className="min-h-screen bg-[#F8F9FC]">

        {/* ================= HERO ================= */}
        <header className="border-b border-[#E8EAF4] bg-white">
          <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 lg:px-8 lg:py-20">

            <div className="mx-auto max-w-3xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#E3DFFF] bg-[#F5F3FF] px-3 py-1.5">
                <Factory size={14} className="text-[#6955E8]" />

                <span className="text-[11px] font-bold text-[#6955E8]">
                  TEXTILE MANUFACTURING MARKETPLACE
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#17386F] sm:text-4xl lg:text-5xl">
                Connecting Businesses With
                <span className="block text-[#6955E8]">
                  Trusted Manufacturing Partners
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base">
                We are building a simpler way for businesses to discover
                textile products, explore manufacturers, compare factories and
                manage their complete order journey in one platform.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  to="/factories"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#6955E8] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#5845D5]"
                >
                  Explore Factories

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/categories"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E1E4ED] bg-white px-5 py-3 text-sm font-semibold text-[#17386F] transition hover:bg-[#F8F9FC]"
                >
                  Browse Products
                </Link>

              </div>

              {/* TRUST POINTS */}
              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2">

                <TrustPoint text="Factory Information" />

                <TrustPoint text="Product Discovery" />

                <TrustPoint text="Order Management" />

              </div>

            </div>
          </div>
        </header>


        {/* ================= STATS ================= */}
        <section
          aria-labelledby="platform-stats"
          className="mx-auto max-w-[1200px] px-5 py-8 sm:px-6 lg:px-8"
        >
          <h2 id="platform-stats" className="sr-only">
            Marketplace Statistics
          </h2>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group rounded-xl border border-[#E7E9F2] bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#D8D2FF] hover:shadow-md"
                >
                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F1EFFF] transition group-hover:scale-105">
                      <Icon size={18} className="text-[#6955E8]" />
                    </div>

                    <div>
                      <p className="text-xl font-extrabold text-[#17386F]">
                        {stat.number}
                      </p>

                      <p className="text-[11px] text-[#64748B]">
                        {stat.label}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </section>


        {/* ================= OUR STORY ================= */}
        <section
          aria-labelledby="our-story"
          className="mx-auto max-w-[1200px] px-5 py-10 sm:px-6 lg:px-8"
        >

          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">

            {/* STORY */}
            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6955E8]">
                Our Story
              </p>

              <h2
                id="our-story"
                className="mt-2 text-2xl font-extrabold tracking-tight text-[#17386F] sm:text-3xl"
              >
                Making Textile Manufacturing Easier to Access
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#64748B]">
                Finding the right textile manufacturer can be challenging.
                Businesses often spend valuable time searching for factories,
                comparing manufacturing capabilities and managing different
                suppliers.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#64748B]">
                Our platform brings product discovery, factory exploration and
                order management together to create a more organized and
                transparent manufacturing experience.
              </p>

              <Link
                to="/how-it-works"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#6955E8]"
              >
                Learn how our platform works

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>


            {/* MISSION */}
            <div className="rounded-2xl border border-[#E7E9F2] bg-white p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1EFFF]">
                  <Target size={20} className="text-[#6955E8]" />
                </div>

                <div>
                  <h2 className="font-bold text-[#17386F]">
                    Our Mission
                  </h2>

                  <p className="text-xs text-[#64748B]">
                    A better manufacturing ecosystem.
                  </p>
                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-[#64748B]">
                Our mission is to make it easier for businesses to connect
                with manufacturing partners and manage their product
                requirements efficiently.
              </p>

              <div className="mt-5 space-y-3 border-t border-[#EEF0F5] pt-5">

                <MissionItem text="Connect businesses with manufacturing partners" />

                <MissionItem text="Make factory discovery more transparent" />

                <MissionItem text="Simplify product and order management" />

                <MissionItem text="Create stronger buyer and manufacturer connections" />

              </div>

            </div>

          </div>

        </section>


        {/* ================= WHY PLATFORM ================= */}
        <section
          aria-labelledby="why-platform"
          className="border-y border-[#E8EAF4] bg-white"
        >

          <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 lg:px-8">

            <div className="max-w-2xl">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6955E8]">
                Why Choose Our Platform
              </p>

              <h2
                id="why-platform"
                className="mt-2 text-2xl font-extrabold text-[#17386F]"
              >
                Everything You Need for Better Manufacturing Decisions
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#64748B]">
                Explore manufacturers, understand their capabilities and manage
                your manufacturing journey from one organized platform.
              </p>

            </div>


            <div className="mt-7 grid gap-4 md:grid-cols-3">

              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-xl border border-[#E7E9F2] bg-[#FBFCFE] p-5 transition-all hover:-translate-y-1 hover:border-[#D8D2FF] hover:shadow-sm"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1EFFF]">
                      <Icon
                        size={19}
                        className="text-[#6955E8]"
                      />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-[#17386F]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#64748B]">
                      {item.description}
                    </p>

                  </article>
                );
              })}

            </div>

          </div>

        </section>


        {/* ================= PROCESS ================= */}
        <section
          aria-labelledby="how-it-works"
          className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 lg:px-8"
        >

          <div className="text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6955E8]">
              How It Works
            </p>

            <h2
              id="how-it-works"
              className="mt-2 text-2xl font-extrabold text-[#17386F]"
            >
              From Product Discovery to Delivery
            </h2>

          </div>


          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <ProcessCard
              number="01"
              icon={Search}
              title="Discover Products"
              description="Explore textile products and manufacturing categories."
            />

            <ProcessCard
              number="02"
              icon={Factory}
              title="Explore Factories"
              description="Compare manufacturers and their capabilities."
            />

            <ProcessCard
              number="03"
              icon={Package}
              title="Manage Orders"
              description="Keep track of your orders and requirements."
            />

            <ProcessCard
              number="04"
              icon={Truck}
              title="Track Shipments"
              description="Follow your shipment until delivery."
            />

          </div>

        </section>


        {/* ================= FAQ ================= */}
        <section
          aria-labelledby="faq"
          className="border-t border-[#E8EAF4] bg-white"
        >

          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6">

            <div className="text-center">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6955E8]">
                Frequently Asked Questions
              </p>

              <h2
                id="faq"
                className="mt-2 text-2xl font-extrabold text-[#17386F]"
              >
                Questions About Our Platform
              </h2>

            </div>


            <div className="mt-7 space-y-3">

              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-[#E7E9F2] bg-white"
                >

                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-4 text-left"
                    aria-expanded={openFaq === index}
                  >

                    <span className="text-sm font-semibold text-[#17386F]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#6955E8] transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />

                  </button>


                  {openFaq === index && (
                    <div className="border-t border-[#EEF0F5] px-4 py-4">
                      <p className="text-sm leading-6 text-[#64748B]">
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 lg:px-8">

          <div className="rounded-2xl bg-[#17386F] px-6 py-10 text-center sm:px-10">

            <div className="mx-auto max-w-2xl">

              <HeartHandshake
                size={28}
                className="mx-auto text-[#AFA5FF]"
              />

              <h2 className="mt-4 text-2xl font-extrabold text-white">
                Ready to Find the Right Manufacturing Partner?
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#C8D3E8]">
                Explore factories, discover products and start building better
                manufacturing connections today.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  to="/factories"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#17386F] transition hover:-translate-y-0.5"
                >
                  Explore Factories
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/categories"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Browse Products
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};


/* ================= COMPONENTS ================= */

const TrustPoint = ({ text }) => (
  <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#64748B]">
    <CheckCircle2 size={14} className="text-[#10B981]" />
    {text}
  </div>
);


const MissionItem = ({ text }) => (
  <div className="flex items-center gap-3">

    <CheckCircle2
      size={17}
      className="shrink-0 text-[#10B981]"
    />

    <p className="text-xs font-medium text-[#475569]">
      {text}
    </p>

  </div>
);


const ProcessCard = ({ number, icon: Icon, title, description }) => (
  <article className="group relative rounded-xl border border-[#E7E9F2] bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md">

    <span className="absolute right-4 top-4 text-[11px] font-bold text-[#D5D9E5]">
      {number}
    </span>

    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1EFFF]">
      <Icon size={19} className="text-[#6955E8]" />
    </div>

    <h3 className="mt-4 text-sm font-bold text-[#17386F]">
      {title}
    </h3>

    <p className="mt-2 text-xs leading-6 text-[#64748B]">
      {description}
    </p>

  </article>
);


export default About;
