import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = product => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove item completely
  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, qty) => {
    if (qty < 1) return;

    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  // Get cart total
  const getTotal = () => {
    return cart
      .reduce((sum, item) => sum + item.price * item.qty, 0)
      .toFixed(2);
  };

  // ✅ NEW: Clear cart after checkout
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotal,
        clearCart, // expose it
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export function useCart() {
  return useContext(CartContext);
}
