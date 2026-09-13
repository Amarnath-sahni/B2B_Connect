// src/context/CartContext.jsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const CartContext = createContext(null);


export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });


  // Save cart whenever cart changes
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);


  // ============================================
  // ADD TO CART
  // ============================================

  const addToCart = (product, quantity = 1, size = null) => {

    setCart((prevCart) => {

      const existingProduct = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.size === size
      );


      // Product already exists
      if (existingProduct) {

        return prevCart.map((item) =>
          item.id === product.id &&
          item.size === size
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );

      }


      // New product
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images?.[0] || product.image,
          size,
          quantity,
        },
      ];

    });

  };


  // ============================================
  // REMOVE PRODUCT
  // ============================================

  const removeFromCart = (productId, size = null) => {

    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.id === productId &&
            item.size === size
          )
      )
    );

  };


  // ============================================
  // INCREASE QUANTITY
  // ============================================

  const increaseQuantity = (productId, size = null) => {

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId &&
        item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };


  // ============================================
  // DECREASE QUANTITY
  // ============================================

  const decreaseQuantity = (productId, size = null) => {

    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId &&
          item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  // ============================================
  // CLEAR CART
  // ============================================

  const clearCart = () => {
    setCart([]);
  };


  // ============================================
  // TOTAL ITEMS
  // ============================================

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // ============================================
  // SUBTOTAL
  // ============================================

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const value = {
    cart,

    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,

    totalItems,
    subtotal,
  };


  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}