import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauranrMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams;
  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",") - costForTwoMessage}</p>
      <h3>Menu</h3>
      {/* <ul>

        <li>Biryani</li>
        <li>Burggers</li>
        <li>Diet Coke</li>
      </ul> */}
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {".Rs "}
            {item.card.info.price / 100 || item.card.info.default.price / 100}  </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
