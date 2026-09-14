import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  User,
} from "lucide-react";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { totalItems } = useCart();
  const { isLoggedIn } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Factories", path: "/factories" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About Us", path: "/about-us" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[66px] max-w-[1400px] items-center justify-between px-6 lg:px-12">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-2"
        >
          <div className="relative flex h-9 w-9 items-center justify-center">
            <div className="absolute h-3 w-7 rotate-45 rounded-full bg-purple-500 transition-transform duration-300 group-hover:rotate-[55deg]" />
            <div className="absolute h-3 w-7 -rotate-45 rounded-full bg-orange-400 transition-transform duration-300 group-hover:-rotate-[55deg]" />
            <div className="relative h-3 w-3 rounded-full bg-pink-500" />
          </div>

          <span className="text-xl font-bold tracking-tight text-[#102d63]">
            Fabric<span className="text-[#4169e1]">Link</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-6 text-[14px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#122e66]"
                    : "text-gray-700 hover:text-[#4f46e5]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#4f46e5] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* CART */}
          <Link
            to="/cart"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 transition-all duration-200 hover:bg-indigo-50"
            aria-label="Shopping cart"
          >
            <ShoppingCart
              size={19}
              className="text-gray-700 transition-transform duration-200 group-hover:scale-110 group-hover:text-indigo-600"
            />

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* AUTH */}
          {isLoggedIn ? (
            // USER ICON
            <Link
              to="/dashboard"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-all duration-200 hover:bg-indigo-100 hover:scale-105"
              aria-label="User dashboard"
            >
              <User size={20} strokeWidth={2} />
            </Link>
          ) : (
            // LOGIN + SIGNUP
            <>
              <Link
                to="/login"
                className="rounded-lg border border-indigo-200 px-5 py-2.5 text-sm font-semibold text-indigo-700 transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-50"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex items-center gap-2 lg:hidden">

          {/* MOBILE CART */}
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-50"
          >
            <ShoppingCart size={19} className="text-gray-700" />

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* MOBILE USER */}
          {isLoggedIn && (
            <Link
              to="/dashboard"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600"
              aria-label="User dashboard"
            >
              <User size={20} />
            </Link>
          )}

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 transition-colors hover:bg-indigo-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-gray-700" />
            ) : (
              <Menu size={22} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-6 py-4">

          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-gray-100 py-4 text-sm font-medium ${
                    isActive ? "text-indigo-600" : "text-gray-700"
                  }`
                }
              >
                {link.name}

                <ChevronDown
                  size={16}
                  className="-rotate-90 opacity-50"
                />
              </NavLink>
            ))}
          </div>

          {/* MOBILE AUTH */}
          {!isLoggedIn ? (
            <div className="mt-4 flex gap-3 pb-3">

              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-indigo-200 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
              >
                <User size={17} />
                Login
              </Link>

              <Link
                to="/signup"
                onClick={closeMobileMenu}
                className="flex flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-sm font-semibold text-white"
              >
                Sign Up
              </Link>

            </div>
          ) : (
            <Link
              to="/dashboard"
              onClick={closeMobileMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-indigo-50 py-3 font-semibold text-indigo-600"
            >
              <User size={18} />
              My Dashboard
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;