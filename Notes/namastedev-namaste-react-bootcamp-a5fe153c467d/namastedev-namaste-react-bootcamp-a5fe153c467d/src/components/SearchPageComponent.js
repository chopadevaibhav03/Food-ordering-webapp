import { useEffect, useState, useContext } from "react";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";

const SearchPageComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filtertedRestaurants, setFilteredRestaurants] = useState([]);
  const [stateName, setStateName] = useState("deafult Vale");

  const { email, setEmail } = useContext(UserContext);

  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    console.log(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <div className="card-container">
      <SearchBar
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
        setStateName2={setStateName}
        stateName={stateName}
      />
      <CardContainer
        stateName={stateName}
        filtertedRestaurants={
          filtertedRestaurants.length ? filtertedRestaurants : listOfRestaurants
        }
      />
    </div>
  );
};

export default SearchPageComponent;
