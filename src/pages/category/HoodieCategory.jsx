import { useNavigate } from "react-router-dom";

const hoodieData = {
  name: "Hoodies",
  count: "80+ Products",
  image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  route: "/products/hoodies",
};

export default function HoodieCategory() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(hoodieData.route)}
      className="
        group min-w-[160px] cursor-pointer overflow-hidden
        rounded-xl border border-gray-100 bg-gray-50
        transition duration-300 hover:-translate-y-1 hover:shadow-md
        sm:min-w-[190px] lg:min-w-[210px]
      "
    >
      <div className="h-32 overflow-hidden sm:h-36">
        <img
          src={hoodieData.image}
          alt={hoodieData.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900">
          {hoodieData.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          {hoodieData.count}
        </p>
      </div>
    </div>
  );
}