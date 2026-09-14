import {
  ArrowRight,
  BadgeCheck,
  ShoppingBag,
  Box,
  Smile,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

/* ============================================================
   STAT DATA
============================================================ */

const stats = [
  {
    icon: BadgeCheck,
    iconClass: "text-[#6366F1]",
    bgClass: "bg-[#EDE9FE]",
    value: "500+",
    label: "Verified Factories",
  },
  {
    icon: ShoppingBag,
    iconClass: "text-[#EC4899]",
    bgClass: "bg-[#FCE7F3]",
    value: "10,000+",
    label: "Textile Products",
  },
  {
    icon: Box,
    iconClass: "text-[#0EA5E9]",
    bgClass: "bg-[#E0F2FE]",
    value: "25,000+",
    label: "Orders Delivered",
  },
  {
    icon: Smile,
    iconClass: "text-[#F59E0B]",
    bgClass: "bg-[#FEF3C7]",
    value: "3,000+",
    label: "Happy Customers",
  },
];

/* ============================================================
   FOOTER LINKS
============================================================ */

const companyLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "Categories", to: "/categories" },
  { label: "Factories", to: "/factories" },
  { label: "How It Works", to: "/how-it-works" },
];

const marketplaceLinks = [
  { label: "Wholesale Clothing", to: "/categories" },
  { label: "Textile Manufacturers", to: "/factories" },
  { label: "Bulk Clothing", to: "/categories" },
  { label: "Factory Pricing", to: "/factories" },
];

const supportLinks = [
  { label: "Contact Us", to: "/contact" },
  { label: "FAQs", to: "/faqs" },
  { label: "Shipping Info", to: "/shipping" },
  { label: "Privacy Policy", to: "/privacy" },
];

/* ============================================================
   SOCIAL LINKS
============================================================ */

const socialLinks = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/groups/12872013/",
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com",
  },
];

/* ============================================================
   FOOTER LINK
============================================================ */

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="
      group flex w-fit items-center gap-1
      text-[12px] leading-5 text-slate-500
      transition-colors duration-200
      hover:text-[#4F46E5]
    "
  >
    <span>{children}</span>

    <ArrowRight
      size={12}
      className="
        -ml-1 opacity-0
        transition-all duration-200
        group-hover:ml-0
        group-hover:opacity-100
      "
    />
  </Link>
);

/* ============================================================
   STAT CARD
============================================================ */

const StatCard = ({
  icon: Icon,
  iconClass,
  bgClass,
  value,
  label,
}) => (
  <div
    className="
      group flex min-h-[135px]
      flex-col items-center justify-center
      rounded-[18px]
      border border-slate-200/80
      bg-white px-3 py-5 text-center
      shadow-[0_6px_22px_rgba(15,23,42,0.04)]
      transition-all duration-300
      hover:-translate-y-1
      hover:border-slate-300
      hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]
    "
  >
    <div
      className={`
        flex h-11 w-11 items-center justify-center
        rounded-[14px] ${bgClass}
        transition-transform duration-300
        group-hover:scale-105
      `}
    >
      <Icon
        aria-hidden="true"
        size={20}
        strokeWidth={2}
        className={iconClass}
      />
    </div>

    <p className="mt-3 text-[20px] font-extrabold tracking-tight text-[#102D5B]">
      {value}
    </p>

    <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-xs">
      {label}
    </p>
  </div>
);

