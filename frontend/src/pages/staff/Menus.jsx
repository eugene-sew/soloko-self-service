import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCategoryBasedMenu } from "../../util/api";
import Meal from "./Meal";

const Menus = () => {
  const loaderData = useLoaderData();
  const menu = loaderData?.data.attributes.meals?.data;
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   setMenu(meals);
  // }, [menu]);
  // console.log();
  return (
    <div className="flex flex-row gap-x-5 gap-y-5 justify-between flex-wrap px-5 py-5 h-[80vh] w-full bg-orange-500 bg-opacity-30 overflow-y-scroll hide rounded-t-md shadow relative">
      {menu.map((item) => (
        <Meal meal={item} key={item.id} />
      ))}
    </div>
  );
};

export default Menus;

export function mealsLoader({ params }) {
  const category = params.category;
  return getCategoryBasedMenu(category);
}
