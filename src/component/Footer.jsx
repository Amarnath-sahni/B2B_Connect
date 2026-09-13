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
    label: "Products",
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
    href: "https://linkedin.com",
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com",
  },
];

/* ============================================================
   STAT CARD
============================================================ */

const StatCard = ({
  icon: Icon,
  iconClass,
  bgClass,
  value,
  label,
}) => {
  return (
    <div
      className="
        group
        flex min-h-[150px]
        flex-col
        items-center
        justify-center
        rounded-[16px]
        border border-white/80
        bg-white
        px-3 py-5
        text-center
        shadow-[0_8px_25px_rgba(30,41,59,0.08)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_16px_35px_rgba(30,41,59,0.14)]
      "
    >
      <div
        className={`
          flex h-11 w-11
          items-center justify-center
          rounded-full
          transition-transform duration-300
          group-hover:scale-110
          ${bgClass}
        `}
      >
        <Icon
          size={21}
          strokeWidth={2.2}
          className={iconClass}
        />
      </div>

      <p
        className="
          mt-3
          text-[21px]
          font-extrabold
          leading-none
          tracking-[-0.02em]
          text-[#42587c]
        "
      >
        {value}
      </p>

      <p
        className="
          mt-2
          text-[11px]
          font-medium
          leading-tight
          text-[#475569]
          sm:text-[12px]
        "
      >
        {label}
      </p>
    </div>
  );
};

/* ============================================================
   FOOTER LINK
============================================================ */

const FooterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="
        group
        relative
        w-fit
        text-[13px]
        text-white/65
        transition-colors
        duration-200
        hover:text-white
      "
    >
      {children}

      <span
        className="
          absolute
          -bottom-1
          left-0
          h-[1px]
          w-0
          bg-gradient-to-r
          from-[#A855F7]
          to-[#F472B6]
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </Link>
  );
};

/* ============================================================
   FOOTER
============================================================ */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full bg-pink-100 px-2 py-8 sm:px-4 lg:px-6 lg:py-8">

      {/* ======================================================
          MAIN FOOTER CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden
          rounded-[22px]
          bg-gradient-to-br
          from-[#5148D8]
          via-[#6257E9]
          to-[#477CF0]
          shadow-[0_20px_60px_rgba(79,70,229,0.18)]
        "
      >

        {/* ====================================================
            BACKGROUND LIGHTS
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-white/10
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            left-[25%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#C4B5FD]/20
            blur-[110px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-[20%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-[#F9A8D4]/10
            blur-[90px]
          "
        />

        {/* ====================================================
            TOP CTA + STATS
        ==================================================== */}

        <div
          className="
            relative
            z-10
            px-6
            py-8
            sm:px-10
            sm:py-10
            lg:px-14
            lg:py-12
            xl:px-16
          "
        >

          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-9
              lg:grid-cols-[30%_70%]
              lg:gap-10
            "
          >

            {/* ==================================================
                LEFT CTA
            ================================================== */}

            <div className="max-w-[390px]">

              <div
                className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-3
                  py-1.5
                  text-[11px]
                  font-semibold
                  text-white/90
                  backdrop-blur-sm
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#86EFAC]" />
                Trusted Textile Marketplace
              </div>

              <h2
                className="
                  text-[25px]
                  font-extrabold
                  leading-[1.18]
                  tracking-[-0.025em]
                  text-white
                  sm:text-[29px]
                  lg:text-[31px]
                "
              >
                Empowering Businesses{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#FDBA74]
                    to-[#FB923C]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Across India
                </span>
              </h2>

              <p
                className="
                  mt-3
                  max-w-[350px]
                  text-[12px]
                  leading-[1.7]
                  text-white/75
                  sm:text-[13px]
                "
              >
                Connect with verified textile factories,
                discover quality products, compare prices,
                and grow your business with confidence.
              </p>

              <Link
                to="/join"
                className="
                  group
                  mt-5
                  inline-flex
                  h-[43px]
                  items-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-5
                  text-[12px]
                  font-bold
                  text-[#4F46E5]
                  shadow-[0_10px_25px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]
                "
              >
                Join FabricLink

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* ==================================================
                STATS
            ================================================== */}

            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:gap-4
                lg:grid-cols-4
              "
            >
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  {...stat}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ====================================================
            DIVIDER
        ==================================================== */}

        <div className="relative z-10 mx-6 h-px bg-white/15 sm:mx-10 lg:mx-14 xl:mx-16" />

        {/* ====================================================
            FOOTER INFORMATION
        ==================================================== */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            gap-10
            px-6
            py-10
            sm:px-10
            lg:grid-cols-[1.7fr_1fr_1fr_1.5fr]
            lg:px-14
            xl:px-16
          "
        >

          {/* ==================================================
              BRAND
          ================================================== */}

          <div>

            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-2
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  shadow-lg
                "
              >
                <div
                  className="
                    h-5
                    w-5
                    rounded-md
                    bg-gradient-to-br
                    from-[#6366F1]
                    via-[#A855F7]
                    to-[#F05CA8]
                  "
                />
              </div>

              <span
                className="
                  text-[20px]
                  font-extrabold
                  tracking-tight
                  text-white
                "
              >
                Fabric
                <span className="text-[#FDBA74]">
                  Link
                </span>
              </span>
            </Link>

            <p
              className="
                mt-4
                max-w-[310px]
                text-[12px]
                leading-[1.7]
                text-white/60
              "
            >
              India's trusted platform connecting businesses
              with verified textile manufacturers and reliable
              sourcing partners.
            </p>

            {/* SOCIAL MEDIA */}

            <div className="mt-5 flex items-center gap-2.5">

              {socialLinks.map(
                ({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/5
                      text-white/70
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/30
                      hover:bg-white
                      hover:text-[#5B55E8]
                      hover:shadow-lg
                    "
                  >
                    <Icon size={14} />
                  </a>
                )
              )}

            </div>
          </div>

          {/* ==================================================
              COMPANY
          ================================================== */}

          <div>

            <h3
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
              "
            >
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  {...link}
                >
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* ==================================================
              SUPPORT
          ================================================== */}

          <div>

            <h3
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
              "
            >
              Support
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {supportLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  {...link}
                >
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* ==================================================
              CONTACT
          ================================================== */}

          <div>

            <h3
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
              "
            >
              Get In Touch
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href="mailto:hello@fabriclink.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-[12px]
                  text-white/60
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                  "
                >
                  <Mail
                    size={14}
                    className="text-[#C4B5FD]"
                  />
                </span>

                hello@fabriclink.com
              </a>

              <a
                href="tel:+919876543210"
                className="
                  flex
                  items-center
                  gap-3
                  text-[12px]
                  text-white/60
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                  "
                >
                  <Phone
                    size={14}
                    className="text-[#C4B5FD]"
                  />
                </span>

                +91 98765 43210
              </a>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-[12px]
                  text-white/60
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                  "
                >
                  <MapPin
                    size={14}
                    className="text-[#C4B5FD]"
                  />
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

        {/* ====================================================
            BOTTOM BAR
        ==================================================== */}

        <div
          className="
            relative
            z-10
            mx-6
            border-t
            border-white/10
            py-5
            sm:mx-10
            lg:mx-14
            xl:mx-16
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-3
              sm:flex-row
            "
          >

            <p className="text-[11px] text-white/45">
              © {currentYear} FabricLink. All rights reserved.
            </p>

            <div className="flex items-center gap-5">

              <Link
                to="/privacy"
                className="
                  text-[11px]
                  text-white/45
                  transition-colors
                  hover:text-white
                "
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="
                  text-[11px]
                  text-white/45
                  transition-colors
                  hover:text-white
                "
              >
                Terms
              </Link>

              <Link
                to="/cookies"
                className="
                  text-[11px]
                  text-white/45
                  transition-colors
                  hover:text-white
                "
              >
                Cookies
              </Link>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
