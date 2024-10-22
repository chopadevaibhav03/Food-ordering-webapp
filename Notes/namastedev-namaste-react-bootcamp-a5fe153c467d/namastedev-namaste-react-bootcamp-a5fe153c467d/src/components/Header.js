import { title } from "../utils/constants.js";
import { Link } from "react-router-dom";
import UserContext from "./UserContext.js";
import { useSelector } from "react-redux";

const HeadingComponent = () => {
  const cartItems = useSelector((store) => store.cart.value);

  const count = cartItems.length;

  console.log(cartItems);

  return (
    <div
      id="title"
      className="flex px-10 py-4 justify-between bg-purple-50"
      tabIndex="1"
    >
      <Link to="/">
        <img
          className="h-12"
          src="https://uploads-ssl.webflow.com/6080464681216414c7d1d60b/6080468fecb6a579c58f35f4_hungerhub%20logo.png"
        />
      </Link>
      <div className="flex space-x-8 cursor-pointer">
        <Link to="/search">
          <span>Search</span>
        </Link>
        <Link to="/about-us">
          <span>AboutUs</span>
        </Link>
        <Link to="/search">
          <span>Contact Us</span>
        </Link>
        <Link to="/cart">
          <span>Cart - {count} items</span>
        </Link>
      </div>
    </div>
  );
};

export default HeadingComponent;
