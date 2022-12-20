import { NavLink, Outlet, useLoaderData } from "react-router-dom";

import { getOrders } from "../../util/api";

const Orders = () => {
  const loaderData = useLoaderData();
  const orders = loaderData.data;
  return (
    <div
      className={`w-full h-full grid grid-cols-10 md:grid-cols-12 gap-5 py-5 `}
    >
      <div
        className="col-span-4 px-2 bg-gray-100 w-full rounded-lg shadow h-[100%]
      "
      >
        <div className="grid gap-3 w-full overflow-hidden ">
          <h1 className="text-2xl font-bold text-gray-600">Orders</h1>
          <input
            type="text"
            className="w-full rounded-lg shadow bg-white px-2 py-2 outline-none h-10"
            placeholder="search order..."
          />
        </div>

        <div className="w-full max-h-[550px] hide overflow-hidden overflow-y-scroll pb-32 mt-5">
          <ul className="w-full grid pb-20 gap-5">
            {orders.map((item) => (
              <NavLink
                to={`${item.id}`}
                key={item.id}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-orange-200 transition duration-150 ease-in-out "
                      : " bg-white transition duration-150 ease-in-out"
                  }  text-gray-800 rounded-lg shadow px-4 py-2 grid cursor-pointer md:hover:bg-gray-300`
                }
              >
                <h1 className="">
                  Order id:{" "}
                  <span className="font-semibold">
                    {" "}
                    {item.attributes.Order}
                  </span>
                </h1>
                <h2>GHC {item.attributes.total_price}</h2>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      {/* order info */}
      <div className="col-span-6 md:col-span-8 w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default Orders;

export function ordersLoader() {
  return getOrders();
}
