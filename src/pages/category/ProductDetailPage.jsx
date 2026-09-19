import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Zap,
  Truck,
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  Rotate3D,
  MapPin,
  ChevronRight,
  Heart,
  Share2,
  PackageCheck,
  RefreshCcw,
} from "lucide-react";

import { useCart } from '../../Context/CartContext';

/* ============================================================
   TEMPORARY PRODUCT DATA
   Replace this with API data later
============================================================ */

const productData = {
  "premium-cotton-cap": {
    id: "premium-cotton-cap",
    name: "Premium Cotton Cap",
    category: "Accessories",
    price: 499,
    oldPrice: 699,
    rating: 4.8,
    reviews: 126,
    stock: 250,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=900",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=900",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=900",
    ],
    description:
      "Premium-quality cotton cap designed for everyday comfort and modern style. Made using breathable fabric with durable stitching, making it suitable for casual wear, outdoor activities and fashion collections.",
    specifications: {
      Material: "100% Cotton",
      GSM: "180",
      Color: "Navy Blue",
      Pattern: "Solid",
      Origin: "India",
      "Product Type": "Fashion Cap",
    },
    seller: {
      name: "ABC Textiles Pvt. Ltd.",
      verified: true,
      rating: 4.8,
      moq: 50,
      location: "Ludhiana, Punjab",
    },
  },

  "classic-leather-belt": {
    id: "classic-leather-belt",
    name: "Classic Leather Belt",
    category: "Accessories",
    price: 799,
    oldPrice: 999,
    rating: 4.7,
    reviews: 94,
    stock: 180,
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=900",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900",
    ],
    description:
      "Premium classic leather belt with a durable metal buckle. Designed for everyday formal and casual wear with a clean and timeless finish.",
    specifications: {
      Material: "Genuine Leather",
      Color: "Brown",
      Pattern: "Solid",
      Buckle: "Metal",
      Origin: "India",
      "Product Type": "Leather Belt",
    },
    seller: {
      name: "Royal Leather Works",
      verified: true,
      rating: 4.7,
      moq: 30,
      location: "Kanpur, Uttar Pradesh",
    },
  },

  "premium-wool-scarf": {
    id: "premium-wool-scarf",
    name: "Premium Wool Scarf",
    category: "Accessories",
    price: 649,
    oldPrice: 899,
    rating: 4.6,
    reviews: 78,
    stock: 120,
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=900",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900",
    ],
    description:
      "Soft and warm wool scarf designed for winter collections. Comfortable fabric with a stylish finish suitable for both casual and premium fashion products.",
    specifications: {
      Material: "80% Wool, 20% Acrylic",
      GSM: "250",
      Color: "Grey",
      Pattern: "Checked",
      Origin: "India",
      "Product Type": "Winter Scarf",
    },
    seller: {
      name: "Punjab Woolen Mills",
      verified: true,
      rating: 4.6,
      moq: 40,
      location: "Amritsar, Punjab",
    },
  },

  "cotton-sports-cap": {
    id: "cotton-sports-cap",
    name: "Cotton Sports Cap",
    category: "Accessories",
    price: 349,
    oldPrice: 499,
    rating: 4.5,
    reviews: 112,
    stock: 300,
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=900",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900",
    ],
    description:
      "Lightweight cotton sports cap with breathable construction. Suitable for sportswear brands, promotional products and everyday outdoor activities.",
    specifications: {
      Material: "100% Cotton",
      GSM: "160",
      Color: "Black",
      Pattern: "Solid",
      Origin: "India",
      "Product Type": "Sports Cap",
    },
    seller: {
      name: "Sportswear India",
      verified: true,
      rating: 4.5,
      moq: 100,
      location: "Noida, Uttar Pradesh",
    },
  },

  "premium-canvas-wallet": {
    id: "premium-canvas-wallet",
    name: "Premium Canvas Wallet",
    category: "Accessories",
    price: 399,
    oldPrice: 599,
    rating: 4.4,
    reviews: 67,
    stock: 200,
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=900",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
    ],
    description:
      "Compact canvas wallet designed for everyday use. Features a lightweight construction with multiple compartments for cards and cash.",
    specifications: {
      Material: "Premium Canvas",
      Color: "Olive Green",
      Pattern: "Plain",
      Compartments: "6",
      Origin: "India",
      "Product Type": "Canvas Wallet",
    },
    seller: {
      name: "Urban Accessories",
      verified: true,
      rating: 4.4,
      moq: 50,
      location: "Delhi, India",
    },
  },

  "fashion-sunglasses": {
    id: "fashion-sunglasses",
    name: "Premium Fashion Sunglasses",
    category: "Accessories",
    price: 599,
    oldPrice: 799,
    rating: 4.7,
    reviews: 143,
    stock: 150,
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900",
    ],
    description:
      "Stylish fashion sunglasses with a lightweight frame designed for everyday outdoor use and modern fashion collections.",
    specifications: {
      Material: "Polycarbonate",
      Color: "Black",
      Lens: "UV Protected",
      Pattern: "Solid",
      Origin: "India",
      "Product Type": "Fashion Sunglasses",
    },
    seller: {
      name: "Vision Fashion India",
      verified: true,
      rating: 4.7,
      moq: 25,
      location: "Jaipur, Rajasthan",
    },
  },
};

