import { Link } from "react-router-dom";
import logo from "../assets/food.png";
const Starter = () => {
  return (
    <div className="w-full h-screen bg-white grid grid-rows-6 px-5 sm:hidden">
      <div className="text-center row-span-1">
        <h1 className="text-orange-500 font-bold text-4xl mt-5 justify-center">
          Soloko Self Center
        </h1>
        <small className="italic text-orange-700">
          thanks for using our self-ordering service, proceed to view the menu
          and order your meals
        </small>
      </div>

      <img
        src={logo}
        alt="soloko logo"
        className="place-self-center row-span-4"
      />
      <Link
        className="row-span-1 w-full place-self-end font-bold text-white py-2 shadow-lg rounded-lg text-center bg-orange-500 mb-10 transition delay-300 ease-in-out"
        to={"menu/breakfast"}
      >
        View Menu
      </Link>
    </div>
  );
};

export default Starter;
