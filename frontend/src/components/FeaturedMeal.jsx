import clock from "../assets/icons/clock.svg";
import plus from "../assets/icons/plus-circle.svg";

const FeaturedMeal = ({ image, time }) => {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-2xl mod opacity-80">Featured Meal</h1>
      <div className="w-full h-44 rounded-lg shadow-lg overflow-hidden relative mt-2">
        <img
          src={image}
          alt="featured meal"
          className="h-full object-cover w-full"
        />
        <h1 className="bg-orange-400 absolute top-0 right-0 text-lg flex items-center text-white gap-2 px-3 py-2 rounded-full shadow-lg mt-2 justify-center">
          {time ? time + " mins" : "35 mins"}
          <span>
            <img src={clock} alt="timer" className="w-5 h-5" />
          </span>
        </h1>

        {/* <button class="text-center h-16 buy px-3 py-2 font-bold text-white absolute bottom-0 left-0 w-full flex items-center justify-center transition ease-in-out">
          Add to Basket
          <img src={plus} class="w-6 h-6" />
        </button> */}
      </div>
    </div>
  );
};

export default FeaturedMeal;
