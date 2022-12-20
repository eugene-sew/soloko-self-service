import { useLoaderData } from "react-router-dom";
import { Meal } from "../../components";
import FeaturedMeal from "../../components/FeaturedMeal";
import Meals from "../../components/Meals";
import { getCategoryBasedMeals } from "../../util/api";

const LocalDrink = () => {
  const loaderData = useLoaderData();
  const meals = loaderData.data.attributes.meals.data;
  return (
    <div className={`w-full h-full grid`}>
      <Meals meals={meals} />
    </div>
  );
};

export default LocalDrink;

export function localDrinkLoader() {
  return getCategoryBasedMeals(12);
}
