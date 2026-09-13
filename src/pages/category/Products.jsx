// src/pages/Products.jsx->ProductDetailPage

import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    category: "tshirts",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Classic Casual Shirt",
    category: "shirts",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Premium Hoodie",
    category: "hoodies",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Fashion Cap",
    category: "accessories",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Products() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1180px]">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Explore Products
          </p>

          <h1 className="mt-1 text-3xl font-extrabold capitalize text-[#102D5B]">
            {category?.replace("-", " ")}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Browse our collection of high-quality textile products.
          </p>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h2 className="font-semibold text-slate-900">
                    {product.name}
                  </h2>

                  <p className="mt-2 font-bold text-indigo-600">
                    {product.price}
                  </p>

                  <button className="mt-4 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center">
            <h2 className="text-lg font-semibold text-slate-800">
              No products found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              We don't have products in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}