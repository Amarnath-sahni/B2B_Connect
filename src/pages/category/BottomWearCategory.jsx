import { useNavigate } from "react-router-dom";

const bottomWearData = {
  name: "Bottom Wear",
  count: "110+ Products",
  image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
  route: "/products/bottom-wear",
};

export default function BottomWearCategory() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(bottomWearData.route)}
      className="
        group min-w-[160px] cursor-pointer overflow-hidden
        rounded-xl border border-gray-100 bg-gray-50
        transition duration-300 hover:-translate-y-1 hover:shadow-md
        sm:min-w-[190px] lg:min-w-[210px]
      "
    >
      <div className="h-32 overflow-hidden sm:h-36">
        <img
          src={bottomWearData.image}
          alt={bottomWearData.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900">
          {bottomWearData.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          {bottomWearData.count}
        </p>
      </div>
    </div>
  );
}