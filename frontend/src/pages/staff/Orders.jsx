import axios from "axios";
import { useEffect, useState, useRef } from "react";
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

const socket = io.connect(import.meta.env.VITE_APP_HOST);

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [show, setShow] = useState(false);
  const [play, setPlay] = useState(false);
  const audioRef = useRef();
  const { token } = useAuth();
  const navigate = useNavigate();

  const fetchOrders = async () => {
    await getOrders()
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchOrders();
    audioRef.current.play();
  }, []);

  useEffect(() => {
    socket.on("received_order", (data) => {
      audioRef.current.play();
      setOrderData(data["new order"].data);
      fetchOrders();
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
            type="text"
            className="w-full rounded-lg shadow bg-white px-2 py-2 outline-none h-10"
            placeholder="search order..."
          />
        </div>

        <div className="w-full h-screen hide overflow-hidden overflow-y-scroll pb-32 mt-5">
          <ul className="w-full flex flex-col pb-20 gap-5 ">
            {orders.map((item) => (
              <NavLink
                to={`${item.id}`}
                key={item.id}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-orange-200 transition duration-150 ease-in-out "
                      : " bg-white transition duration-150 ease-in-out"
                  }  text-gray-800 rounded-lg shadow px-4 py-2 grid cursor-pointer md:hover:bg-gray-300`
                }
              >
                <h1 className="">
                  Order <span className="font-semibold"> {item.id}</span>
                </h1>
                <h2>GHC {item.attributes.total_price}</h2>
              </NavLink>
            ))}
          </ul>
        </div>
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