/* ============================================================
   FOOTER
============================================================ */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-title"
      className="
        w-full
        border-t border-slate-200/80
        bg-[#F8F7F4]
      "
    >
        {/* ==================================================
            CTA + STATS
        ================================================== */}

        <div className="border-b border-slate-200/80 px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:gap-12">
            {/* CTA */}

            <div className="max-w-[390px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6366F1]">
                India's Textile Marketplace
              </p>

              <h2
                id="footer-title"
                className="
                  mt-3 text-[25px] font-extrabold
                  leading-[1.2] tracking-[-0.025em]
                  text-[#102D5B]
                  sm:text-[29px]
                "
              >
                Source Better.
                <span className="text-[#6366F1]"> Grow Faster.</span>
              </h2>

              <p className="mt-3 text-[12px] leading-6 text-slate-500 sm:text-[13px]">
                Discover verified textile manufacturers, wholesale clothing,
                quality products, and competitive factory pricing through
                FabricLink.
              </p>

              <Link
                to="/join"
                className="
                  group mt-5 inline-flex h-10
                  items-center gap-2 rounded-xl
                  bg-[#102D5B] px-5
                  text-[12px] font-bold text-white
                  shadow-[0_8px_20px_rgba(16,45,91,0.16)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#1A3E75]
                "
              >
                Join FabricLink

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>

        {/* ==================================================
            FOOTER CONTENT
        ================================================== */}

        <div className="grid gap-9 px-6 py-9 sm:px-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.25fr] lg:px-12 lg:py-10">
          {/* BRAND */}

          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <div
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl bg-[#102D5B]
                  shadow-sm
                "
              >
                <div className="h-4 w-4 rounded-md bg-[#A78BFA]" />
              </div>

              <span className="text-[20px] font-extrabold tracking-tight text-[#102D5B]">
                Fabric
                <span className="text-[#6366F1]">Link</span>
              </span>
            </Link>

            <p className="mt-4 max-w-[290px] text-[12px] leading-[1.7] text-slate-500">
              FabricLink connects retailers and businesses with verified
              textile factories for reliable wholesale clothing and bulk
              textile sourcing across India.
            </p>

            <div className="mt-5 flex gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow FabricLink on ${label}`}
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg
                    border border-slate-200
                    bg-slate-50
                    text-slate-500
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-[#C7D2FE]
                    hover:bg-[#EEF2FF]
                    hover:text-[#4F46E5]
                  "
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* COMPANY */}

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#102D5B]">
              Company
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <FooterLink key={link.label} {...link}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* MARKETPLACE / SEO */}

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#102D5B]">
              Textile Marketplace
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              {marketplaceLinks.map((link) => (
                <FooterLink key={link.label} {...link}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* SUPPORT */}

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#102D5B]">
              Support
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              {supportLinks.map((link) => (
                <FooterLink key={link.label} {...link}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#102D5B]">
              Get In Touch
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:amarnathgithub@gmail.com"
                className="group flex items-center gap-3 text-[12px] text-slate-500 hover:text-[#4F46E5]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
                  <Mail size={14} className="text-[#6366F1]" />
                </span>

                help@fabriclink.com
              </a>

              <a
                href="tel:+919142511468"
                className="group flex items-center gap-3 text-[12px] text-slate-500 hover:text-[#4F46E5]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
                  <Phone size={14} className="text-[#6366F1]" />
                </span>

                +91 9142511468
              </a>

              <div className="flex items-start gap-3 text-[12px] leading-5 text-slate-500">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
                  <MapPin size={14} className="text-[#6366F1]" />
                </span>

                <span>
                  Mumbai, Maharashtra,
                  <br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            SEO DESCRIPTION
        ================================================== */}

       <div className="mx-6 border-t border-slate-200/80 py-5 sm:mx-10 lg:mx-12">
  <p className="mx-auto max-w-4xl text-center text-sm leading-6 text-slate-600 sm:text-[13px] sm:leading-5">
    FabricLink is a B2B textile marketplace helping businesses source
    wholesale clothing, bulk garments, fabrics, and accessories from
    trusted textile manufacturers and suppliers across India.
  </p>
</div>

        {/* ==================================================
            BOTTOM BAR
        ================================================== */}

        <div className="border-t border-slate-200/80 px-6 py-4 sm:px-10 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-[10px] text-slate-900">
              © {currentYear} FabricLink. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                to="/privacy"
                className="text-[10px] oklch(20.8% 0.042 265.755) transition-colors hover:text-[#4F46E5]"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="text-[10px] oklch(20.8% 0.042 265.755) transition-colors hover:text-[#4F46E5]"
              >
                Terms
              </Link>

              <Link
                to="/cookies"
                className="text-[10px] oklch(20.8% 0.042 265.755) transition-colors hover:text-[#4F46E5]"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;