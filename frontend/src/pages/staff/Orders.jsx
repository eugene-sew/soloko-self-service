import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  Navigate,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { io } from "socket.io-client";
import food from "../../assets/food.png";
import { useAuth } from "../../context/auth";
import { getOrders } from "../../util/api";
import tone from "../../assets/tone.wav";
import ReactHowler from "react-howler";
import { useAOrders } from "../../context/allOrders";

const socket = io.connect(import.meta.env.VITE_APP_HOST);

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const [show, setShow] = useState(false);
  const [play, setPlay] = useState(false);
  const audioRef = useRef();
  const { token } = useAuth();
  const navigate = useNavigate();
  const { orders } = useAOrders();

  useEffect(() => {
    audioRef.current.play();
  }, []);

  useEffect(() => {
    socket.on("received_order", (data) => {
      audioRef.current.play();
      setOrderData(data["new order"].data);
      // fetchRequestOrders();
      setShow(true);
    });
  }, [socket]);

  const AcceptOrderHandler = async () => {
    const url = `${import.meta.env.VITE_APP_ORDER}${orderData.id}`;
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
      .then((res) => {})
      .catch((err) => console.error(err));

    setShow(false);

    navigate(`${orderData.id}`);
  };

  // const handleSearch = async () =>{

  // }
  const [search, setSearch] = useState(null);

  const filtered = orders.filter((order) =>
    search ? parseInt(order.id) == parseInt(search) : order
  );

  const newer = filtered.filter(
    (data) => data.attributes.preparation_status == "Request"
  );

  const older = filtered.filter(
    (data) => data.attributes.preparation_status == "Done"
  );

  return (
    <div
      className={`w-full h-full grid grid-cols-10 md:grid-cols-12 gap-5 py-5 relative px-3`}
    >
      <div
        className="col-span-4 bg-gray-100 w-full rounded-lg shadow h-[100%] px-2
      "
      >
        <div className="grid gap-3 w-full overflow-hidden ">
          <h1 className="text-2xl font-bold text-gray-600">Orders</h1>
          <input
            type="number"
            className="w-full rounded-lg shadow bg-white px-2 py-2 outline-none h-10"
            placeholder="search order..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div></div>
        <Tabs className={"mt-4"}>
          <TabList className={" flex w-full"}>
            <Tab
              className={
                "px-2 font-semibold text-xl border-none bg-transparent shadow cursor-pointer "
              }
            >
              New Orders
            </Tab>
            <Tab
              className={
                "px-2 font-semibold text-xl border-none bg-transparent shadow cursor-pointer"
              }
            >
              Old Orders
            </Tab>
          </TabList>

          <TabPanel>
            <div className="w-full h-screen hide overflow-hidden overflow-y-scroll pb-32 ">
              <ul className="w-full flex flex-col pb-20 gap-5 pt-5">
                {newer.length > 0 ? (
                  newer.map((item) => (
                    <NavLink
                      to={`${item.id}`}
                      key={item.id}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-orange-200 transition duration-150 ease-in-out "
                            : " bg-white transition duration-150 ease-in-out"
                        }  text-gray-800 rounded-lg shadow px-4 py-2 grid cursor-pointer md:hover:bg-gray-300 relative group`
                      }
                    >
                      <h1 className="">
                        Order <span className="font-semibold"> {item.id}</span>
                      </h1>
                      <h2>GHC {item.attributes.total_price}</h2>

                      {item.attributes.preparation_status == "Request" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 fill-orange-500 absolute top-0 right-0 group-focus:hidden -mt-2"
                        >
                          <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                          <path
                            fillRule="evenodd"
                            d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </NavLink>
                  ))
                ) : (
                  <li>Order not found</li>
                )}
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-full h-screen hide overflow-hidden overflow-y-scroll pb-32 ">
              <ul className="w-full flex flex-col pb-20 gap-5 pt-5">
                {older.length > 0 ? (
                  older.map((item) => (
                    <NavLink
                      to={`${item.id}`}
                      key={item.id}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-orange-200 transition duration-150 ease-in-out "
                            : " bg-white transition duration-150 ease-in-out"
                        }  text-gray-800 rounded-lg shadow px-4 py-2 grid cursor-pointer md:hover:bg-gray-300 relative group`
                      }
                    >
                      <h1 className="">
                        Order <span className="font-semibold"> {item.id}</span>
                      </h1>
                      <h2>GHC {item.attributes.total_price}</h2>
                    </NavLink>
                  ))
                ) : (
                  <li>Order not found</li>
                )}
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* order info */}
      <div className="col-span-6 md:col-span-8 w-full h-full ">
        <Outlet />
      </div>
      {show && (
        <div className="absolute top-0  h-full w-full grid place-content-center bg-black bg-opacity-10">
          <div className="bg-white rounded-lg shadow min-h-[300px] min-w-[300px] px-10 py-5 grid ">
            <img
              src={food}
              className="h-28 w-36 place-self-center"
            />
            <h1 className="text-xl font-bold ">New Order In</h1>
            <ul>
              <li>Order ID: {orderData.id} </li>
              <li>Total Cost: {orderData.attributes?.total_price}</li>
            </ul>
            <button
              className="px-4 py-4 w-full bg-green-600 rounded shadow font-bold text-white"
              onClick={() => {
                AcceptOrderHandler();
              }}
            >
              Accept Order
            </button>
          </div>
          {/* <ReactHowler
            src={tone}
            playing={true}
          /> */}
        </div>
      )}
      <audio
        src={tone}
        ref={audioRef}
      />
    </div>
  );
};

export default Orders;

export function ordersLoader() {
  return getOrders();
}
