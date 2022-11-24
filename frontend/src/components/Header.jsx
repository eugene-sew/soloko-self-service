import { categories } from "./data";
import burger from "../assets/burger.png";
import basket from "../assets/basket.png";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart";

const Header = () => {
  const { items } = useCart();
  return (
    <div className="w-full shadow fixed pt-3 z-50 bg-white h-fit grid rounded-b-lg overflow-hidden px-3">
      <div className="flex justify-between items-center">
        <h1 className="text-orange-500 font-bold px-3 flex text-2xl ">
          Soloko self-center
        </h1>
        <NavLink className="relative" to={"/checkout"}>
          <img src={basket} alt="basket image" className="w-12 h-12 mr-7" />
          <h2 className=" right-5 bg-orange-500 text-white rounded-full absolute text-center -top-2 font-bold px-2 z-50 ">
            {items ? items.length : 0}
          </h2>
        </NavLink>
      </div>
      {/* nav links */}
      <nav className="w-full overflow-hidden overflow-x-scroll mt-5 hide">
        <ul className="flex flex-row gap-3 ">
          {categories.map((category, index) => (
            <NavLink
              to={category.link}
              // className={({ isActive }) =>
              //   `${
              //     isActive
              //       ? "bg-orange-500 text-white"
              //       : "bg-gray-200 text-black"
              //   } h-fit py-2 px-2 rounded-full w-min whitespace-nowrap flex flex-row items-center`
              // }
              // className={({ isActive }) =>
              //   `${
              //     isActive
              //       ? "underline text-orange-500 underline-offset-4 transition duration-150 ease-in-out font-bold"
              //       : " text-black"
              //   } h-fit py-2 px-2 rounded-full w-min whitespace-nowrap flex flex-row items-center`
              // }
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 border-orange-500 text-orange-500 transition duration-150 ease-in-out font-bold"
                    : " text-black transition duration-150 ease-in-out"
                } h-fit py-2 px-2 w-min whitespace-nowrap flex flex-row items-center`
              }
              key={index}
            >
              <h2 className="">{category.name.toLowerCase()}</h2>
            </NavLink>
          ))}
        </ul>
        {/*  */}
      </nav>
    </div>
  );
};

export default Header;

// className={({ isActive, isPending }) =>
//                       isActive
//                         ? "active"
//                         : isPending
//                         ? "pending"
//                         : ""
//                     }
