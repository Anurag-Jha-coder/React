import { logo_url } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={logo_url} alt=" my logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginbtn == "Login"
                ? setloginbtn("Logout")
                : setloginbtn("Login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
 