import { useRef } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import food from "../../assets/food.png";
import { deleteMeal } from "../../util/api";

const Meal = ({ meal }) => {
  const hiddenFileInputRef = useRef();
  const featuredRef = useRef();
  const reader = new FileReader();
  const formData = new FormData();
  const pic = `${import.meta.env.VITE_APP_HOST}${
    meal?.attributes.image.data?.attributes.url
  }`;
  // const pic = food;
  const [foodPic, setFoodPic] = useState(pic);
  const [fileToSub, setFileToSub] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(meal.attributes.name);
  const [additional, setAdditional] = useState(meal.attributes?.additional);
  const [price, setPrice] = useState(meal.attributes.price.toFixed(2));

  const handleClick = () => {
    hiddenFileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    setFileToSub(event.target.files[0]);

    try {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        formData.append("image", e.target.result);
        setFoodPic(e.target.result);
        console.log("done");
      };
    } catch (error) {
      setFoodPic(pic);
    }
  };

  const updateHandler = () => {};

  const deleteHandler = async () => {
    if (confirm("are you sure you want to remove this meal")) {
      const response = await deleteMeal(meal.id);
      if (response.data?.data) {
        toast.success("meal has been deleted from menu");
        // console.log("deleted");
      }
    }
  };
  return (
    <div className="w-60 h-fit overflow-hidden flex rounded-lg">
      <div className="w-full  relative bg-white items-start shadow-lg rounded-lg">
        <img
          src={`${import.meta.env.VITE_APP_HOST}${
            meal?.attributes.image.data?.attributes.url
          }`}
          className="object-cover h-32 w-full"
        />
        <div className="px-2 mb-2">
          <h1 className="text-gray-700">{meal.attributes.name}</h1>
          <h2 className="price font-bold">GHC {meal.attributes.price}</h2>
        </div>
      </div>
      <div>
        <button className="bg-sky-600 p-2" onClick={() => setShowModal(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="white"
            className="w-5 h-5 "
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
          </svg>
        </button>
        <button className="bg-rose-600 p-2" onClick={() => deleteHandler()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            aria-hidden="true"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showModal && (
        <div className="absolute h-full w-full top-0 left-0 bottom-0 bg-black z-50 bg-opacity-20 flex justify-center items-center transition duration-300 ease-in-out">
          <div className="w-96 bg-white flex flex-col justify-center items-center relative p-10 gap-5 rounded-md">
            <button
              className="font-bold text-lg absolute z-50 right-0 text-red-600 top-0 px-2 mt-3 mr-5"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <div className="relative grid place-self-center ">
              <img src={foodPic} alt="food image" className="w-44 h-32" />
              <label
                htmlFor="profilePicUpload"
                className="absolute -bottom-2 -right-2 cursor-pointer ring-2 ring-white rounded-full border-0 bg-orange-600 text-white p-2  hover:bg-orange-500"
                onClick={() => handleClick()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </label>
              <input
                id="profilePicUpload"
                type="file"
                accept=".png, .jpg, .jpeg"
                className="hidden"
                ref={hiddenFileInputRef}
                onChange={handleFileUpload}
              />
            </div>
            <div className="w-full py-3 flex flex-col gap-5">
              <input
                type="text"
                placeholder="name"
                className="w-full py-2 px-2 outline-none border-b-2 border-collapse border-b-gray-400 focus:border-b-orange-500 transition duration-300 ease-in-out"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                placeholder="additional info"
                className="w-full py-2 px-2 outline-none border-2 border-collapse rounded border-b-gray-400 focus:border-orange-500 transition duration-300 ease-in-out resize-none"
                value={additional}
                onChange={(e) => setAdditional(e.target.value)}
              />

              <input
                type="number"
                placeholder="price (GHC)"
                className="w-full py-2 px-2 outline-none border-b-2 border-collapse border-b-gray-400 focus:border-b-orange-500 transition duration-300 ease-in-out"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <div>
                <input
                  type="checkbox"
                  className="outline-orange-500 border-2 border-orange-500"
                  ref={featuredRef}
                />{" "}
                Featured Meal
              </div>
            </div>
            <button className="bg-orange-500 text-lg font-bold text-white px-3 py-2 rounded shadow w-full">
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meal;
