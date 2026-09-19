import { useNavigate } from "react-router-dom";

const accessories = [
  {
    id: "premium-cotton-cap",
    name: "Premium Cotton Cap",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 126,
  },

  {
    id: "classic-leather-belt",
    name: "Classic Leather Belt",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 94,
  },

  {
    id: "premium-wool-scarf",
    name: "Premium Wool Scarf",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 78,
  },

  {
    id: "cotton-sports-cap",
    name: "Cotton Sports Cap",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 112,
  },

  {
    id: "premium-canvas-wallet",
    name: "Premium Canvas Wallet",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviews: 67,
  },

  {
    id: "fashion-sunglasses",
    name: "Premium Fashion Sunglasses",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 143,
  },
];


export default function Accessories() {
  const navigate = useNavigate();

  const openProduct = (product) => {
    navigate(`/products/accessories/${product.id}`);
  };

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="mx-auto max-w-[1180px]">

        <h1 className="text-3xl font-bold text-[#102D5B]">
          Accessories
        </h1>

        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {accessories.map((product) => (
            <div
              key={product.id}
              onClick={() => openProduct(product)}
              className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-4">

                <h2 className="font-semibold text-slate-900">
                  {product.name}
                </h2>

                <div className="mt-2 flex items-center gap-1 text-sm">
                  <span>⭐</span>
                  <span className="font-medium">
                    {product.rating}
                  </span>

                  <span className="text-slate-400">
                    ({product.reviews})
                  </span>
                </div>

                <p className="mt-3 text-lg font-bold text-indigo-600">
                  ₹{product.price}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
