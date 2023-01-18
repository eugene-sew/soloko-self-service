import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useAuth } from "../../context/auth";

const OrderPage = () => {
  const { oid } = useParams();
  const { token } = useAuth();
  // const loaderData = getOrder(oid, token);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_APP_ORDER
    }${oid}/?populate[0]=attributes&populate[1]=order_items&populate[2]=order_items.meal`;
    const getOrder = async () => {
      await axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setInfo(res.data.data))
        .catch((err) => console.error(err));
    };

    getOrder();
  }, [oid]);

  const date = new Date(info?.attributes?.createdAt);

  const day = date.toDateString();
  const time = date.toLocaleTimeString();

  const confirmPay = async () => {
    const url = `${
      import.meta.env.VITE_APP_ORDER
    }${oid}/?populate[0]=attributes&populate[1]=order_items&populate[2]=order_items.meal`;
    await axios.put(
      url,
      {
        data: {
          paid: true,
        },
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  };

  const updateDone = async () => {
    const url = `${
      import.meta.env.VITE_APP_ORDER
    }${oid}/?populate[0]=attributes&populate[1]=order_items&populate[2]=order_items.meal`;
    await axios
      .put(
        url,
        {
          data: {
            preparation_status: "Done",
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setInfo(res.data.data))
      .catch((err) => console.error(err));
  };

  const updateAccepted = async () => {
    const url = `${import.meta.env.VITE_APP_ORDER}${oid}`;
    await axios
      .put(
        url,
        {
          data: {
            preparation_status: "Accepted",
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setInfo(res.data.data))
      .catch((err) => console.error(err));
  };
  return (
    <div className="w-full grid grid-cols-12 gap-2 max-h-screen pb-5">
      <div className="col-span-12 grid grid-cols-12 gap-2 items-center">
        <div className="col-span-12 flex w-full justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-gray-700 ">Order: </h1>
            <h1 className="text-xl  text-gray-700">
              {info?.attributes?.Order}
            </h1>
          </div>
          <div className="text-xs grid">
            <h1>{day}</h1>
            <h1>{time}</h1>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-medium text-black col-span-12">Order Info</h1>

      <div className="grid grid-cols-3 col-span-12 gap-5 ">
        <div className="px-[4px] py-[4px] shadow rounded bg-gray-100 text-black cursor-pointer h-fit whitespace-nowrap text-center w-full">
          Order Type <br />
          <div className="w-full h-[1px] bg-orange-600"></div>
          <span> {info?.attributes?.service_type}</span>
        </div>
        <div
          className={`px-2 py-2 shadow-lg rounded-lg ${
            info?.attributes?.preparation_status
              .toLowerCase()
              .includes("request")
              ? "bg-orange-300 text-white"
              : "bg-gray-100 text-black"
          } px-[4px] py-[4px] shadow rounded cursor-pointer w-full h-fit whitespace-nowrap text-center`}
        >
          Order Status <br />
          <div className="w-full h-[1px] bg-white"></div>
          <span> {info?.attributes?.preparation_status}</span>
        </div>
        <div className="px-[4px] py-[4px] shadow rounded bg-gray-100 text-black cursor-pointer h-fit whitespace-nowrap text-center w-full">
          Payment
          <br />
          <div className="w-full h-[1px] bg-orange-600"></div>
          <span>{info?.attributes?.payment_method}</span>
        </div>
        <div className="px-[4px] py-[4px] shadow rounded bg-gray-100 text-black cursor-pointer w-full h-fit whitespace-nowrap text-center">
          Paid
          <br />
          <div className="w-full h-[1px] bg-orange-600"></div>
          <span> {info?.attributes?.paid ? "Yes" : "Not yet"}</span>
        </div>
        {info?.attributes?.preparation_status
          .toLowerCase()
          .includes("request") ? (
          <button
            className="bg-lime-900 px-2 py-2 rounded shadow text-white w-full"
            onClick={() => updateAccepted()}
          >
            Accept Order
          </button>
        ) : (
          info?.attributes?.preparation_status
            .toLowerCase()
            .includes("accepted") && (
            <button
              className="w-full bg-green-600 px-2 py-2 rounded shadow text-white"
              onClick={() => updateDone()}
            >
              Done
            </button>
          )
        )}
        {!info?.attributes?.paid && (
          <button
            className="bg-blue-600 px-2 py-2 rounded shadow text-white"
            onClick={() => confirmPay()}
          >
            Confirm Payment
          </button>
        )}
      </div>

      <div className="col-span-12 grid gap-5 h-screen pb-32 mt-7">
        <div className="w-full grid grid-cols-12 px-3 py-2 items-center col-span-12 place-items-center">
          <div className="col-span-6 w-full text-center">
            <h1>Item</h1>
          </div>
          <h1 className="col-span-2">Qty</h1>
          <h1 className="col-span-2">Price</h1>
          <h1 className="col-span-2">Sum</h1>
        </div>
        <div className="col-span-12 grid gap-5 max-h-screen overflow-hidden  overflow-y-scroll hide px-5 pb-52">
          {info?.attributes?.order_items.map((item) => (
            <div
              className="w-full bg-gray-100 rounded-lg grid grid-cols-12 px-3 py-2 shadow items-center"
              key={item.id}
            >
              <h1 className="text-xl font-medium text-gray-600 col-span-6">
                {item?.meal.data?.attributes.name}
              </h1>
              <h1 className="col-span-2 text-center">{item.qty}</h1>
              <h1 className="col-span-2 text-center">
                {item?.meal.data?.attributes.price}
              </h1>
              <h1 className="col-span-2 text-center">{item.sub_total}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <></>
  );
};

export default OrderPage;

// use params function later and pass to loader function
// async function getOrder(id, token) {
//   const url = `${
//     import.meta.env.VITE_APP_ORDER
//   }${id}/?populate[0]=attributes&populate[1]=order_items&populate[2]=order_items.meal&populate[3]=order_items.meal.image`;
//   const response = await axios.get(url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   if (response.status != 200) {
//     throw { message: response.error };
//   }

//   return response.data;
// }