/* ============================================================
   COMPONENT
============================================================ */

export default function ProductDetailPage() {
  const { category, productId } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = productData[productId];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  /* ============================================================
     PRODUCT NOT FOUND
  ============================================================ */

  if (!product) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#F8FAFC] px-6">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50">
            <PackageCheck className="text-indigo-600" size={38} />
          </div>

          <h1 className="text-2xl font-bold text-[#102D5B]">
            Product Not Found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The product you are looking for may have been removed.
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  /* ============================================================
     HELPERS
  ============================================================ */

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  /* ============================================================
     ADD TO CART
  ============================================================ */

const handleAddToCart = () => {
  addToCart(product, quantity, selectedSize);

  alert(`${product.name} added to cart!`);
  console.log(product, quantity, selectedSize);
};

  /* ============================================================
     BUY NOW
  ============================================================ */

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize);

    navigate("/checkout");
  };

  /* ============================================================
     UI
  ============================================================ */

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* ========================================================
          BREADCRUMB
      ======================================================== */}

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1180px] items-center gap-2 px-4 py-4 text-sm sm:px-6 lg:px-8">
          <Link
            to="/"
            className="font-medium text-slate-500 transition hover:text-indigo-600"
          >
            Home
          </Link>

          <ChevronRight size={15} className="text-slate-400" />

          <Link
            to={`/products/${category}`}
            className="font-medium capitalize text-slate-500 transition hover:text-indigo-600"
          >
            {category}
          </Link>

          <ChevronRight size={15} className="text-slate-400" />

          <span className="max-w-[180px] truncate font-semibold text-[#102D5B]">
            {product.name}
          </span>
        </div>
      </div>

      {/* ========================================================
          MAIN PRODUCT SECTION
      ======================================================== */}

      <section className="mx-auto max-w-[1180px] px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ====================================================
              LEFT - PRODUCT GALLERY
          ==================================================== */}

          <div>
            {/* Main Image */}

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

                {/* Discount */}

                {discount > 0 && (
                  <div className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    {discount}% OFF
                  </div>
                )}

                {/* Wishlist */}

                <button
                  onClick={() => setIsWishlisted((prev) => !prev)}
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur transition hover:scale-105"
                >
                  <Heart
                    size={20}
                    className={
                      isWishlisted
                        ? "fill-rose-500 text-rose-500"
                        : "text-slate-600"
                    }
                  />
                </button>

                {/* Share */}

                <button className="absolute right-4 top-17 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur transition hover:scale-105">
                  <Share2 size={19} className="text-slate-600" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}

            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-2xl border-2 bg-white transition ${
                    selectedImage === index
                      ? "border-indigo-600 shadow-md"
                      : "border-transparent hover:border-indigo-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* ==================================================
                DELIVERY BENEFITS
            ================================================== */}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                  <Truck size={19} className="text-indigo-600" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#102D5B]">
                    Fast Delivery
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Pan India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                  <ShieldCheck size={19} className="text-emerald-600" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#102D5B]">
                    Quality Checked
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Verified product
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              RIGHT - PRODUCT INFORMATION
          ==================================================== */}

          <div>
            {/* Category */}

            <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-indigo-600">
              {product.category}
            </span>

            {/* Product Name */}

            <h1 className="mt-4 text-3xl font-black leading-tight text-[#102D5B] sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1.5">
                <Star
                  size={16}
                  className="fill-amber-400 text-amber-400"
                />

                <span className="text-sm font-bold text-amber-700">
                  {product.rating}
                </span>
              </div>

              <span className="text-sm text-slate-500">
                {product.reviews} Reviews
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-300" />

              <span className="text-sm font-semibold text-emerald-600">
                In Stock
              </span>
            </div>

            {/* Divider */}

            <div className="my-6 h-px bg-slate-200" />

            {/* Price */}

            <div className="flex flex-wrap items-end gap-3">
              <span className="text-4xl font-black text-[#102D5B]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="mb-1 text-lg font-medium text-slate-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>

              <span className="mb-1 rounded-lg bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-600">
                Save {discount}%
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Inclusive of applicable taxes
            </p>

            {/* Stock */}

            <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
              <CheckCircle2
                size={18}
                className="text-emerald-600"
              />

              <span className="text-sm font-semibold text-emerald-700">
                {product.stock} units available
              </span>
            </div>

            {/* ==================================================
                SIZE
            ================================================== */}

            {product.sizes?.length > 0 && (
              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#102D5B]">
                    Select Size
                  </h3>

                  <button className="text-xs font-semibold text-indigo-600 hover:underline">
                    Size Guide
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex h-11 min-w-12 items-center justify-center rounded-xl border px-4 text-sm font-bold transition ${
                        selectedSize === size
                          ? "border-indigo-600 bg-indigo-600 text-white shadow-md"
                          : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ==================================================
                QUANTITY
            ================================================== */}

            <div className="mt-7">
              <h3 className="mb-3 text-sm font-bold text-[#102D5B]">
                Quantity
              </h3>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-slate-200 bg-white">
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="flex h-11 w-11 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus size={17} />
                </button>

                <div className="flex h-11 min-w-14 items-center justify-center border-x border-slate-200 px-4 text-sm font-bold text-[#102D5B]">
                  {quantity}
                </div>

                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                  className="flex h-11 w-11 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Plus size={17} />
                </button>
              </div>
            </div>

            {/* ==================================================
                ACTION BUTTONS
            ================================================== */}

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                onClick={handleAddToCart}
                className="flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-indigo-600 bg-white px-5 text-sm font-bold text-indigo-600 transition hover:bg-indigo-50"
              >
                <ShoppingCart size={20} />
                Add To Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex h-14 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                <Zap size={19} />
                Buy Now
              </button>
            </div>

            {/* ==================================================
                SERVICE FEATURES
            ================================================== */}

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Truck size={19} className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#102D5B]">
                      Fast Shipping
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Reliable delivery with shipment tracking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                    <ShieldCheck size={19} className="text-emerald-600" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#102D5B]">
                      Secure Purchase
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Verified sellers and secure checkout.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                    <RefreshCcw size={19} className="text-purple-600" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#102D5B]">
                      Easy Returns
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Simple return process on eligible orders.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                    <BadgeCheck size={19} className="text-orange-500" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#102D5B]">
                      Verified Factory
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Buy from trusted textile suppliers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            PRODUCT DESCRIPTION
        ====================================================== */}

        <section className="mt-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                <PackageCheck size={21} className="text-indigo-600" />
              </div>

              <div>
                <h2 className="text-xl font-black text-[#102D5B]">
                  Product Description
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Everything you need to know about this product
                </p>
              </div>
            </div>

            <p className="max-w-4xl text-sm leading-7 text-slate-600">
              {product.description}
            </p>
          </div>
        </section>

        {/* ======================================================
            3D PRODUCT VIEW
        ====================================================== */}

        <section className="mt-6">
          <div className="overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="flex min-h-[320px] flex-col items-center justify-center p-8 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg">
                <Rotate3D
                  size={38}
                  className="text-indigo-600"
                />
              </div>

              <h2 className="mt-5 text-2xl font-black text-[#102D5B]">
                Explore in 3D
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                View the product from different angles with our interactive
                3D product viewer.
              </p>

              <button className="mt-6 rounded-xl bg-[#102D5B] px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
                Launch 3D View
              </button>
            </div>
          </div>
        </section>

        {/* ======================================================
            SPECIFICATIONS
        ====================================================== */}

        <section className="mt-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-black text-[#102D5B]">
              Product Specifications
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              {Object.entries(product.specifications).map(
                ([key, value], index) => (
                  <div
                    key={key}
                    className={`grid grid-cols-2 ${
                      index !==
                      Object.entries(product.specifications).length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }`}
                  >
                    <div className="bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-600">
                      {key}
                    </div>

                    <div className="px-4 py-4 text-sm font-bold text-[#102D5B]">
                      {value}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ======================================================
            SELLER / FACTORY
        ====================================================== */}

        <section className="mt-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-xl font-black text-white">
                  {product.seller.name.charAt(0)}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-black text-[#102D5B]">
                      {product.seller.name}
                    </h2>

                    {product.seller.verified && (
                      <BadgeCheck
                        size={18}
                        className="fill-indigo-600 text-white"
                      />
                    )}
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                      <strong className="text-slate-700">
                        {product.seller.rating}
                      </strong>
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {product.seller.location}
                    </span>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600">
                    MOQ: {product.seller.moq} units
                  </div>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-5 py-3 text-sm font-bold text-indigo-600 transition hover:bg-indigo-100">
                View Factory
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* ======================================================
            BOTTOM TRUST BAR
        ====================================================== */}

        <section className="mt-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white sm:grid-cols-3">
            <div className="flex items-center gap-3 border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                <ShieldCheck className="text-indigo-600" size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#102D5B]">
                  Secure Payment
                </p>
                <p className="text-xs text-slate-500">
                  Protected checkout
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-b border-slate-200 p-5 sm:border-b-0 sm:border-r">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                <Truck className="text-emerald-600" size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#102D5B]">
                  Track Your Order
                </p>
                <p className="text-xs text-slate-500">
                  Real-time shipment tracking
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
                <BadgeCheck className="text-purple-600" size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#102D5B]">
                  Verified Sellers
                </p>
                <p className="text-xs text-slate-500">
                  Trusted textile factories
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
