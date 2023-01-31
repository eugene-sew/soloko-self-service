import { useEffect, useState } from "react";
import cash from "../assets/icons/pay-money-icon.svg";
import momo from "../assets/icons/mobile-money-transfer-icon.svg";

import cashwhite from "../assets/icons/pay-money-white.svg";
import momowhite from "../assets/icons/momo-white.svg";

import takeout from "../assets/takeout.png";
import takeoutwhite from "../assets/takeout-white.png";
import eatinwhite from "../assets/eatin-white.png";
import eatin from "../assets/eatin.png";

import { useOrder } from "../context/order";

import { toast } from "react-toastify";
import axios from "axios";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
const socket = io.connect(import.meta.env.VITE_APP_HOST);

const OrderListPage = () => {
  const [selected, isSelected] = useState(false);
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [tselect, setTSelect] = useState(false);
  const [eselect, setESelect] = useState(false);
  const [orderOption, setOrderOption] = useState(null);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [mselect, setMSelect] = useState(false);
  const [cselect, setCSelect] = useState(false);
  const [payOption, setPayOption] = useState(null);
  const [orderData, setOrderData] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [noDisplay, setNoDisplay] = useState(false);
  const { orders } = useOrder();
  const [showMomoEmailModal, setShowMomoEmailModal] = useState(false);
  const [momoEmail, setMomoEmail] = useState("");

  const navigation = useNavigate();
  const getIndiTotal = (qty, price) => {
    return parseInt(qty) * parseFloat(price);
  };

  // sets the order to the specified format
  const reformatOrders = () => {
    const newer = orders.map((order) => {
      const orderItem = {
        meal: {
          id: order.id,
          name: order.name,
        },
        price: order.price,
        qty: order.qty,
        sub_total: getIndiTotal(order.qty, order.price).toFixed(2),
      };
      return orderItem;
    });
    return newer;
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setOrderDetail(reformatOrders);
      generateID();
    }
    return () => (mounted = false);
  }, []);

  const getTotal = () => {
    var sum = 0.0;
    orders.forEach((item) => (sum += getIndiTotal(item.qty, item.price)));
    return sum.toFixed(2);
  };

  const eatinHandler = () => {
    setESelect(true);
    setTSelect(false);
    setOrderOption("Eat In");
  };

  const takeoutHandler = () => {
    setTSelect(true);
    setESelect(false);
    setOrderOption("Take Out");
  };

  const momoHandler = () => {
    setMSelect(true);
    setCSelect(false);
    setPayOption("Momo");
    setShowMomoEmailModal(true);
  };

  const cashHandler = () => {
    setCSelect(true);
    setMSelect(false);
    setPayOption("Cash");
  };

  const nextHandler = () => {
    setMoveLeft(true);
    setMoveRight(true);
  };

  const prevHandler = () => {
    setMoveLeft(false);
    setMoveRight(false);
  };

  const doneHandler = async () => {
    setHidden(true);
    setNoDisplay(true);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: momoEmail,
    currency: "GHS",
    amount: getTotal() * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_8f9ec82a1d3b148ab80fa410376dc038d44655ef",
  };

  const orderHandler = async (pay) => {
    const data = {
      preparation_status: "Request",
      paid: pay ? true : false,
      payment_method: payOption,
      service_type: orderOption,
      order_items: orderDetail,
      total_price: getTotal(),
      transaction: pay.transaction,
    };
    console.log(data);
    await axios
      .post(import.meta.env.VITE_APP_ORDER + "?populate=*", {
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      })
      .then((res) => {
        // console.log(res.data);
        socket.emit("new_order", { "new order": res.data });
        toast.success("Order successful");
        window.localStorage.setItem("new_order", JSON.stringify(res.data));
        setTimeout(() => {
          // navigate to reciept screen
          navigation("/reciept");
        }, 1000);
      })
      .catch((err) => toast.error(err.response.data.error.message));
  };
  // console.log(orders);
  // reformatOrders()

  const generateID = () => {
    const num = Math.floor(Math.random() * 1000);
    console.log(num);
  };

  const handlePaystackSuccessAction = (reference) => {
    orderHandler(reference);
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    navigation("/order");
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Pay to order",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="w-full grid justify-center pay__page">
      <div className="w-full h-screen grid grid-rows-6 relative bg-gray-100 gap-4 overflow-hidden md:w-[600px]">
        <div className="mt-5 row-span-5 h-full grid gap-5">
          <div className="flex flex-col gap-2 px-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl text-orange-600 font-bold  opacity-70">
                Order ID: SC12345
              </h1>
              <h2 className="font-semibold text-xl "> GHC {getTotal()}</h2>
            </div>

            <div className="flex justify-start  items-center text-gray-700 gap-6 flex-row">
              <h2 className="font-semibold text-xl ">
                Order: {orderOption && orderOption}
              </h2>
              <h2 className="font-semibold text-xl ">
                Payment: {payOption && payOption}
              </h2>
            </div>
          </div>

          <div>
            <ul className="w-full flex flex-col gap-5 px-5 mt-3">
              <li
                className={`grid grid-cols-12 bg-white gap-2  shadow-lg rounded-md overflow-hidden pt-2 h-fit py-3 px-2 place-items-center`}
              >
                <h1 className="col-span-3"> Meal </h1>
                <h1 className="col-span-3">quantity</h1>
                <h1 className="col-span-3">price</h1>
                <h1 className="col-span-3">sum</h1>
              </li>
            </ul>
            <div className="h-[500px]  overflow-hidden overflow-y-scroll hide">
              <ul className="w-full flex flex-col gap-2 px-5 mt-3 py-4 ">
                {orderDetail.map((item, index) => (
                  <li
                    className={`grid grid-cols-12 border-b-2 border-orange-600 overflow-hidden h-fit py-3 place-items-center`}
                    key={index}
                  >
                    <h1 className="col-span-4 text-center">
                      {item.meal.name}{" "}
                    </h1>
                    <h1 className="col-span-2">{item.qty}</h1>
                    <h1 className="col-span-3">{item.price}</h1>
                    <h1 className="col-span-3">{item.sub_total}</h1>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {!noDisplay ? (
          <button
            className="bg-orange-600 rounded-t-lg mt-5 font-semibold text-white text-xl"
            onClick={() => setHidden(false)}
          >
            Choose Order Type
          </button>
        ) : mselect ? (
          <PaystackButton
            {...componentProps}
            className="bg-green-600 rounded-lg mt-2 font-bold text-white text-xl px-3 mx-4 py-2 mb-6 tracking-wider"
          />
        ) : (
          <button
            className="bg-green-600 rounded-lg mt-2 font-bold text-white text-xl px-3 mx-4 py-2 mb-6 tracking-wider"
            onClick={() => orderHandler()}
          >
            Order
          </button>
        )}

        <div
          className={`w-full h-full bg-gray-200 absolute transition duration-700 ease-in-out ${
            hidden ? "translate-y-[100%]" : "translate-y-[30%]"
          } rounded-t-xl shadow-orange-500 shadow-lg overflow-hidden`}
        >
          <div className="w-full h-full relative py-3">
            <button
              className="font-bold text-xl absolute right-0 mr-5"
              onClick={() => {
                setHidden(true);
              }}
            >
              X
            </button>

            {/* order type */}
            <div className="flex flex-col  mt-7 items-center justify-between gap-7">
              <div
                className={`flex flex-col justify-center items-center gap-5 transition duration-700 ease-in-out 
              ${
                moveLeft ? "-translate-x-[100vw]" : "-translate-y-[0vw]"
              } translate-y-[5.2vh]`}
              >
                <h1>How do you want your order?</h1>
                <div className="flex gap-5 md:gap-10 justify-center items-center ">
                  <button
                    className={`${
                      !tselect ? "bg-white" : "bg-orange-600"
                    } px-5 py-5 flex flex-col justify-center items-center rounded shadow gap-2`}
                    htmlFor="order_type_takeout"
                    onClick={takeoutHandler}
                  >
                    <img
                      src={!tselect ? takeout : takeoutwhite}
                      alt=" takeout"
                      className="w-20 h-20"
                    />
                    <h1
                      className={`font-semibold  ${
                        !tselect ? "text-gray-600" : "text-white"
                      }`}
                    >
                      Take Out
                    </h1>
                  </button>
                  <button
                    className={`${
                      !eselect ? "bg-white" : "bg-orange-600"
                    } px-5 py-5 flex flex-col justify-center items-center rounded shadow gap-2`}
                    htmlFor="order_type_eatin"
                    onClick={eatinHandler}
                  >
                    <img
                      src={!eselect ? eatin : eatinwhite}
                      alt=" eatin"
                      className="w-20 h-20"
                    />
                    <h1
                      className={`font-semibold  ${
                        !eselect ? "text-gray-600" : "text-white"
                      }`}
                    >
                      Eat-In
                    </h1>
                  </button>
                </div>
              </div>
              {/* payment methods */}
              <div
                className={`transition duration-700 ease-in-out 
              ${moveRight ? "translate-x-[0vw]" : "translate-x-[100vw]"}
               flex flex-col translate-y-[-25vh] justify-center items-center`}
              >
                <h1> Select a payment method</h1>
                <div>
                  <div className="flex justify-center items-center mt-12 gap-5 md:gap-10">
                    <button
                      className={`${
                        !mselect ? "bg-white" : "bg-orange-600"
                      } px-5 py-5 flex flex-col justify-center items-center rounded shadow gap-2`}
                      onClick={momoHandler}
                    >
                      <img
                        src={!mselect ? momo : momowhite}
                        alt=" momo"
                        className="w-20 h-20"
                      />
                      <h1
                        className={`font-semibold  ${
                          !mselect ? "text-gray-600" : "text-white"
                        }`}
                      >
                        Pay With MoMo
                      </h1>
                    </button>
                    <button
                      className={`${
                        !cselect ? "bg-white" : "bg-orange-600"
                      } px-5 py-5 flex flex-col justify-center items-center rounded shadow gap-2`}
                      onClick={cashHandler}
                    >
                      <img
                        src={!cselect ? cash : cashwhite}
                        alt=" cash"
                        className="w-20 h-20"
                      />
                      <h1
                        className={`font-semibold  ${
                          !cselect ? "text-gray-600" : "text-white"
                        }`}
                      >
                        Pay With Cash
                      </h1>
                    </button>
                  </div>
                </div>
              </div>

              {/* operational buttons */}
              <div className="flex gap-5 -translate-y-[20vh]">
                <button
                  className={
                    "bg-orange-400 px-3 py-3 rounded text-center text-white disabled:bg-gray-300 bottom-0 "
                  }
                  disabled={!moveLeft ? true : false}
                  onClick={() => prevHandler()}
                >
                  prev
                </button>
                <button
                  className={
                    "bg-sky-400 px-3 py-3 rounded text-center text-white disabled:bg-gray-300 bottom-0 "
                  }
                  disabled={
                    orderOption == null && payOption == null ? true : false
                  }
                  onClick={
                    !moveLeft ? () => nextHandler() : () => doneHandler()
                  }
                >
                  {!moveLeft ? "Next" : "Done"}
                </button>
              </div>
            </div>
            {/* <div className="w-full h-full absolute top-0 bg-red-700 grid place-content-center">
            <button className="bg-green-600 text-white font-bold px-5 py-4 rounded">
              Complete Order
            </button>
          </div> */}
          </div>
        </div>

        {showMomoEmailModal && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-lg overflow-hidden h-48 w-80 px-2 py-3 relative">
              <div className="flex flex-col justify-center items-center h-full gap-3 px-2">
                <h1 className="text-gray-400 grid place-self-start text-xs mt-5">
                  Enter your email to continue
                </h1>
                <input
                  type="email"
                  placeholder="email@mail.com"
                  className="bg-gray-100 px-3 py-2 w-full rounded-md shadow "
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="enter a valid email address"
                  onChange={(e) => setMomoEmail(e.target.value)}
                  required
                />
                <button
                  className="px-2 py-3 mt-4 bg-orange-600 text-white rounded font-semibold tracking-wider disabled:bg-gray-200"
                  disabled={momoEmail.length > 3 ? false : true}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMomoEmailModal(false);
                  }}
                >
                  Continue
                </button>

                <button
                  className="absolute rounded-full bg-red-600 h-7 w-7 text-white font-bold text-center right-2 top-2"
                  onClick={() => setShowMomoEmailModal(false)}
                >
                  x
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderListPage;
