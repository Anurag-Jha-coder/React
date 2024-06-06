import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter((res) => {
              return res.data.avgRating > 4;
            });

            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant .map((restaurant) => {
          return <RestaurantCard resdata={restaurant} />;
        })}
      </div>
    </div>
  );
}

export default Body;
