import React from "react";
import { useCart } from "../context/cart";

const Payment = () => {
  const { items } = useCart();
  const getIndiTotal = (qty, price) => {
    return parseInt(qty) * parseFloat(price);
  };
  const getTotal = () => {
    var sum = 0.0;
    items.forEach((item) => (sum += getIndiTotal(item.qty, item.price)));
    return sum.toFixed(2);
  };
  console.log(items);
  return (
    <div>
      <div></div>
      <div className="mt-5">
        <div className="flex justify-between px-3 items-center">
          <h1 className="text-2xl text-orange-600 font-bold ml-3 px-2 opacity-70">
            Order ID: SC12345
          </h1>
          <h2 className="font-semibold text-xl "> GHC {getTotal()}</h2>
        </div>
        <ul className="w-full flex flex-col gap-5 px-5 mt-3">
          <li
            className={`grid grid-cols-12 bg-white gap-2  shadow-lg rounded-md overflow-hidden pt-2 h-fit py-3 px-2 place-items-center`}
          >
            <h1 className="col-span-3"> Meal </h1>
            <h1 className="col-span-3">quantity</h1>
            <h1 className="col-span-3">price</h1>
            <h1 className="col-span-3">t-cost</h1>
          </li>
          {items.map((item, index) => (
            <li
              className={`grid grid-cols-12 bg-white gap-2  shadow-lg rounded-md overflow-hidden h-fit py-3 place-items-center`}
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
  );
};

export default Payment;
