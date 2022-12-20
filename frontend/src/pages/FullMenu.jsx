import { Header, Meal } from "../components/index";
import foot from "../assets/footer.png";
import { Outlet } from "react-router-dom";

const FullMenu = () => {
  return (
    <div className="w-full h-full bg-gray-100 grid sm:hidden">
      <Header />
      <main className="mt-32 pt-2 px-2 h-full pb-10">
        <Outlet />
      </main>
      <footer className="z-50 fixed bottom-0">
        <img
          src={foot}
          alt="footer image"
          className="w-full object-cover rounded-t-lg"
        />
      </footer>
    </div>
  );
};

export default FullMenu;
