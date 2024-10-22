import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameRact, setBtnNameRact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between  bg-pink-100  shadow-lg sm:bg-yellow-100  lg:bg-green-100 ">
      <div>
        <div className="logo-container">
          <img className="w-56 " src={LOGO_URL} />
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameRact === "Login"
                ? setBtnNameRact("Logout")
                : setBtnNameRact("Login");
            }}
          >
            {btnNameRact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;