import ProgressBar from "@ramonak/react-progress-bar";
import { Link, useNavigate } from "react-router-dom";
import SwipeToDelete from "react-swipe-to-delete-ios";
import "react-swipeable-list/dist/styles.css";
import { useCart } from "../context/cart";
import trash from "../assets/icons/trash.svg";
import foot from "../assets/footer.png";
import { useEffect, useState } from "react";

const Checkout = () => {
  const { items, updateCartItem, removeFromCart } = useCart();
  const [currentItems, setCurrentItems] = useState([]);
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let mounted = true;
    mounted && setCurrentItems(items);
    return () => (mounted = false);
  }, [items]);

  const getIndiTotal = (qty, price) => {
    return parseInt(qty) * parseFloat(price);
  };

  const getTotal = () => {
    var sum = 0.0;
    currentItems.forEach((item) => (sum += getIndiTotal(item.qty, item.price)));
    return sum.toFixed(2);
  };

  const getPercent = (val) => {
    const percent = val / 100;
    return percent;
  };
  const timer = () => {
    var start = 300000;
    // var start = 10000;

    setInterval(() => {
      if (start > 0) {
        setWidth(getPercent(start));
        start -= 1000;
      }
    }, 1000);
  };

  const navigationHandler = () => {
    navigate("/payment");
  };
  console.log(width);
  return (
    <div className="px-2 grid grid-rows-6 h-screen gap-2 pt-2 pb-5 bg-white relative">
      <div className={`w-full bg-green-400 h-2 absolute`}>
        {/* <ProgressBar completed={300000} /> */}
      </div>
      <div className="row-span-1  h-full w-full content-center mt-5 px-2">
        <h1 className="text-3xl font-semibold text-orange-600">
          Confirm your order
        </h1>
        <h2 className="text-sm text-gray-600 px-2 italic">
          sit back,confirm your order and relax as we fix you a special
        </h2>
      </div>
      <div className="row-span-4  h-full w-full">
        <ul className="grid hide gap-5 pb-10 bg-gray-100 w-full h-full px-2 py-3 rounded-lg row-span-4 overflow=hidden overflow-y-scroll place-content-start">
          <li className="grid grid-cols-12 gap-5 p-2">
            <div className="col-span-8 flex items-center gap-2 text-orange-500">
              <h1 className="font-bold text-xl opacity-60">Total: </h1>
              <h2 className="font-semibold text-xl"> GHC {getTotal()}</h2>
            </div>
            <div className="col-span-3 grid grid-cols-3">
              <h1>Qty</h1>
              <h1 className="col-span-1"></h1>
              <h1>Price</h1>
            </div>
          </li>

          {currentItems.map((item, index) => (
            <SwipeToDelete
              onDelete={() => removeFromCart(index)}
              key={index}
              transitionDuration={250}
              deleteWidth={70}
              deleteThreshold={50}
              showDeleteAction={true}
              deleteColor="rgba(252, 58, 48, 1.00)"
              deleteText="Remove"
              rtl={false}
              className="min-h-[111px] rounded-lg px-0"
            >
              <li
                className={`grid grid-cols-12 ${
                  item.qty <= 0 ? "bg-gray-200" : "bg-white"
                } gap-2  shadow-lg rounded-md overflow-hidden pt-2 h-28 grid-rows-6`}
              >
                <div className="col-span-12 grid grid-cols-12 px-2 place-items-center gap-2 h-full row-span-5">
                  <img
                    src={item.image}
                    alt="item image"
                    className="w-full h-full object-cover col-span-3 rounded-lg "
                  />
                  <h1 className="col-span-5 flex font-bold">{item.name}</h1>
                  <div className="col-span-4 grid grid-cols-4 ">
                    <div className="col-span-3 flex flex-row items-center">
                      <h1 className="w-5 outline-none text-center">
                        {item.qty}
                      </h1>
                      <div className="flex flex-col h-full bg-gray-200 gap-2 ">
                        <button
                          className="font-semibold flex items-center bg-white "
                          onClick={() => {
                            // item.qty += 1;
                            // console.log(item.qty);
                            updateCartItem(item.name, 1);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                        <button
                          className="font-semibold bg-white w-full text-center disabled:bg-gray-600"
                          onClick={() => updateCartItem(item.name, -1)}
                          disabled={item.qty <= 0 && trash}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <h1 className="flex items-center">
                      {getIndiTotal(item.qty, item.price)}
                    </h1>
                  </div>
                </div>
                <div className="col-span-12 bg-red-600 w-full h-2">
                  <img src={foot} alt="footer image" className="w-full" />
                </div>
                {/* <button className="col-span-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="red"
                  aria-hidden="true"
                  className="bg-red=600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button> */}
              </li>
            </SwipeToDelete>
          ))}
        </ul>
      </div>

      <div className="row-span-1 h-full w-full mt-3 pb-10">
        <button
          className="bg-orange-600 text-white font-semibold text-xl px-3 py-4 text-center w-full rounded-lg shadow-lg disabled:opacity-50"
          disabled={getTotal() <= 0 && true}
          onClick={() => navigationHandler()}
        >
          {getTotal() > 0 ? "Confirm Order" : "Select a meal"}
        </button>
        <div className="px-4 mt-3 text-sm">
          by tapping on the order button, you have 5 minutes to cancel the
          order. Tap on skip to skip the wait...
          <Link className="font-bold text-blue-500 text-base" to={"/payment"}>
            skip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
