# B2B Connect

**B2B Connect** is a modern B2B textile and clothing marketplace designed to connect **retailers, shopkeepers, businesses, manufacturers, factories, and wholesale suppliers** in one platform.

The platform makes bulk procurement easier by allowing businesses to discover products, explore suppliers, compare pricing, place orders, and track shipments through a streamlined workflow.

## 🚀 Live Project

**Live Website:** https://my-project-six-plum-62.vercel.app/

## ✨ Key Features

* 🛍️ Browse wholesale clothing and textile products
* 🏭 Discover and explore textile factories and suppliers
* 📦 Product details with pricing, stock, sizes, and images
* 🔎 Category-based product discovery
* 🛒 Add products to cart and manage quantities
* 📋 Checkout and address management
* 🔐 Authentication and protected routes
* 👤 User dashboard
* 📦 Pending and active order management
* 🚚 Shipment tracking
* 📍 Delivery and location-based address selection
* ⚡ Responsive design for desktop, tablet, and mobile
* 🎨 Modern UI with Tailwind CSS
* 🔄 Reusable React components and Context API state management

## 🔄 Business Workflow

```text
Select Product
      ↓
Choose Factory / Supplier
      ↓
Compare & Get Pricing
      ↓
Place Bulk Order
      ↓
Shipment
      ↓
Track Order
      ↓
Delivered
```

## 🧩 Main Sections

### Products

Businesses can explore different wholesale categories such as:

* T-Shirts
* Shirts
* Hoodies
* Bottom Wear
* Fabrics
* Accessories
* Other textile products

### Factories & Suppliers

The platform provides a dedicated supplier/factory experience where businesses can explore manufacturers and suppliers based on their requirements.

### Product Details

Each product can contain:

* Product name
* Category
* Price
* Previous price
* Rating
* Reviews
* Stock availability
* Available sizes
* Product images
* Quantity selection

### Cart & Checkout

Users can add products to their cart, update quantities, review their order, provide delivery information, and continue through the checkout process.

### User Dashboard

Authenticated users can access their dashboard and manage:

* Profile
* Orders
* Pending orders
* Active shipments
* Order tracking

## 🔐 Authentication

B2B Connect uses an authentication-based routing system.

Protected pages are accessible only to authenticated users. If a user tries to access a protected route without logging in, they are redirected to the authentication page.

Example:

```text
Unauthenticated User
        ↓
Protected Route
        ↓
     Login
        ↓
 Authentication
        ↓
   User Dashboard
```

Logout clears the user's authentication information and redirects the user back to the login page.

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Tailwind CSS
* JavaScript (ES6+)
* Lucide Icons
* Framer Motion

### State Management

* React Context API
* Local Storage

### API / Backend Integration

* Axios / Fetch API
* REST API architecture

### Development Tools

* Git
* GitHub
* VS Code
* Postman
* Vercel

## 📁 Project Structure

```text
src/
├── components/
│   ├── common/
│   ├── layout/
│   ├── products/
│   └── ...
│
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── Accessories.jsx
│   ├── ProductDetailPage.jsx
│   ├── Cart/
│   ├── Checkout/
│   ├── Dashboard/
│   ├── Factories/
│   └── ...
│
├── routes/
│   └── AppRoutes.jsx
│
├── data/
│   └── ...
│
├── App.jsx
└── main.jsx
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Amarnath-sahni/B2B_Connect.git
```

### 2. Navigate to the project

```bash
cd B2B_Connect
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

### 5. Create a production build

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## 🌐 Deployment

The project is deployed using **Vercel**.

Every new commit pushed to the `main` branch can trigger a new deployment when GitHub integration is enabled.

```bash
git add .
git commit -m "Update project"
git push origin main
```

## 🎯 Project Goal

The goal of B2B Connect is to simplify the wholesale textile procurement process by bringing **business buyers and suppliers together on a single digital platform**.

Instead of depending entirely on traditional supplier discovery and manual communication, businesses can use the platform to discover products, explore suppliers, manage orders, and track deliveries digitally.

## 🔮 Future Improvements

Planned improvements include:

* Real backend API integration
* MongoDB database
* Supplier registration and dashboards
* Real-time order tracking
* Online payment integration
* Advanced product filtering
* Supplier verification
* Product reviews and ratings
* Bulk quotation system
* Business-to-business messaging
* AI-powered product and supplier recommendations
* Admin dashboard
* Automated notifications

## 👨‍💻 Developer

**Amarnath Sahni**

Full Stack Developer | Software Developer

* GitHub: https://github.com/Amarnath-sahni
* Portfolio: https://vite-react-seven-henna-90.vercel.app/

## 📄 License

This project is developed for learning, portfolio development, and future business exploration.

---

⭐ If you find this project interesting, consider giving the repository a star.
