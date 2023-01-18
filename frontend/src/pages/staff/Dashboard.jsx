import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { links } from "../../components/adminlink";
import { useAuth } from "../../context/auth";
import logo from "../../assets/logo.png";

import Error from "../Error";
import Orders from "./Orders";

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <div className="grid grid-cols-12 w-full h-full">
      <div className="col-span-2 hidden md:block bg-white h-screen w-full pt-5 ">
        <div className="bg-white h-full w-full rounded-lg shadow-lg backdrop-filter bg-opacity-50 bg-clip-padding flex flex-col justify-between">
          <div className="grid gap-10">
            <div className="grid place-items-center ">
              <img
                src={logo}
                alt="logo"
                className="w-24 h-24"
              />
              <h1 className="font-bold  text-2xl text-center tracking-widest">
                Soloko Cafe
              </h1>
              <small className="text-center uppercase text-xs mt-2 font-thin tracking-wider">
                locaclicious <br /> drinks and food
              </small>
            </div>
            <ul className="grid px-5 w-full gap-5">
              {links.map((item, index) => (
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border-b-2 border-orange-500 text-orange-500 transition duration-300 ease-in-out font-bold text-center"
                        : " text-black transition duration-300 ease-in-out"
                    } h-fit py-2 px-2 w-full whitespace-nowrap`
                  }
                  key={index}
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="px-4 py-3">
            <button
              onClick={() => logout()}
              className="bg-red-600 font-bold text-white w-full px-3 py-2 rounded hover:bg-red-700 transition duration-150 ease-in-out"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 w-full px-2 md:px-5 pt-6 bg-orange-600 h-screen overflow-hidden">
        <div className="bg-white w-full h-full rounded-t-lg ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
