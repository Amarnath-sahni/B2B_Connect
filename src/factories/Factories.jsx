
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Star,
  Package,
  Factory,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";

const factories = [
  {
    id: 1,
    name: "Sharma Textile Industries",
    location: "Surat, Gujarat",
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800",
    products: ["Cotton Fabric", "T-Shirts", "Shirts"],
    verified: true,
  },
  {
    id: 2,
    name: "Royal Garments Factory",
    location: "Ludhiana, Punjab",
    rating: 4.6,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    products: ["Hoodies", "Jackets", "Sportswear"],
    verified: true,
  },
  {
    id: 3,
    name: "Premium Cotton Mills",
    location: "Tiruppur, Tamil Nadu",
    rating: 4.9,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800",
    products: ["Cotton Fabric", "T-Shirts", "Polo Shirts"],
    verified: true,
  },
  {
    id: 4,
    name: "Fashion Hub Manufacturing",
    location: "Delhi, India",
    rating: 4.5,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    products: ["Jeans", "Shirts", "Casual Wear"],
    verified: false,
  },
  {
    id: 5,
    name: "Modern Textile Works",
    location: "Panipat, Haryana",
    rating: 4.7,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1604324767450-2cee8f6f8d52?w=800",
    products: ["Bedsheets", "Curtains", "Home Textiles"],
    verified: true,
  },
  {
    id: 6,
    name: "Elite Apparel Manufacturing",
    location: "Noida, Uttar Pradesh",
    rating: 4.4,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800",
    products: ["Women's Wear", "Dresses", "Fashion Apparel"],
    verified: true,
  },
];

const Factories = () => {
  const [search, setSearch] = useState("");

  const filteredFactories = factories.filter((factory) =>
    factory.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* HEADER */}
      <section className="border-b border-[#E8EAF4] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-6 lg:px-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6955E8]">
            Manufacturing Partners
          </p>

          <div className="mt-1 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-2xl font-extrabold text-[#17386F] md:text-3xl">
                Explore Factories
              </h1>

              <p className="mt-1 text-sm text-[#64748B]">
                Find verified manufacturers and compare their products,
                ratings and capabilities.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <Factory size={17} className="text-[#6955E8]" />
              <span>{factories.length} Manufacturing Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="mx-auto max-w-[1440px] px-5 py-7 sm:px-6 lg:px-10">

        {/* SEARCH */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <div className="relative max-w-xl flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
            />

            <input
              type="text"
              placeholder="Search factories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-[#E2E5EF] bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#6955E8] focus:ring-4 focus:ring-[#6955E8]/10"
            />
          </div>
        </div>

        {/* RESULTS */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#17386F]">
            Available Factories
          </h2>

          <span className="text-sm text-[#64748B]">
            {filteredFactories.length} Results
          </span>
        </div>

        {/* FACTORY GRID */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredFactories.map((factory) => (
            <Link
              key={factory.id}
              to={`/factories/${factory.id}`}
              className="group overflow-hidden rounded-2xl border border-[#E7E9F2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D8D2FF] hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden bg-[#EEF0F6]">
                <img
                  src={factory.image}
                  alt={factory.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* VERIFIED */}
                {factory.verified && (
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-[#6955E8] shadow-sm">
                    <BadgeCheck size={14} />
                    Verified
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* NAME */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-[#17386F]">
                      {factory.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-1.5 text-xs text-[#64748B]">
                      <MapPin size={14} />
                      {factory.location}
                    </div>
                  </div>

                  {/* RATING */}
                  <div className="flex items-center gap-1 rounded-lg bg-[#FFF8E8] px-2 py-1">
                    <Star
                      size={14}
                      className="fill-[#F59E0B] text-[#F59E0B]"
                    />

                    <span className="text-xs font-bold text-[#B7791F]">
                      {factory.rating}
                    </span>
                  </div>
                </div>

                {/* PRODUCTS */}
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-1.5">
                    <Package size={14} className="text-[#6955E8]" />

                    <span className="text-xs font-semibold text-[#64748B]">
                      Products
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {factory.products.map((product) => (
                      <span
                        key={product}
                        className="rounded-md bg-[#F5F3FF] px-2.5 py-1 text-[10px] font-medium text-[#6955E8]"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* FOOTER */}
                <div className="mt-5 flex items-center justify-between border-t border-[#F0F1F5] pt-4">
                  <span className="text-xs text-[#94A3B8]">
                    {factory.reviews} Reviews
                  </span>

                  <span className="flex items-center gap-1 text-xs font-semibold text-[#6955E8]">
                    View Factory
                    <ChevronRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Factories;