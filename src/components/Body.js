import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(restaurantList);

  useEffect(() =>{
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   
    const json = await data.json();
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => {
              return res.info.avgRating > 4;
            });

            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant .map((restaurant) => {
          return <RestaurantCard key = {restaurant?.info?.id} resdata={restaurant} />;
        })}
      </div>
    </div>
  );
}

export default Body;
