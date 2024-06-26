import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";
import { withPromotedLabel } from "./RestaurantCard";

const Body = (props) => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

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

  if (listOfRestaurant.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      
      <div className="flex justify-center items-center">
        <div className="search-bar">
          <input
            className=" m-4 px-2 py-1 bg-cyan-100"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
          />
          <button
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
        <div className="  m-3 px-2 py-1 bg-green-400 rounded-md">
          <button
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
