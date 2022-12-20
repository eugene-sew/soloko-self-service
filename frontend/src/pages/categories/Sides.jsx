import { useLoaderData } from "react-router-dom";
import Meals from "../../components/Meals";
import { getCategoryBasedMeals } from "../../util/api";

const Sides = () => {
  const loaderData = useLoaderData();
  const meals = loaderData.data.attributes.meals.data;
  return (
    <div className={`w-full h-full grid`}>
      <Meals meals={meals} />
    </div>
  );
};

export default Sides;
export function sideLoader() {
  return getCategoryBasedMeals(8);
}
