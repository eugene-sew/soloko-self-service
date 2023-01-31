import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getOrders } from "../util/api";
import { useAuth } from "./auth";
//

const aOrdersContext = createContext();

export function useAOrders() {
  return useContext(aOrdersContext);
}

export function AOrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [info, setInfo] = useState([]);
  const { token } = useAuth();

  const getOrder = async (id) => {
    const url = `${
      import.meta.env.VITE_APP_ORDER
    }${id}/?populate[0]=attributes&populate[1]=order_items&populate[2]=order_items.meal`;
    await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setInfo(res.data.data))
      .catch((err) => console.error(err));
  };

  const fetchRequestOrders = async () => {
    await getOrders()
      .then((res) =>
        setOrders(
          res.data
            // .filter((data) => data.attributes.preparation_status == "Request")
            .sort((a, b) => b.id - a.id)
        )
      )
      .catch((err) => console.error(err));
  };

  const updateDone = async (oid) => {
    const url = `${
      import.meta.env.VITE_APP_ORDER
    }${oid}/?populate[0]=attributes&populate[1]=order_items&populate[2]=order_items.meal`;
    await axios
      .put(
        url,
        {
          data: {
            preparation_status: "Done",
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      //   .then((res) => console.log(res))
      .then(getOrder(oid))
      .catch((err) => console.error(err));
  };

  const updateAccepted = async (oid) => {
    const url = `${import.meta.env.VITE_APP_ORDER}${oid}`;
    await axios
      .put(
        url,
        {
          data: {
            preparation_status: "Accepted",
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      //   .then((res) => setInfo(res.data.data))
      .then(getOrder(oid))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetchRequestOrders();
    }
    return () => (mounted = false);
  }, [orders]);

  const vals = {
    orders,
    fetchRequestOrders,
    updateAccepted,
    updateDone,
    getOrder,
    info,
  };
  return (
    <aOrdersContext.Provider value={vals}>{children}</aOrdersContext.Provider>
  );
}
