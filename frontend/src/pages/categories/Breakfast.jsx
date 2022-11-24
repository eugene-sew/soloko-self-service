import FeaturedMeal from "../../components/FeaturedMeal";
import oats from "../../assets/oats.jpg";
import omelet from "../../assets/omelet.jpg";
import tombrown from "../../assets/tombrown.jpg";
import fruit from "../../assets/fruit.jpg";
import cocoa from "../../assets/cocoa.jpeg";
import { Meal } from "../../components";
import { useLayout } from "../../context/layout";

const Breakfast = () => {
  const { layout, setLayout } = useLayout();
  const gridy = layout ? "grid-cols-2" : " ";
  return (
    <div className="w-full h-full grid">
      {/* meal of the day */}
      <FeaturedMeal image={oats} time={"5"} />
      {/* meals */}
      <div className="flex justify-end gap-5 pr-3 -mt-10 py-0">
        {layout ? (
          <button onClick={() => setLayout(!layout)} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="518"
              // height="150"
              className="w-7 h-5"
              viewBox="0 0 518 150"
            >
              <g transform="translate(412 27)">
                <rect
                  width="518"
                  height="57"
                  rx="20"
                  transform="translate(-412 -27)"
                  fill="#EA580B"
                />
                <rect
                  width="315"
                  height="57"
                  rx="20"
                  transform="translate(-412 66)"
                  fill="#EA580B"
                />
              </g>
            </svg>
          </button>
        ) : (
          <button onClick={() => setLayout(!layout)} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="604"
              // height="473"
              className="w-7 h-5"
              viewBox="0 0 604 473"
            >
              <g transform="translate(412 27)">
                <rect
                  width="282"
                  height="207"
                  rx="20"
                  transform="translate(-412 -27)"
                  fill="#EA580B"
                />
                <rect
                  width="282"
                  height="207"
                  rx="20"
                  transform="translate(-90 3)"
                  fill="#EA580B"
                />
                <rect
                  width="282"
                  height="207"
                  rx="20"
                  transform="translate(-90 239)"
                  fill="#EA580B"
                />
                <rect
                  width="282"
                  height="207"
                  rx="20"
                  transform="translate(-412 210)"
                  fill="#EA580B"
                />
              </g>
            </svg>
          </button>
        )}
      </div>
      <div className={`grid gap-5 -mt-5 ${gridy}`}>
        <Meal
          image={fruit}
          name={"Fruit Salad"}
          additional={"seasonal fruits (medium)"}
          price={"10.00"}
          time={5}
        />
        <Meal
          image={omelet}
          name={"Omelette"}
          price={"10.00"}
          time={10}
          additional={"(eggs, tomato, onion) & Bread"}
        />
        <Meal
          image={oats}
          name={"Oatmeal Porridge"}
          additional={"& omelette(eggs, tomato, onion) & bread"}
          price={"15.00"}
          time={5}
        />
        <Meal
          image={tombrown}
          name={"Tombrown porridge"}
          additional={"& omelette(eggs, tomato, onion) & bread"}
          price={"15.00"}
          time={8}
        />

        <Meal
          image={cocoa}
          name={"Homemade Cocoa"}
          price={"5.00"}
          time={5}
          additional={" & Bread"}
        />
      </div>
    </div>
  );
};

export default Breakfast;
