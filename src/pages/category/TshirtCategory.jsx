import { useNavigate } from "react-router-dom";

const shirtData = {
  name: "Shirts",
  count: "95+ Products",
  image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
  route: "/products/shirts",
};

export default function ShirtCategory() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(shirtData.route)}
      className="
        group
        min-w-[160px]
        cursor-pointer
        overflow-hidden
        rounded-xl
        border border-gray-100
        bg-gray-50
        transition duration-300
        hover:-translate-y-1
        hover:shadow-md
        sm:min-w-[190px]
        lg:min-w-[210px]
      "
    >
      <div className="h-32 overflow-hidden sm:h-36">
        <img
          src={shirtData.image}
          alt={shirtData.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900">
          {shirtData.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          {shirtData.count}
        </p>
      </div>
    </div>
  );
}