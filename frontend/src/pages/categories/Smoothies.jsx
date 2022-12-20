import { useLoaderData } from "react-router-dom";
import Meals from "../../components/Meals";
import { getCategoryBasedMeals } from "../../util/api";

const Smoothies = () => {
  const loaderData = useLoaderData();
  const meals = loaderData.data.attributes.meals.data;
  return (
    <div className={`w-full h-full grid`}>
      <Meals meals={meals} />
    </div>
  );
};

export default Smoothies;
export function smootieLoader() {
  return getCategoryBasedMeals(15);
}
