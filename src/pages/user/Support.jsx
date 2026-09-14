import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Package,
  Truck,
  CreditCard,
  Factory,
  HelpCircle,
  ChevronDown,
  Send,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "Open your dashboard and go to Track Order. You can view your order status, shipment progress, and delivery updates there.",
  },
  {
    question: "How can I contact a factory?",
    answer:
      "Open the factory profile from the marketplace and use the available contact or enquiry option to discuss your requirements.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Order cancellation depends on the current order status and whether production or shipment has started.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on the product, factory processing time, delivery method, and destination.",
  },
  {
    question: "How do I get wholesale pricing?",
    answer:
      "Select a product, choose a factory, enter your required quantity, and compare the available pricing options.",
  },
  {
    question: "Is FabricLink safe for bulk orders?",
    answer:
      "FabricLink is designed to help businesses discover suppliers, compare options, manage orders, and track deliveries in one place.",
  },
];

const supportTopics = [
  {
    icon: Package,
    title: "Order Support",
    description: "Order status, cancellation and order issues.",
    color: "indigo",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Shipping, tracking and delivery questions.",
    color: "emerald",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Payment, pricing and billing assistance.",
    color: "amber",
  },
  {
    icon: Factory,
    title: "Factory & Suppliers",
    description: "Supplier enquiries and factory assistance.",
    color: "violet",
  },
];

const SupportPage = () => {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredFaqs = faqs.filter((faq) =>
    `${faq.question} ${faq.answer}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-slate-900">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-600"
          >
            <ArrowLeft size={17} />
            Back
          </Link>

          <div className="text-center">

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50">
              <HelpCircle
                size={25}
                className="text-indigo-600"
              />
            </div>

            <h1 className="text-3xl font-black tracking-tight text-[#102D5B] sm:text-4xl">
              How can we help?
            </h1>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Find answers, get help with your orders, or contact the
              FabricLink support team.
            </p>

            {/* Search */}
            <div className="mx-auto mt-6 max-w-2xl">
              <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100">

                <Search
                  size={20}
                  className="shrink-0 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for help..."
                  className="w-full bg-transparent px-3 py-4 text-sm outline-none placeholder:text-slate-400"
                />

              </div>
            </div>

          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Support Topics */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-black text-[#102D5B]">
              What do you need help with?
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose a topic to find the right support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {supportTopics.map((item) => {
              const Icon = item.icon;

              const styles = {
                indigo: "bg-indigo-50 text-indigo-600",
                emerald: "bg-emerald-50 text-emerald-600",
                amber: "bg-amber-50 text-amber-600",
                violet: "bg-violet-50 text-violet-600",
              };

              return (
                <button
                  key={item.title}
                  type="button"
                  className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                >

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles[item.color]}`}
                  >
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-4 font-bold text-[#102D5B]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>

                </button>
              );
            })}

          </div>
        </section>

        {/* FAQ + Contact */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">

          {/* FAQ */}
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="mb-6">
              <h2 className="text-xl font-black text-[#102D5B]">
                Frequently Asked Questions
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Quick answers to common FabricLink questions.
              </p>
            </div>

            <div className="space-y-3">

              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className="overflow-hidden rounded-2xl border border-slate-200"
                    >

                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-slate-50"
                      >

                        <span className="text-sm font-bold text-slate-800">
                          {faq.question}
                        </span>

                        <ChevronDown
                          size={18}
                          className={`shrink-0 text-slate-400 transition ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />

                      </button>

                      {isOpen && (
                        <div className="border-t border-slate-100 px-4 pb-4 pt-3">
                          <p className="text-sm leading-6 text-slate-500">
                            {faq.answer}
                          </p>
                        </div>
                      )}

                    </div>
                  );
                })
              ) : (
                <div className="rounded-2xl bg-slate-50 p-8 text-center">
                  <Search
                    size={24}
                    className="mx-auto text-slate-400"
                  />

                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    No matching questions found.
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Try another search or contact our support team.
                  </p>
                </div>
              )}

            </div>
          </section>

          {/* Contact Support */}
          <aside className="space-y-4">

            <div className="rounded-3xl bg-[#102D5B] p-6 text-white shadow-lg">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <MessageCircle size={22} />
              </div>

              <h2 className="mt-5 text-xl font-black">
                Still need help?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Our support team is here to help with orders, factories,
                payments and deliveries.
              </p>

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#102D5B] transition hover:bg-slate-100"
              >
                <MessageCircle size={17} />
                Contact Support
              </button>

            </div>

            {/* Contact Options */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

              <h3 className="font-bold text-[#102D5B]">
                Contact us
              </h3>

              <div className="mt-4 space-y-3">

                <a
                  href="mailto:hello@fabriclink.com"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-indigo-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50">
                    <Mail size={17} className="text-indigo-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      Email
                    </p>

                    <p className="text-sm font-semibold text-slate-700">
                      hello@fabriclink.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-emerald-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                    <Phone size={17} className="text-emerald-600" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      Phone
                    </p>

                    <p className="text-sm font-semibold text-slate-700">
                      +91 98765 43210
                    </p>
                  </div>
                </a>

              </div>

            </div>

            {/* Support Availability */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                  <Clock3
                    size={17}
                    className="text-emerald-600"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#102D5B]">
                    Support Hours
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>

              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
                <ShieldCheck
                  size={15}
                  className="text-emerald-600"
                />

                <span className="text-xs font-semibold text-slate-500">
                  Business support available
                </span>
              </div>

            </div>

          </aside>

        </div>

        {/* Contact Form */}
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                <Send size={20} className="text-indigo-600" />
              </div>

              <h2 className="mt-4 text-xl font-black text-[#102D5B]">
                Send us a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Can't find what you're looking for? Tell us about your
                issue and our team will get back to you.
              </p>
            </div>

            <form className="grid gap-4 sm:grid-cols-2">

              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <input
                type="email"
                placeholder="Email address"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <input
                type="text"
                placeholder="Order ID (optional)"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <select
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              >
                <option>Select issue</option>
                <option>Order</option>
                <option>Delivery</option>
                <option>Payment</option>
                <option>Factory</option>
                <option>Other</option>
              </select>

              <textarea
                rows={4}
                placeholder="Describe your issue..."
                className="resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 sm:col-span-2"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-200/50 transition hover:bg-indigo-700 sm:col-span-2"
              >
                <Send size={17} />
                Send Message
              </button>

            </form>

          </div>

        </section>

      </main>
    </div>
  );
};

export default SupportPage;