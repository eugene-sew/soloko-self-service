import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const setToLocalStorage = (data) => {
    window.localStorage.setItem(
      "items",

      JSON.stringify(data)
    );
  };

  const getFromLocalStorage = () => {
    return localStorage.getItem("items");
  };

  //   useEffect(() => {
  //     let mounted = true;
  //     mounted && setItems(JSON.parse(window.localStorage.getItem("items")));

  //     return () => (mounted = false);
  //   }, []);

  //   add id later
  const addToCart = (name, image, qty, price) => {
    const itemStatus = items.filter((data) =>
      data.name.toLowerCase().includes(name.toLowerCase())
    );
    itemStatus.length > 0
      ? updateCartItem(name, qty)
      : setItems((prev) => [...prev, { name, image, qty, price }]);
    setToLocalStorage(items);
  };

  // const confirmOrder

  const updateCartItem = (name, qty) => {
    // find the item
    const item = items.filter((data) =>
      data.name.toLowerCase().includes(name.toLowerCase())
    );

    // get index of item
    const id = items.indexOf(item[0]);
    // perform arithmetic update

    items[id].qty += qty;
    // setback into state
    setItems((prev) => [...prev]);
  };

  //   remove item from cart
  const removeFromCart = (id) => {
    setItems([...items.slice(0, id), ...items.slice(id + 1)]);
  };

  //   clear all items in cart
  const clearCart = () => {
    setItems([]);
  };

  const vals = {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    updateCartItem,
  };
  return <CartContext.Provider value={vals}>{children}</CartContext.Provider>;
}
