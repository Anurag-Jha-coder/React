import { logo_url } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} =  useContext(userContext);
  
  const cartItem = useSelector((store) => store.cart.items);
  


  return (
    <div className="flex justify-between shadow-md items-center border-solid border-b-2 bg-green-100">
      <div className="">
        <img className = "w-44"src={logo_url} alt=" my logo" />
      </div>

      <div className="nav-item">
        <ul className="flex ">
          <li className="m-4 p-2">Online status:{onlineStatus == true?"✅":"🔴"} </li>
          
          <li className="m-4 p-2"><Link to={"./grocery"}>Grocery</Link></li>
          <li className="m-4 p-2"><Link to={"./"}>Home</Link></li>
          <li className="m-4 p-2"><Link to={"./about"}>About Us </Link></li>
          <li className="m-4 p-2"><Link to={"./contact"}>Contact Us</Link></li>
          <li className="m-4 p-2"><Link to={"./cart"}>Cart ({cartItem.length})</Link></li>
          
          
          <li className="m-4 p-2">{loggedInUser}</li>
          <button
            className="m-4 p-2"
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
 