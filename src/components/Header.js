import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setBtnname] = useState("Login");
  const status = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-yellow-100 fixed top-0 left-0 right-0">
      <div className="items-center">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-3">Online Status:{status ? "✅" : "⛔"}</li>
          <li className="px-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-3">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-3">
            <Link to={"/register"}>Register</Link>
          </li>
          <li className="px-3">
            <Link to={"/cart"}>Cart-({cartItems.length}items)</Link>
          </li>
          <button
            className="bg-gray-200 p-2 items-center rounded-lg"
            onClick={() => {
              const userStatus =
                btnname == "Login" ? setBtnname("Logout") : setBtnname("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
