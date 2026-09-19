import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import image from "../../assets/image.png";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear individual error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!agreed) {
      newErrors.terms = "Please accept the terms & conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
const handleSubmit = (e) => { 
  e.preventDefault(); 
  if (!validateForm()) return; 
  const userData = { 
    name: `${formData.name} ${formData.lastName}`, 
    email: formData.email, }; 
    login(userData); 
    navigate("/dashboard", { replace: true });
   };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 px-4 py-8">

      {/* Main Card */}
      <div
        className="
          w-full
          max-w-[1000px]
          min-h-[600px]
          bg-[#292536]
          rounded-[32px]
          overflow-hidden
          shadow-2xl
          flex
          flex-col
          md:flex-row
        "
      >

        {/* =====================================================
            LEFT SIDE IMAGE
        ====================================================== */}
        <div
          className="
            relative
            w-full
            md:w-1/2
            min-h-[280px]
            md:min-h-full
            overflow-hidden
          "
        >
          <img
            src={image}
            alt="Signup"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />

          {/* Image gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#170b38]/60
              via-transparent
              to-transparent
              pointer-events-none
            "
          />

          {/* Slider indicators */}
          <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-2">
            <span className="w-8 h-1 rounded-full bg-purple-500/60" />
            <span className="w-8 h-1 rounded-full bg-purple-500/60" />
            <span className="w-12 h-1 rounded-full bg-white" />
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE FORM
        ====================================================== */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="w-full px-6 py-10 sm:px-10 lg:px-12">

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-[36px] font-bold text-white tracking-tight">
                Create an account
              </h1>

              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="
                    text-gray-300
                    underline
                    underline-offset-2
                    hover:text-purple-400
                    transition-colors
                    duration-200
                  "
                >
                  Log in
                </Link>
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* First Name + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {/* First Name */}
                <div>
                  <div className="relative">
                    <UserIcon />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="First Name"
                      autoComplete="given-name"
                      className={`signup-input pl-11 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                  </div>

                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <div className="relative">
                    <UserIcon />

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      autoComplete="family-name"
                      className={`signup-input pl-11 ${
                        errors.lastName ? "border-red-500" : ""
                      }`}
                    />
                  </div>

                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <MailIcon />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    autoComplete="email"
                    className={`signup-input pl-11 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="relative">
                  <LockIcon />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="new-password"
                    className={`signup-input pl-11 pr-12 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />

                  {/* Show / Hide password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                      hover:text-white
                      transition-colors
                      duration-200
                    "
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* =================================================
                  TERMS CHECKBOX
              ================================================== */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">

                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => {
                      setAgreed(e.target.checked);

                      if (e.target.checked) {
                        setErrors((prev) => ({
                          ...prev,
                          terms: "",
                        }));
                      }
                    }}
                    className="sr-only"
                  />

                  {/* Custom checkbox */}
                  <span
                    className={`
                      mt-0.5
                      w-4
                      h-4
                      rounded
                      border
                      flex
                      items-center
                      justify-center
                      shrink-0
                      transition-all
                      duration-200
                      ${
                        agreed
                          ? "bg-purple-600 border-purple-500"
                          : "border-gray-400 group-hover:border-purple-400"
                      }
                    `}
                  >
                    {agreed && <CheckIcon />}
                  </span>

                  <span className="text-sm text-gray-300 leading-5">
                    I agree to the{" "}
                    <button
                      type="button"
                      className="
                        text-purple-400
                        hover:text-purple-300
                        hover:underline
                        transition-colors
                      "
                    >
                      terms & conditions
                    </button>
                  </span>
                </label>

                {errors.terms && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* =================================================
                  CREATE ACCOUNT BUTTON
              ================================================== */}
              <button
                type="submit"
                className="
                  group
                  relative
                  w-full
                  h-12
                  mt-2
                  rounded-lg
                  bg-[#963cda]
                  text-white
                  font-semibold
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:bg-[#a84be8]
                  hover:shadow-lg
                  hover:shadow-purple-500/25
                  hover:-translate-y-0.5
                  active:translate-y-0
                "
              >
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Create account

                  <ArrowIcon />
                </span>

                {/* Shine animation */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    group-hover:translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    transition-transform
                    duration-700
                  "
                />
              </button>
            </form>

            {/* =================================================
                DIVIDER
            ================================================== */}
            <div className="flex items-center gap-3 my-7">
              <div className="flex-1 h-px bg-gray-600" />

              <span className="text-sm text-gray-400 whitespace-nowrap">
                Or register with
              </span>

              <div className="flex-1 h-px bg-gray-600" />
            </div>

            {/* =================================================
                SOCIAL LOGIN
            ================================================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {/* Google */}
              <button
                type="button"
                className="
                  h-12
                  rounded-lg
                  border
                  border-gray-500/70
                  text-gray-300
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-200
                  hover:bg-white/5
                  hover:border-purple-400
                  hover:text-white
                  hover:-translate-y-0.5
                  active:translate-y-0
                "
              >
                <GoogleIcon />
                Google
              </button>

              {/* Apple */}
              <button
                type="button"
                className="
                  h-12
                  rounded-lg
                  border
                  border-gray-500/70
                  text-gray-300
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-200
                  hover:bg-white/5
                  hover:border-purple-400
                  hover:text-white
                  hover:-translate-y-0.5
                  active:translate-y-0
                "
              >
                <AppleIcon />
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          INPUT STYLES
      ====================================================== */}
      <style>{`
        .signup-input {
          width: 100%;
          height: 48px;
          border-radius: 8px;
          border: 1px solid rgba(107, 98, 125, 0.7);
          background: #3b354c;
          color: white;
          padding-right: 16px;
          outline: none;
          transition: all 200ms ease;
        }

        .signup-input::placeholder {
          color: #aaa4b8;
        }

        .signup-input:hover {
          border-color: rgba(160, 100, 220, 0.7);
          background: #40394f;
        }

        .signup-input:focus {
          border-color: #a44be0;
          background: #40394f;
          box-shadow: 0 0 0 3px rgba(164, 75, 224, 0.12);
        }

        .signup-input.border-red-500 {
          border-color: #ef4444;
        }

        @media (max-width: 767px) {
          .signup-input {
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

/* =========================================================
   USER ICON
========================================================= */
const UserIcon = () => (
  <svg
    className="
      absolute
      left-4
      top-1/2
      -translate-y-1/2
      w-5
      h-5
      text-gray-400
      pointer-events-none
    "
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M20 21a8 8 0 0 0-16 0" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

/* =========================================================
   MAIL ICON
========================================================= */
const MailIcon = () => (
  <svg
    className="
      absolute
      left-4
      top-1/2
      -translate-y-1/2
      w-5
      h-5
      text-gray-400
      pointer-events-none
    "
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

/* =========================================================
   LOCK ICON
========================================================= */
const LockIcon = () => (
  <svg
    className="
      absolute
      left-4
      top-1/2
      -translate-y-1/2
      w-5
      h-5
      text-gray-400
      pointer-events-none
    "
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

/* =========================================================
   EYE ICON
========================================================= */
const EyeIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/* =========================================================
   EYE OFF ICON
========================================================= */
const EyeOffIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="m3 3 18 18" />
    <path d="M10.6 5.1A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a18.6 18.6 0 0 1-3 3.8" />
    <path d="M6.7 6.7C3.8 8.5 2 12 2 12s3.5 7 10 7a9.8 9.8 0 0 0 4-.8" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
  </svg>
);

/* =========================================================
   CHECK ICON
========================================================= */
const CheckIcon = () => (
  <svg
    className="w-3 h-3 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

/* =========================================================
   ARROW ICON
========================================================= */
const ArrowIcon = () => (
  <svg
    className="
      w-4
      h-4
      transition-transform
      duration-200
      group-hover:translate-x-1
    "
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

/* =========================================================
   GOOGLE ICON
========================================================= */
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M21.6 12.23c0-.79-.07-1.55-.2-2.28H12v4.31h5.38a4.6 4.6 0 0 1-1.99 3.02v2.51h3.22c1.89-1.74 2.99-4.3 2.99-7.56Z"
    />

    <path
      fill="#34A853"
      d="M12 22c2.7 0 4.97-.89 6.61-2.41l-3.22-2.51c-.89.6-2.03.96-3.39.96-2.61 0-4.83-1.76-5.62-4.13H3.05v2.59A9.99 9.99 0 0 0 12 22Z"
    />

    <path
      fill="#FBBC05"
      d="M6.38 13.91A6.01 6.01 0 0 1 6.05 12c0-.66.11-1.3.33-1.91V7.5H3.05A10 10 0 0 0 2 12c0 1.61.39 3.13 1.05 4.5l3.33-2.59Z"
    />

    <path
      fill="#EA4335"
      d="M12 5.96c1.47 0 2.79.51 3.83 1.51l2.87-2.87C16.96 2.98 14.7 2 12 2a9.99 9.99 0 0 0-8.95 5.5l3.33 2.59C7.17 7.72 9.39 5.96 12 5.96Z"
    />
  </svg>
);

/* =========================================================
   APPLE ICON
========================================================= */
const AppleIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.1.8 1.21-.24 2.37-.93 3.66-.84 1.55.12 2.72.74 3.5 1.86-3.2 1.92-2.44 6.14.5 7.32-.59 1.55-1.36 3.09-2.75 3.83ZM12.05 7.26C11.9 4.96 13.76 3.07 15.9 2.93c.3 2.66-2.4 4.65-3.85 4.33Z" />
  </svg>
);

export default Signup;