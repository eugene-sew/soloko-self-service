import { useLoaderData } from "react-router-dom";
import Meals from "../../components/Meals";
import { getCategoryBasedMeals } from "../../util/api";

const HotBev = () => {
  const loaderData = useLoaderData();
  const meals = loaderData.data.attributes.meals.data;
  return (
    <div className={`w-full h-full grid`}>
      <Meals meals={meals} />
    </div>
  );
};

export default HotBev;
export function hotLoader() {
  return getCategoryBasedMeals(2);
}
