import rice from "../assets/rice.png";
import clock from "../assets/clock.svg";
import { useLayout } from "../context/layout";
import { useEffect, useState } from "react";
import { useCart } from "../context/cart";

const Card = ({ image, name, price, time, additional }) => {
  const { addToCart } = useCart();
  return (
    <div className="w-full h-fit rounded-lg shadow-lg overflow-hidden relative bg-white">
      <img src={image} className="object-cover h-44 w-full" />
      <div className="px-2 mb-2">
        <h1 className="text-gray-700">{name}</h1>
        <h2 className="price font-bold">GHC {price}</h2>

        <h1 className="bg-orange-500 absolute top-0 right-0 flex items-center text-white gap-2 px-3 rounded-full shadow-lg mt-2 justify-center">
          {time} mins
          <span>
            <img src={clock} alt="" className="w-5 h-5" />
          </span>
        </h1>
      </div>
      <button
        className="buy text-center font-bold text-lg text-white w-full p-2 rounded"
        onClick={() => addToCart(name, image, 1, price)}
      >
        Add to Plate
      </button>
    </div>
  );
};

const List = ({ m_id, image, name, price, time, additional }) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [isThere, setIsThere] = useState([]);
  const { addToCart, items } = useCart();

  useEffect(() => {
    let mounted = true;
    setIsThere(
      items.find((item) => item.name.toLowerCase().includes(name.toLowerCase()))
    );
    return () => (mounted = false);
  }, [items]);

  const addToCartHandler = (e) => {
    e.preventDefault();
    addToCart(m_id, name, image, qty, price);
    setQty(1);
    setAdded(true);
  };
  // console.log(m_id);
  return (
    <div className="w-full h-fit rounded-lg shadow-lg overflow-hidden relative grid grid-cols-12 py-4 px-2 bg-white gap-5">
      <img
        src={image}
        alt="meal image"
        className="col-span-4 h-full object-cover w-full rounded-lg "
      />
      <div className=" col-span-8 grid px-3 pt-2">
        <h1 className="font-bold text-xl text-gray-700">{name}</h1>
        <small className="text-gray-600">{additional}</small>
        <h1 className="font-bold text-base text-gray-500">GH {price}</h1>
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-4 flex flex-row">
            <button
              className="font-bold text-black w-full text-center text-2xl"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            >
              -
            </button>
            <input
              type="number"
              className="w-5 outline-none text-center"
              min={1}
              value={qty}
              onChange={() => setQty(qty)}
            />

            <button
              className="font-bold text-black w-full text-center"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>
          {!isThere ? (
            <button
              className="px-2 py-2 bg-orange-600 text-white font-semibold rounded-md shadow col-span-8"
              onClick={addToCartHandler}
            >
              Add to Plate
            </button>
          ) : (
            <button
              className="px-2 py-2 bg-orange-700 text-white font-semibold rounded-md shadow col-span-8"
              onClick={addToCartHandler}
            >
              {isThere && isThere.qty > 1
                ? isThere.qty + " in Basket"
                : isThere.qty + " on plate"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Meal = ({ id, image, name, price, time, additional }) => {
  const { layout } = useLayout();

  return (
    <>
      {layout ? (
        <Card image={image} name={name} price={price} time={time} />
      ) : (
        <List
          image={image}
          name={name}
          price={price}
          time={time}
          additional={additional}
          m_id={id}
        />
      )}
    </>
  );
};

export default Meal;
