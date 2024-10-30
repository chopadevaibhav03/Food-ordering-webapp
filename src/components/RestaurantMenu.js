import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauranrMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // console.log();

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines = [],
    costForTwoMessage = "",
  } = resInfo?.cards[0]?.card?.card?.card?.info || {};

  const {itemCards} =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      console.log(resInfo?.cards);
      console.log(resInfo);

      
  

  const categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.cards?.["card"]?.["card"]?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2"
    );

  

  return (
    <div className="text-center">
      <h1 className="font-bold my-10  text 2xl:"> {name}</h1>
      <p className="font-bold text-lg"> 
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/*catagoreis accordian */}
      {/* {categories.map((category) => {
        <RestaurantCategory data={category?.card?.card} />
      })} */}

    </div>
  );
};

export default RestaurantMenu;
