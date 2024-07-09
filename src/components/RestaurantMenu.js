import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RES_INFO_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = (props) => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setshowIndex] = useState() ;

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    areaName,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cards) =>
        cards?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="   res-info-container ">
      <h2 className=" text-xl font-bold mx-[373px] mt-5 p-2 ">{name}</h2>
      <div
        className="border-2 m-auto my-3 p-4 h-44 w-1/2 
    rounded-2xl shadow-xl shadow-gray-200"
      >
        <div className="box1">
          <h4 className="text-sm font-bold">
            ★{avgRatingString}({totalRatingsString}) . {costForTwoMessage}
          </h4>
          <h5 className="text-xs text-red-600">{cuisines.join(", ")}</h5>
          <div className=" text-xs border-l-4 border-gray-500 px-4 my-5 outlet">
            <p className=" text-xs my-3">
              <b>Outlet </b>
              {areaName}
            </p>
            <p>20 - 30 mins</p>
          </div>
          <div className="bottom">
            <p className="text-xs border-t-2 py-2">
              Order above 149 for discounted delivery fee
            </p>
          </div>
        </div>
      </div>

      {/* RES Category*/}
      <div>
        {categories.map((category, index) => {
          return <RestaurantCategory key = {category?.card?.card.title}
          data={category?.card?.card} 
          showItemList = {index == showIndex } 
          setshowIndex = { () =>(setshowIndex(index))}  
          />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
