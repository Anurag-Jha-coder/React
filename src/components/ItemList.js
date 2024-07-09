import { useDispatch } from "react-redux";
import { img_url } from "../utils/constants";
import {addItem} from "../utils/cartSlice"
 




const ItemList = ({ menuInfo }) => {

  const dispatch = useDispatch();
  const handleClick = (menuInfo) =>{
      dispatch(addItem(menuInfo));
  }


 
  return (
    <div >
      <div className="flex justify-between items-center border-b-2 shadow-lg shadow-gray-500 p-5">
        <div className=" text-left mx-4 w-3/4">
          <div className="font-bold">{menuInfo?.name}</div>
          <div className="font-bold text-sm">
            ₹
            {menuInfo.price
              ? menuInfo?.price / 100
              : menuInfo?.defaultPrice / 100}
          </div>
          <div className=" my-2 text-xs">
            ★{menuInfo?.ratings?.aggregatedRating?.rating}(
            {menuInfo?.ratings?.aggregatedRating?.ratingCountV2})
          </div>
          <div className="text-xs">{menuInfo.description}</div>
        </div>
        <div className="w-1/4 m-4 mx">
        <button  className = "absolute  bg-white text-green-700 font-bold shadow-lg rounded-sm"  onClick={() => handleClick(menuInfo)}>ADD +</button> 
        <img  className = "rounded-lg"src={img_url + menuInfo.imageId} alt="" />
        
        </div>
      </div>
    </div>
  );
};

export default ItemList;
