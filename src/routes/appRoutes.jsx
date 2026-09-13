
import { Routes, Route } from "react-router-dom";

// Main Pages
import Home from "../pages/Home";
import Accessories from "../pages/category/Accessories";
import ProductDetailPage from "../pages/category/ProductDetailPage";

// Cart & Payment
import CartPage from "../pages/Cart/Cartpage";
import CheckoutPage from "../pages/payment/CheckoutPage";
import AddressPage from "../pages/payment/AddressPage";

// Authentication
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";

// Dashboard
import Dashboard from "../pages/user/dashboard/Dashboard";
import PendingOrders from "../pages/user/dashboard/PendingOrders";
import ActiveShipment from "../pages/user/dashboard/ActiveShipment";
import ShopByCategories from "../pages/category/ShopByCategories";
import Factories from "../factories/Factories";
import FactoryDetail from "../factories/FactoryDetail";
import HowItWorks from "../pages/homework/Howitworks";
import About from "../factories/About";
import TrackOrder from "../pages/user/dashboard/TrackOrder";

const AppRoutes = () => {
  return (
    <Routes>

      {/* =========================
          HOME
      ========================== */}
      <Route path="/" element={<Home />} />


      {/* =========================
          MAIN PAGES
      ========================== */}
      <Route
        path="/categories"
        element={<ShopByCategories/>}
      />


      <Route
        path="/pricing"
        element={<h1>Pricing Page</h1>}
      />

      <Route
        path="/how-it-works"
        element={<HowItWorks/>}
      />

      <Route
        path="/about"
        element={<About/>}
      />


      {/* =========================
          PRODUCTS
      ========================== */}

      {/* Category */}
      <Route
        path="/products/accessories"
        element={<Accessories />}
      />

      {/* Dynamic Product */}
      <Route
        path="/products/:category/:productId"
        element={<ProductDetailPage />}
      />


      {/* =========================
          CART & CHECKOUT
      ========================== */}

      <Route
        path="/cart"
        element={<CartPage />}
      />

      <Route
        path="/checkout"
        element={<CheckoutPage />}
      />

      <Route
        path="/address"
        element={<AddressPage />}
      />


      {/* =========================
          Factories
      ========================== */}
<Route path="/factories" element={<Factories/>} />

<Route
  path="/factories/:factoryId"
  element={<FactoryDetail />}
/>

      {/* =========================
          AUTHENTICATION
      ========================== */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />


      {/* =========================
          USER DASHBOARD
      ========================== */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      {/* User Addresses */}
      <Route
        path="/dashboard/addresses"
        element={<h1>Saved Addresses</h1>}
      />


      {/* =========================
          ORDERS
      ========================== */}

      <Route
        path="/dashboard/orders/pending"
        element={<PendingOrders/>}
      />

      <Route
        path="/dashboard/orders/active"
        element={<ActiveShipment/>}
      />

      <Route
        path="/dashboard/orders/delivered"
        element={<h1>Delivered Orders</h1>}
      />

      <Route
        path="/dashboard/orders/cancelled"
        element={<h1>Cancelled Orders</h1>}
      />

      <Route
        path="/dashboard/orders/history"
        element={<h1>Order History</h1>}
      />


      {/* =========================
          SHIPMENTS
      ========================== */}

      <Route
        path="/shipment"
        element={<TrackOrder/>}
      />

      <Route
        path="/dashboard/shipments"
        element={<TrackOrder/>}
      />


      {/* =========================
          SUPPORT
      ========================== */}

      <Route
        path="/support"
        element={<h1>Support Center</h1>}
      />


      {/* =========================
          404
      ========================== */}

      <Route
        path="*"
        element={
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-[#17386F]">
                404
              </h1>

              <p className="mt-2 text-sm text-[#64748B]">
                Page Not Found
              </p>
            </div>
          </div>
        }
      />

    </Routes>
  );
};

export default AppRoutes;
