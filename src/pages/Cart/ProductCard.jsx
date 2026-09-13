import { useNavigate } from "react-router-dom";

function ProductCard({ product, category }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${category}/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Product UI */}
    </div>
  );
}

export default ProductCard;