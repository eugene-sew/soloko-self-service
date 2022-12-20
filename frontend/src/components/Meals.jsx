import FeaturedMeal from "./FeaturedMeal";
import Meal from "./Meal";

const Meals = ({ meals }) => {
  const featured = meals.filter((meal) => {
    return meal.attributes.featured === true;
  });
  console.log(featured);
  return (
    <div className={`w-full h-full grid`}>
      <FeaturedMeal
        image={`${import.meta.env.VITE_APP_HOST}${
          featured[0]?.attributes.image.data.attributes?.url
        }`}
        time={"5"}
      />

      <div className={`grid gap-4 pb-10 h-full `}>
        {meals &&
          meals.map((item, index) => (
            <Meal
              image={`${import.meta.env.VITE_APP_HOST}${
                item?.attributes.image.data?.attributes.url
              }`}
              name={item?.attributes.name}
              additional={item?.attributes.additional}
              price={item?.attributes.price.toFixed(2)}
              time={5}
              key={item?.id}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Meals;
