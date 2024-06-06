import { logo_url } from "../utils/constants";
const Header = () => (
    <div className="header">
      <div className="logo">
        <img
          src={logo_url}
          alt=" my logo"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <div className="search-container">
              <input className="search" placeholder="Search here" type="text" />
              <button className="search-button">Search</button>
            </div>
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );

  export default Header;