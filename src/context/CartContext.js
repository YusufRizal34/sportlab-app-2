import { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [item, setItem] = useState([]);

  function getItemQuantity(id) {
    return item.find((item) => item.id === id)?.qty || 0;
  }

  function increaseItemQuatity(id) {
    setItem((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...item, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity + 1 };
          else return item;
        });
      }
    });
  }

  function decreaseItemQuatity(id) {
    setItem((currentItem) => {
      if (currentItem.find((item) => item.id === id) === 1) {
        return currentItem.filter((item) => item.id != id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity - 1 };
          else return item;
        });
      }
    });
  }

  function removeFromCart(id) {
    setItem((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuatity,
        decreaseItemQuatity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
