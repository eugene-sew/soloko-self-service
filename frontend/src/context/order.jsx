import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const [orders, setOrder] = useState([]);

  const setToLocalStorage = (data) => {
    window.localStorage.setItem(
      "order",

      JSON.stringify(data)
    );
  };

  const getFromLocalStorage = () => {
    return localStorage.getItem("order");
  };

  useEffect(() => {
    let mounted = true;
    let localOrder = JSON.parse(getFromLocalStorage());

    mounted && localOrder && setOrder(localOrder);
    return () => (mounted = false);
  }, []);

  //   add id later
  const addToOrder = (data) => {
    setOrder(JSON.parse(data));
    setToLocalStorage(JSON.parse(data));
  };

  //   console.log({ orders });
  const vals = {
    orders,
    addToOrder,
  };
  return <OrderContext.Provider value={vals}>{children}</OrderContext.Provider>;
}
