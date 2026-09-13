import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import TshirtCategory from "./TshirtCategory";
import ShirtCategory from "./ShirtCategory";
import HoodieCategory from "./HoodieCategory";
import FabricCategory from "./FabricCategory";
import BottomWearCategory from "./BottomWearCategory";
import AccessoriesCategory from "./AccessoriesCategory";

const categories = [
  TshirtCategory,
  ShirtCategory,
  HoodieCategory,
  FabricCategory,
  BottomWearCategory,
  AccessoriesCategory,
];

export default function ShopByCategories() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-5 py-8 sm:px-8 lg:px-10 lg:py-9">
      <div className="mx-auto max-w-[1180px]">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="relative text-center">

          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600 sm:text-xs">
            Explore Products
          </p>

          <h2
            className="
              text-[23px]
              font-extrabold
              tracking-[-0.02em]
              text-[#102D5B]
              sm:text-[27px]
            "
          >
            Shop By Categories
          </h2>

          <p className="mt-1.5 text-[12px] text-[#64748B] sm:text-[13px]">
            Explore a wide range of high quality textile products
          </p>

          {/* DESKTOP ARROWS */}

          <div
            className="
              absolute right-0 top-1/2
              hidden -translate-y-1/2
              items-center gap-2
              sm:flex
            "
          >
            <button
              onClick={() => scroll("left")}
              aria-label="Previous categories"
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-[#E2E8F0]
                bg-white
                text-[#334155]
                shadow-sm
                transition-all
                hover:border-indigo-200
                hover:bg-indigo-50
                hover:text-indigo-600
              "
            >
              <ChevronLeft size={17} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Next categories"
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-[#E2E8F0]
                bg-white
                text-[#334155]
                shadow-sm
                transition-all
                hover:border-indigo-200
                hover:bg-indigo-50
                hover:text-indigo-600
              "
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* ==================================================
            CATEGORY LIST
        ================================================== */}

        <div
          ref={scrollRef}
          className="
            mt-6
            flex
            gap-3
            overflow-x-auto
            scroll-smooth
            pb-2
            scrollbar-hide
            sm:gap-4
          "
        >
          {categories.map((Category, index) => (
            <div
              key={index}
              className="
                shrink-0
                sm:w-[calc((100%-60px)/6)]
              "
            >
              <Category />
            </div>
          ))}
        </div>

        {/* ==================================================
            MOBILE HINT
        ================================================== */}

        <div className="mt-1 text-center text-[10px] text-[#94A3B8] sm:hidden">
          ← Swipe to explore →
        </div>

      </div>
    </section>
  );
}