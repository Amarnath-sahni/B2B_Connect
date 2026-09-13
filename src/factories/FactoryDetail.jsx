import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Star,
  BadgeCheck,
  Package,
  Factory,
  Users,
  Calendar,
  Box,
  MessageSquare,
  Send,
} from "lucide-react";

const factories = [
 { id: 1, name: "Sharma Textile Industries", location: "Surat, Gujarat", rating: 4.8, reviews: 124, image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1200", description: "Sharma Textile Industries is a trusted textile manufacturing company specializing in high-quality cotton fabrics and custom apparel manufacturing.", products: [ "Cotton Fabric", "T-Shirts", "Shirts", "Polo Shirts", "Custom Apparel", ], verified: true, experience: "12 Years", moq: "500 Pieces", capacity: "50,000 / Month", employees: "120+", }, { id: 2, name: "Royal Garments Factory", location: "Ludhiana, Punjab", rating: 4.6, reviews: 98, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200", description: "Royal Garments Factory specializes in premium apparel manufacturing, including sportswear, hoodies and jackets. The factory provides custom manufacturing solutions for businesses and clothing brands.", products: [ "Hoodies", "Jackets", "Sportswear", "Track Suits", "Custom Apparel", ], verified: true, experience: "10 Years", moq: "300 Pieces", capacity: "35,000 / Month", employees: "95+", }, { id: 3, name: "Premium Cotton Mills", location: "Tiruppur, Tamil Nadu", rating: 4.9, reviews: 210, image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=1200", description: "Premium Cotton Mills is a leading textile manufacturer focused on high-quality cotton garments and sustainable fabric production. The company serves fashion brands and bulk buyers across India.", products: [ "Cotton Fabric", "T-Shirts", "Polo Shirts", "Cotton Shirts", "Organic Cotton", ], verified: true, experience: "18 Years", moq: "1,000 Pieces", capacity: "100,000 / Month", employees: "250+", }, { id: 4, name: "Fashion Hub Manufacturing", location: "Delhi, India", rating: 4.5, reviews: 76, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200", description: "Fashion Hub Manufacturing provides modern fashion apparel production for emerging brands and established retailers. They specialize in trendy casual wear and customized clothing collections.", products: [ "Jeans", "Casual Shirts", "Denim Wear", "Women's Wear", "Custom Fashion", ], verified: false, experience: "7 Years", moq: "200 Pieces", capacity: "20,000 / Month", employees: "65+", }, { id: 5, name: "Modern Textile Works", location: "Panipat, Haryana", rating: 4.7, reviews: 143, image: "https://images.unsplash.com/photo-1604324767450-2cee8f6f8d52?w=1200", description: "Modern Textile Works is a well-established manufacturer of home textiles and furnishing products. The factory focuses on quality production, bulk manufacturing and custom textile solutions.", products: [ "Bedsheets", "Curtains", "Blankets", "Cushion Covers", "Home Textiles", ], verified: true, experience: "15 Years", moq: "500 Pieces", capacity: "70,000 / Month", employees: "180+", },
];

const FactoryDetail = () => {
  const { factoryId } = useParams();

  const factory = factories.find(
    (item) => item.id === Number(factoryId)
  );

  if (!factory) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-xl font-bold">
          Factory Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC]">

      {/* COVER */}
      <div className="relative h-[280px] bg-[#17386F]">
        <img
          src={factory.image}
          alt={factory.name}
          className="h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#102A55] to-transparent" />

        {/* BACK BUTTON */}
        <Link
          to="/factories"
          className="absolute left-5 top-5 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-[#17386F] shadow"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        {/* FACTORY INFO */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-[1200px] px-5 pb-8 lg:px-8">

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div className="text-white">

                <div className="mb-2 flex items-center gap-2">
                  {factory.verified && (
                    <span className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs">
                      <BadgeCheck size={14} />
                      Verified Manufacturer
                    </span>
                  )}
                </div>

                <h1 className="text-3xl font-extrabold">
                  {factory.name}
                </h1>

                <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                  <MapPin size={16} />
                  {factory.location}
                </div>

              </div>

              {/* RATING */}
              <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg">
                <Star
                  size={20}
                  className="fill-[#F59E0B] text-[#F59E0B]"
                />

                <div>
                  <p className="text-lg font-bold text-[#17386F]">
                    {factory.rating}
                  </p>

                  <p className="text-xs text-[#64748B]">
                    {factory.reviews} Reviews
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* MAIN CONTENT */}
      <main className="mx-auto grid max-w-[1200px] gap-6 px-5 py-8 lg:grid-cols-[1fr_320px] lg:px-8">

        {/* LEFT */}
        <div className="space-y-6">

          {/* ABOUT */}
          <section className="rounded-2xl border border-[#E7E9F2] bg-white p-6">
            <h2 className="text-lg font-bold text-[#17386F]">
              About Factory
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#64748B]">
              {factory.description}
            </p>
          </section>


          {/* PRODUCTS */}
          <section className="rounded-2xl border border-[#E7E9F2] bg-white p-6">

            <div className="flex items-center gap-2">
              <Package size={19} className="text-[#6955E8]" />

              <h2 className="text-lg font-bold text-[#17386F]">
                Products We Manufacture
              </h2>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">

              {factory.products.map((product) => (
                <div
                  key={product}
                  className="rounded-xl border border-[#E8EAF4] bg-[#FAFAFD] p-4 text-center"
                >
                  <Package
                    size={20}
                    className="mx-auto text-[#6955E8]"
                  />

                  <p className="mt-2 text-xs font-semibold text-[#17386F]">
                    {product}
                  </p>
                </div>
              ))}

            </div>
          </section>


          {/* CAPABILITIES */}
          <section className="rounded-2xl border border-[#E7E9F2] bg-white p-6">

            <div className="flex items-center gap-2">
              <Factory size={19} className="text-[#6955E8]" />

              <h2 className="text-lg font-bold text-[#17386F]">
                Manufacturing Capabilities
              </h2>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">

              <Capability
                icon={Box}
                label="MOQ"
                value={factory.moq}
              />

              <Capability
                icon={Factory}
                label="Capacity"
                value={factory.capacity}
              />

              <Capability
                icon={Calendar}
                label="Experience"
                value={factory.experience}
              />

              <Capability
                icon={Users}
                label="Employees"
                value={factory.employees}
              />

            </div>

          </section>

        </div>


        {/* RIGHT SIDEBAR */}
        <aside className="h-fit rounded-2xl border border-[#E7E9F2] bg-white p-5 lg:sticky lg:top-5">

          <h3 className="font-bold text-[#17386F]">
            Interested in this factory?
          </h3>

          <p className="mt-2 text-xs leading-5 text-[#64748B]">
            Contact the manufacturer or request a custom quotation.
          </p>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#6955E8] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#5845D5]">
            <Send size={16} />
            Request Quote
          </button>

          <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#E2E5EF] px-4 py-3 text-sm font-semibold text-[#17386F] transition hover:bg-[#F8F9FC]">
            <MessageSquare size={16} />
            Contact Factory
          </button>

        </aside>

      </main>
    </div>
  );
};


const Capability = ({ icon: Icon, label, value }) => {
  return (
    <div className="rounded-xl bg-[#F8F9FC] p-3">
      <Icon size={18} className="text-[#6955E8]" />

      <p className="mt-2 text-[10px] uppercase text-[#94A3B8]">
        {label}
      </p>

      <p className="mt-1 text-xs font-bold text-[#17386F]">
        {value}
      </p>
    </div>
  );
};

export default FactoryDetail;