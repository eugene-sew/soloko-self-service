import { NavLink, Outlet } from "react-router-dom";
import { categories } from "../../components/data";
const UpdateMenu = () => {
  return (
    <div className={`w-full h-full grid grid-cols-12`}>
      <div className="flex justify-between items-start col-span-12">
        <h1 className="font-bold text-gray-600 text-2xl flex-nowrap w-full mt-4 ml-7">
          Meal manager
        </h1>
        <div className="col-span-12 w-full h-20 flex justify-end items-center gap-8">
          <button className="bg-orange-400 px-3 py-2 rounded shadow-lg text-white font-semibold">
            Add Meal
          </button>
          <button className="bg-sky-500 px-3 py-2 rounded shadow-lg text-white font-semibold">
            Add Category
          </button>
        </div>
      </div>
      {/* categories */}
      <div className="grid grid-cols-12 col-span-12 gap-10">
        <div className="flex flex-col gap-2 col-span-3 w-full ">
          {categories.map((category, index) => (
            <NavLink
              to={category.link}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 bg-orange-500 text-white transition duration-150 ease-in-out font-bold rounded shadow-sm"
                    : " text-black transition duration-150 ease-in-out"
                } h-fit py-2 px-2 w-full md:whitespace-nowrap flex flex-row items-center  bg-opacity-70`
              }
              key={index}
            >
              <h2 className="">{category.name.toLowerCase()}</h2>
            </NavLink>
          ))}
        </div>

        {/* meals */}
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UpdateMenu;
