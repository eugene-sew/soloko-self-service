import { categories } from "./data";
import burger from "../assets/burger.png";
import basket from "../assets/basket.png";
import "../App.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import fries from "../assets/fries.png";
import { useCart } from "../context/cart";

const Header = () => {
  const { items } = useCart();

  return (
    <div className="w-full shadow fixed md:relative md:overflow-hidden md:overflow-y-scroll  pt-3 hide md:pt-0 z-50 bg-white md:bg-gray-200 grid rounded-b-lg px-3 md:pb-2">
      <div className="flex justify-between md:justify-center items-center md:flex-col md:mt-3">
        <h1 className="text-orange-500 font-bold px-3 text-2xl md:hidden">
          Soloko self-center
        </h1>

        <div className="md:grid place-items-center hidden ">
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20"
          />
          <h1 className="font-bold  text-xl text-center tracking-widest">
            Soloko Cafe
          </h1>
          <small className="text-center uppercase text-xs mt-2 font-thin tracking-wider">
            locaclicious <br /> drinks and food
          </small>
        </div>
        <NavLink
          className="relative md:hidden"
          to={"/checkout"}
        >
          <img
            src={basket}
            alt="basket image"
            className="w-12 h-12 mr-7"
          />
          <h2 className=" right-5 bg-orange-500 text-white rounded-full absolute text-center -top-2 font-bold px-2 z-50 ">
            {items ? items.length : 0}
          </h2>
        </NavLink>
      </div>
      {/* nav links */}
      <nav className="w-full overflow-hidden overflow-x-scroll mt-5  md:mt-3 hide md:pb-10">
        <ul className="flex flex-row gap-3 md:flex-col md:justify-between">
          {categories.map((category, index) => (
            <NavLink
              to={category.link}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 border-orange-500 md:border-none md:bg-orange-500  md:text-white text-orange-500 transition duration-150 ease-in-out font-bold"
                    : " text-black transition duration-150 ease-in-out md:bg-white "
                } h-fit py-2 px-2 md:px-0 w-min md:w-full whitespace-nowrap flex flex-row items-center md:rounded-lg md:mt-3`
              }
              key={index}
            >
              <div className="flex-col items-center justify-center md:flex hidden w-full py-2 ">
                <img
                  src={category.image}
                  alt="foodmage"
                  className="w-16 h-16 "
                />
                <h2 className="w-full  text-sm font-light text-center mt-2 whitespace-normal">
                  {category.name.toLowerCase()}
                </h2>
              </div>
              <h2 className="w-full md:hidden">
                {category.name.toLowerCase()}
              </h2>
            </NavLink>
          ))}
        </ul>
        {/*  */}
      </nav>
    </div>
  );
};

export default Header;
