import { useLoaderData } from "react-router-dom";

import Meals from "../../components/Meals";
import { getCategoryBasedMeals } from "../../util/api";

const Fish = () => {
  const loaderData = useLoaderData();
  const meals = loaderData.data.attributes.meals.data;
  console.log(meals);
  return (
    <div className={`w-full h-full grid`}>
      <Meals meals={meals} />
    </div>
  );
};

export default Fish;
export function fishLoader() {
  return getCategoryBasedMeals(7);
}
