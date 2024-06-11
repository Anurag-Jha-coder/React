
import { img_url } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resdata } = props;
  console.log(resdata);

  
    const { name , 
      avgRating, 
      deliveryTime, 
      cuisines, 
      cloudinaryImageId 
    } = resdata?.info || resdata?.data;

 

  return (
    <div className="res-card">
      <div className="image-container">
        <img
          className="cart-image"
          src={img_url + cloudinaryImageId}
          alt="Restorant Image"
        />
      </div>
      <div className="cart-content">
        <h3>{name}</h3>
        <h3>{avgRating + " stars"}</h3>
        <h3>{deliveryTime + " mins"}</h3>
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
