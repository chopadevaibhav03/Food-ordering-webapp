import { useState, useEffect } from "react";
import RestaurantCard, { withPramotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPramoted = withPramotedLabel(RestaurantCard);

  // Whenever state  variables updates, react triggers a reconciliation cycle (re-render the component)
  console.log("Body rerendered", listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4762835&lng=73.7874983&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1> You are ofline! check your internate connection </h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 hover:bg-green-300 hover:text-black rounded-lg "
            onClick={() => {
              // Filter the restaurants and update the UI.
              const filteredRestaurants = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-1 bg-gray-200 m-4 rounded-lg"
            onClick={() => {
              const filterList = listOfRestaurant.filter((res) => {
                return res.info.avgRating > 4;
              });
              setFilteredRestaurant(filterList);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPramoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
