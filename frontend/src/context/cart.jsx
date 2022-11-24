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

  useEffect(() => {
    let mounted = true;
    let localCart = JSON.parse(getFromLocalStorage());

    mounted && localCart && setItems(localCart);
    return () => (mounted = false);
  }, []);

  //   add id later
  const addToCart = (name, image, qty, price) => {
    // const itemStatus = items.find((data) =>
    //   data.name.toLowerCase().includes(name.toLowerCase())
    // );
    // itemStatus
    //   ? updateCartItem(name, qty)
    //   : setItems((prev) => [...prev, { name, image, qty, price }]);
    let cartCopy = [...items];
    let existingItem = cartCopy.find((cartItem) =>
      cartItem.name.toLowerCase().includes(name.toLowerCase())
    );
    existingItem
      ? (existingItem.qty += qty)
      : //if item doesn't exist, simply add it
        cartCopy.push({ name, image, qty, price });
    setItems(cartCopy);
    setToLocalStorage(cartCopy);
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
    setToLocalStorage(items);
  };

  //   remove item from cart
  const removeFromCart = (id) => {
    // setItems([...items.slice(0, id), ...items.slice(id + 1)]);
    let cartCopy = [...items];
    cartCopy = cartCopy.filter((item, index) => index != id);
    setItems(cartCopy);
    setToLocalStorage(cartCopy);
    window.location.reload(false);
  };

  //   clear all items in cart
  const clearCart = () => {
    setItems([]);
    setToLocalStorage(items);
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
