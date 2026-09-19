import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import TshirtCategory from "./TshirtCategory";
import ShirtCategory from "./ShirtCategory";
import HoodieCategory from "./HoodieCategory";
import FabricCategory from "./FabricCategory";
import BottomWearCategory from "./BottomWearCategory";
import AccessoriesCategory from "./AccessoriesCategory";

const categories = [
    {
    component: AccessoriesCategory,
    name: "Accessories",
  },
  {
    
    component: TshirtCategory,
    name: "T-Shirts",
  },
  {
    component: ShirtCategory,
    name: "Shirts",
  },
  {
    component: HoodieCategory,
    name: "Hoodies",
  },
  {
    component: FabricCategory,
    name: "Fabrics",
  },
  {
    component: BottomWearCategory,
    name: "Bottom Wear",
  },
];

export default function ShopByCategories() {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const container = scrollRef.current;

    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 5
    );
  }, []);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    updateScrollButtons();

    container.addEventListener("scroll", updateScrollButtons, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const firstCard = container.querySelector("[data-category-card]");

    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(
      window.getComputedStyle(container).columnGap ||
        window.getComputedStyle(container).gap ||
        "0"
    );

    const amount = (cardWidth + gap) * 2;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="shop-by-categories-title"
      className="
        w-full
        overflow-hidden
        border-y
        border-slate-200/70
        bg-[#F4F3EF]
        py-12
        sm:py-14
        lg:py-16
        xl:py-[72px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          sm:px-7
          md:px-8
          lg:px-10
          xl:px-10
        "
      >
        {/* Header */}
        <div
          className="
            mb-8
            flex
            items-end
            justify-between
            gap-8
            sm:mb-9
            lg:mb-10
          "
        >
          <div className="max-w-[680px]">
            <div className="mb-2 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="
                  h-px
                  w-7
                  shrink-0
                  bg-slate-500
                "
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-slate-600
                  sm:text-[11px]
                "
              >
                Explore Collection
              </p>
            </div>

            <h2
              id="shop-by-categories-title"
              className="
                text-left
                text-[28px]
                font-bold
                leading-[1.15]
                tracking-[-0.025em]
                text-slate-900
                sm:text-[32px]
                lg:text-[36px]
              "
            >
              Shop by Categories
            </h2>

            <p
              className="
                mt-3
                max-w-[620px]
                text-left
                text-[13px]
                leading-7
                text-slate-600
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              Discover quality textiles and ready-to-order products from
              trusted manufacturing partners.
            </p>
          </div>

          {/* Desktop / Tablet Controls */}
          <div
            className="
              hidden
              shrink-0
              items-center
              gap-2
              sm:flex
            "
          >
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous categories"
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                bg-white
                text-slate-600
                shadow-sm
                transition-all
                duration-200
                hover:border-slate-400
                hover:bg-slate-50
                hover:text-slate-900
                active:scale-95
                disabled:pointer-events-none
                disabled:opacity-40
                md:h-11
                md:w-11
              "
            >
              <ChevronLeft
                size={18}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-x-0.5
                "
              />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next categories"
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                bg-white
                text-slate-600
                shadow-sm
                transition-all
                duration-200
                hover:border-slate-400
                hover:bg-slate-50
                hover:text-slate-900
                active:scale-95
                disabled:pointer-events-none
                disabled:opacity-40
                md:h-11
                md:w-11
              "
            >
              <ChevronRight
                size={18}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                "
              />
            </button>
          </div>
        </div>

        {/* Category Carousel */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="
              flex
              w-full
              min-w-0
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              overflow-y-hidden
              scroll-smooth
              px-0.5
              pb-2
              pt-1
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              sm:gap-5
              md:gap-5
            "
          >
            {categories.map(
              ({ component: Category, name }) => (
                <div
                  key={name}
                  data-category-card
                  className="
                    group
                    w-[70vw]
                    min-w-[70vw]
                    shrink-0
                    snap-start
                    cursor-pointer
                    sm:w-[calc((100%-20px)/2.5)]
                    sm:min-w-[calc((100%-20px)/2.5)]
                    md:w-[calc((100%-40px)/2.8)]
                    md:min-w-[calc((100%-40px)/2.8)]
                    lg:w-[calc((100%-60px)/4)]
                    lg:min-w-[calc((100%-60px)/4)]
                    xl:w-[calc((100%-80px)/5)]
                    xl:min-w-[calc((100%-80px)/5)]
                  "
                >
                  <div
                    className="
                      flex
                      h-full
                      min-h-0
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      shadow-[0_5px_18px_rgba(15,23,42,0.05)]
                      transition-all
                      duration-250
                      ease-out
                      group-hover:-translate-y-1
                      group-hover:border-slate-300
                      group-hover:shadow-[0_12px_28px_rgba(15,23,42,0.09)]
                      group-active:scale-[0.99]
                    "
                  >
                    <div className="min-h-0 flex-1">
                      <Category />
                    </div>

                    <div
                      className="
                        flex
                        shrink-0
                        items-center
                        justify-between
                        border-t
                        border-slate-100
                        px-4
                        py-3
                        sm:px-4
                        sm:py-3.5
                      "
                    >
                      <span
                        className="
                          text-xs
                          font-semibold
                          text-slate-700
                          transition-colors
                          duration-200
                          group-hover:text-slate-950
                          sm:text-sm
                        "
                      >
                        {name}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-200
                          bg-slate-50
                          text-slate-500
                          transition-all
                          duration-200
                          group-hover:border-slate-300
                          group-hover:bg-slate-900
                          group-hover:text-white
                        "
                      >
                        <ArrowRight
                          size={13}
                          strokeWidth={1.8}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
