import FeaturedMeal from "../../components/FeaturedMeal";
import oats from "../../assets/oats.jpg";
import { Meal } from "../../components";
import { useLayout } from "../../context/layout";
import { getCategoryBasedMeals } from "../../util/api";
import { useLoaderData } from "react-router-dom";
import Meals from "../../components/Meals";

const Breakfast = () => {
  const { layout, setLayout } = useLayout();
  const loaderData = useLoaderData();
  const meals = loaderData.data.attributes.meals.data;

  return (
    <div className={`w-full h-full grid`}>
      <Meals meals={meals} />
    </div>
  );
};

export default Breakfast;

export function breakfastLoader() {
  return getCategoryBasedMeals(3);
}
