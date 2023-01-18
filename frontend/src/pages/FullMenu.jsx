import { Header, Meal } from "../components/index";
import foot from "../assets/footer.png";
import { Outlet } from "react-router-dom";
import Checkout from "./Checkout";

const FullMenu = () => {
  return (
    <div className="w-full h-full md:h-screen md:overflow-hidden bg-gray-100 grid md:grid-cols-12 md:gap-4">
      <div className="md:col-span-2  w-full md:h-screen md:overflow-hidden md:overflow-y-scroll hide">
        <Header />
      </div>
      <main className="mt-32 md:mt-0 pt-2 px-2 h-full pb-10 md:col-span-6 md:h-screen md:overflow-hidden md:overflow-y-scroll hide">
        <Outlet />
      </main>
      <div className="hidden md:grid md:col-span-4 w-full h-full bg-red-600">
        <Checkout />
      </div>
      <footer className="z-50 fixed bottom-0">
        <img
          src={foot}
          alt="footer image"
          className="w-full object-cover rounded-t-lg md:h-2 md:w-screen"
        />
      </footer>
    </div>
  );
};

export default FullMenu;
