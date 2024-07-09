import { img_url } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resdata } = props;
  const { name, avgRating, deliveryTime, cuisines, cloudinaryImageId } =
    resdata?.info;

  return (
    <div className=" m-5  w-60 h-72 text-ellipsis overflow-hidden rounded-xl shadow-md transition-transform hover:scale-90">
      <img 

        className="w-full h-52 object-cover"
        src={img_url + cloudinaryImageId}
        alt="Restorant Image"
      />

      <div className="res-info">
        <h2>{name}</h2>
        <span >{avgRating + " ★ "}</span>
        <span>{deliveryTime + " mins"}</span>
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
  return (props) =>{
    return (
      <div>
        <label className = " rounded-lg border-2 absolute text-white bg-fuchsia-700">Open</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
}; 

export default RestaurantCard;
