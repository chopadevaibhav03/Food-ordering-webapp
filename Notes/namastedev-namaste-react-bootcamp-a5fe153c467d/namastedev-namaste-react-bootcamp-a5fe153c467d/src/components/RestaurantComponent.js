import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice.js";

const RestaurantComponent = () => {
  const { id } = useParams();

  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  async function fetchRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=30.29844139999999&lng=77.99313599999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  }

  const dispatch = useDispatch();

  const addCartItem = () => {
    dispatch(
      addItem({
        name: "pizza",
      })
    );
  };

  return (
    <>
      <CardComponent restraunt={resInfo} />
      <button className="font-bold m-5 p-5 bg-green-50" onClick={addCartItem}>
        Add Item to Cart
      </button>
    </>
  );
};

export default RestaurantComponent;
