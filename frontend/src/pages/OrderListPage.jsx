import React, { useState } from "react";
import cash from "../assets/icons/pay-money-icon.svg";
import momo from "../assets/icons/mobile-money-transfer-icon.svg";

import cashwhite from "../assets/icons/pay-money-white.svg";
import momowhite from "../assets/icons/momo-white.svg";

import takeout from "../assets/takeout.png";
import takeoutwhite from "../assets/takeout-white.png";
import eatinwhite from "../assets/eatin-white.png";
import eatin from "../assets/eatin.png";

import { useOrder } from "../context/order";

const OrderListPage = () => {
  const [selected, isSelected] = useState(false);
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(0);
  const [tselect, setTSelect] = useState(false);
  const [eselect, setESelect] = useState(false);
  const [orderOption, setOrderOption] = useState(null);
  const [moveLeft, setMoveLeft] = useState(0);
  const [moveRight, setMoveRight] = useState(100);
  const [mselect, setMSelect] = useState(false);
  const [cselect, setCSelect] = useState(false);
  const [payOption, setPayOption] = useState(null);
  const { orders } = useOrder();

  const getIndiTotal = (qty, price) => {
    return parseInt(qty) * parseFloat(price);
  };

  const getTotal = () => {
    var sum = 0.0;
    orders.forEach((item) => (sum += getIndiTotal(item.qty, item.price)));
    return sum.toFixed(2);
  };

  const eatinHandler = () => {
    setESelect(true);
    setTSelect(false);
    setOrderOption("eat-in");
  };

  const takeoutHandler = () => {
    setTSelect(true);
    setESelect(false);
    setOrderOption("take-out");
  };

  const momoHandler = () => {
    setMSelect(true);
    setCSelect(false);
    setPayOption("Momo");
  };

  const cashHandler = () => {
    setCSelect(true);
    setMSelect(false);
    setOrderOption("Cash");
  };

  const nextHandler = () => {
    setMoveLeft(100);
    setMoveRight(0);
  };

  const prevHandler = () => {
    setMoveLeft(0);
    setMoveRight(100);
  };

  const doneHandler = () => {
    setHidden(100);
  };

  // console.log(orders);

  const generateID = () => {};
  return (
    <div
      className={`w-full h-screen grid grid-rows-6 relative bg-gray-100 gap-4 overflow-hidden`}
    >
      <div className="mt-5 row-span-5 h-full grid gap-5">
        <div className="flex justify-between px-3 items-center">
          <h1 className="text-2xl text-orange-600 font-bold ml-3 px-2 opacity-70">
            Order ID: SC12345
          </h1>
          <h2 className="font-semibold text-xl "> GHC {getTotal()}</h2>
        </div>
        <div>
          <ul className="w-full flex flex-col gap-5 px-5 mt-3">
            <li
              className={`grid grid-cols-12 bg-white gap-2  shadow-lg rounded-md overflow-hidden pt-2 h-fit py-3 px-2 place-items-center`}
            >
              <h1 className="col-span-3"> Meal </h1>
              <h1 className="col-span-3">quantity</h1>
              <h1 className="col-span-3">price</h1>
              <h1 className="col-span-3">t-cost</h1>
            </li>
          </ul>
          <div className="h-[500px]  overflow-hidden overflow-y-scroll hide">
            <ul className="w-full flex flex-col gap-2 px-5 mt-3 py-4 ">
              {orders.map((item, index) => (
                <li
                  className={`grid grid-cols-12 border-b-2 border-orange-600 overflow-hidden h-fit py-3 place-items-center`}
                  key={index}
                >
                  <h1 className="col-span-4 text-center">{item.name} </h1>
                  <h1 className="col-span-2">{item.qty}</h1>
                  <h1 className="col-span-3">{item.price}</h1>
                  <h1 className="col-span-3">
                    {getIndiTotal(item.qty, item.price).toFixed(2)}
                  </h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button
        className="bg-orange-600 rounded-t-xl mt-5 font-semibold text-white text-xl"
        onClick={() => setHidden(40)}
      >
        Choose Order Type
      </button>
      <div
        className={`w-full h-full bg-white absolute transition duration-700 ease-in-out translate-y-[${hidden}%] rounded-t-xl shadow-orange-500 shadow-lg`}
      >
        <div className="w-full h-full relative py-3">
          <button
            className="font-bold text-xl absolute right-0 mr-5"
            onClick={() => setHidden(100)}
          >
            X
          </button>

          {/* order type */}
          <div className="flex flex-col  mt-7 items-center justify-between gap-7">
            <div
              className={`flex flex-col justify-center items-center gap-5 transition duration-700 ease-in-out -translate-x-[${moveLeft}vw] translate-y-[5.2vh]`}
            >
              <h1>How do you want your order?</h1>
              <div className="flex gap-5 justify-center items-center ">
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
            {/* mayment methods */}
            <div
              className={`transition duration-700 ease-in-out translate-x-[${moveRight}vw] flex flex-col translate-y-[-25vh] justify-center items-center`}
            >
              <h1> Select a payment method</h1>
              <div>
                <div className="flex justify-center items-center mt-12 gap-5">
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
                disabled={moveLeft !== 100 ? true : false}
                onClick={() => prevHandler()}
              >
                prev
              </button>
              <button
                className={
                  "bg-sky-400 px-3 py-3 rounded text-center text-white disabled:bg-gray-300 bottom-0 "
                }
                disabled={
                  orderOption === null && payOption === null ? true : false
                }
                onClick={
                  moveLeft !== 100 ? () => nextHandler() : () => doneHandler()
                }
              >
                {moveLeft !== 100 ? "Next" : "Done"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListPage;
