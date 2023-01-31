import { Link, useNavigate } from "react-router-dom";
import SwipeToDelete from "react-swipe-to-delete-ios";
import "react-swipeable-list/dist/styles.css";
import { useCart } from "../context/cart";
import trash from "../assets/icons/trash.svg";
import foot from "../assets/footer.png";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useOrder } from "../context/order";

const Checkout = () => {
  const { items, updateCartItem, removeFromCart } = useCart();
  const [currentItems, setCurrentItems] = useState([]);
  const [timerOn, setTimerOn] = useState(false);
  // const [time, setTime] = useState(60);
  const [width, setWidth] = useState(0);
  const [timeSet, setTimeSet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const navigate = useNavigate();
  const { addToOrder } = useOrder();

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

  const startMinutes = 0.2;
  let time = startMinutes * 60;

  const cancelOrder = () => {
    // setCancelled(true);
    setTimerOn(false);
    time = 0;
    setShowModal(false);
  };

  const addToOrderHandler = () => {
    addToOrder(JSON.stringify(currentItems));
  };

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        // setTime((prevTime) => prevTime - 1);
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        setTimeSet(`${parseInt(minutes)}:${parseInt(seconds)}`);
        setWidth(Math.floor(time / 3));
        time--;
        if (minutes == 0 && seconds == 0) {
          clearInterval(interval);
          addToOrderHandler();
          window.localStorage.removeItem("items");
          navigate("/order");
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const navigationHandler = () => {
    setCancelled(false);
    setShowModal(!showModal);
    setTimerOn(true);
  };

  const backNavigationHandler = () => {
    navigate(-1);
  };

  const skipHandler = () => {
    setTimerOn(false);
    addToOrderHandler();

    window.localStorage.removeItem("items");
    navigate("/order");
  };

  return (
    <div className="px-2 grid grid-rows-6 h-screen gap-2 pt-2 pb-5 bg-white relative">
      <div className="row-span-1  h-full w-full content-center mt-5 px-2 md:hidden">
        <button
          className="flex flex-row items-center text-blue-600"
          onClick={backNavigationHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 "
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
          <h1>Go Back</h1>
        </button>
        <h1 className="text-3xl font-semibold text-orange-600 md:hidden">
          Confirm your order
        </h1>
        <h1 className="text-3xl font-semibold text-orange-600 md:hidden">
          My Basket
        </h1>
        <h2 className="text-sm text-gray-600 px-2 italic md:hidden">
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
            <h1 className="col-span-12 text-orange-600">
              swipe left to remove item from basket
            </h1>
          </li>

          {currentItems.map((item, index) => (
            <SwipeToDelete
              onDelete={() => removeFromCart(item.id)}
              key={item.id}
              transitionDuration={250}
              deleteWidth={70}
              deleteThreshold={50}
              showDeleteAction={true}
              deleteColor="rgba(252, 58, 48, 1.00)"
              deleteText="Remove"
              rtl={false}
              className="min-h-[111px] rounded-lg px-0"
              onDeleteConfirm={(onSuccess, onCancel) => {
                if (
                  window.confirm("Do you really want to remove from basket?")
                ) {
                  onSuccess();
                } else {
                  onCancel();
                }
              }}
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
                  <div className="col-span-4 grid grid-cols-4 gap-2">
                    <div className="col-span-2 flex flex-row items-center gap-2">
                      <h1 className="w-5 outline-none text-center">
                        {item.qty}
                      </h1>
                      <div className="flex flex-col h-full bg-gray-200 gap-2 ">
                        <button
                          className="font-semibold flex items-center bg-white "
                          onClick={() => {
                            updateCartItem(item.id, 1);
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
                          onClick={() =>
                            item.qty > 1 && updateCartItem(item.id, -1)
                          }
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

                    <h1 className="flex items-center col-span-2">
                      {getIndiTotal(item.qty, item.price)}
                    </h1>
                  </div>
                </div>
                <div className="col-span-12 bg-red-600 w-full h-2">
                  <img
                    src={foot}
                    alt="footer image"
                    className="w-full"
                  />
                </div>
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
          <Link
            className="font-bold text-blue-500 text-base"
            to={"/order"}
          >
            skip
          </Link>
        </div>
      </div>
      {showModal && (
        <>
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-80 grid place-items-center">
            <div className="bg-white text-6xl font-bold rounded-lg shadow-lg text-gray-600 flex items-center justify-center h-40 w-56 tracking-wider relative overflow-hidden">
              <h1 className="z-50">{timeSet}</h1>

              <div
                className="absolute inset-0 bg-orange-600 text-white"
                // style={{ width: `${100 - getPercent(time)}%` }}
              ></div>
            </div>
            <div className="flex gap-5 items-center md:px-10">
              <button
                className="font-bold text-blue-500 text-base bg-white p-2 rounded shadow"
                onClick={() => cancelOrder()}
              >
                Update Order
              </button>
              <button
                className="font-bold text-white text-base bg-orange-600 p-2 rounded shadow ml-3"
                onClick={skipHandler}
              >
                Complete Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
