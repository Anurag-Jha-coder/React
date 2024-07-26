import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { useState, useContext } from "react";
import { useEffect } from "react";
import userContext from "../utils/userContext";

const Body = (props) => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();


    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>
        Looks like you are Offline !! Please check your Internet Connection
      </h1>
    );

  if (!listOfRestaurant ||listOfRestaurant.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-center items-center">
        <div className="search-bar">
          <input
            data-testid="input-box"
            className=" m-4 px-2 py-1 border-2 border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
          />
          <button
            data-testid="search"
            className=" m-3 px-2 py-1 bg-green-400 search-button rounded-md"
            onClick={() => {
              const searchedList = listOfRestaurant.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setfilteredRestaurant(searchedList);
            }}
          >
            search
          </button>
        </div>

        <div  className= "mx-4">
          <label className="mx-2" htmlFor="">UserName :</label>
          <input className="border p-1 border-black"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>


        <div className="  m-3 px-2 py-1 bg-green-400 rounded-md">
          <button
            data-testid = "top-Rated-Res"
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) => {
                return res.info.avgRating > 4;
              });

              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container justify-center items-center flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              {restaurant?.info.isOpen ? (
                <PromotedRestaurantCard resdata={restaurant} />
              ) : (
                <RestaurantCard resdata={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
