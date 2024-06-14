import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RES_INFO_API } from "../utils/constants";

const RestaurantMenu = (props) => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_INFO_API + resId);

    const json = await data.json();
    console.log(json);
    console.log(json?.data);
    setresInfo(json?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log(resInfo);
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
  console.log(itemCards);

  return (
    <div className="res-info-container">
      <h2 className="res-name">{name}</h2>
      <div className="res-info">
        <div className="box1">
          <h4>
            {avgRatingString}({totalRatingsString}) . {costForTwoMessage}
          </h4>
          <h5>{cuisines.join(", ")}</h5>
          <div className="outlet">
            <p className="margin">
              <b>Outlet    </b> {areaName}
            </p>
            <p>20 - 30 mins</p>
          </div>
          <div className="bottom">
            <p>Order above 149 for discounted delivery fee</p>
          </div>
        </div>
      </div>

      <div className="offers"></div>

      <div className="res-menu">
        <div className="top-picks"></div>
        <div className="rec-heading">
          <h2>Recomended</h2>
        </div>
        <div className="recommended">
          {itemCards.map((item) => {
            return (
              <div className="rec-list">
                <ul>
                  <li>
                    {item?.card?.info?.name} - {item?.card?.info?.price / 100}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
