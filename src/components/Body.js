import Restrocard, { withOfferLabel, offer } from "./Restrocard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    //console.log(jsondata);

    setListOfRestaurant(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (listOfRestaurant.length == 0) {
    return <Shimmer />;
  }
  const RestrocardOffer = withOfferLabel(Restrocard);

  return (
    <div className="relative">
      <div className=" fixed top-[110px] bg-white">
        <input
          type="text"
          className="border-2 border-black my-1 mx-3"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-green-200 p-2 rounded-lg"
          onClick={() => {
            const filterRestaurant = listOfRestaurant.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurant(filterRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center absolute top-[150px] z-[-1]">
        {listOfRestaurant.map((restaurant) => (
          <Link to={"/restaurantmenu/" + restaurant.info.id}>
            {restaurant?.info?.aggregatedDiscountInfoV3?.header === "ITEMS" ? (
              <Restrocard key={restaurant.info.name} resData={restaurant} />
            ) : (
              <RestrocardOffer resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
