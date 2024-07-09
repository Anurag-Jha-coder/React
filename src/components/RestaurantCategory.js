import { retryable } from "async";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItemList, setshowIndex }) => {
  
  const onclickHandler = ()=>{
    setshowIndex();
  }
  return (
    <div>
      {/* header */}

    

       <div className="w-1/2 py-4 text-center shadow-lg m-auto cursor-pointer" onClick={onclickHandler}>
        <div className=" flex justify-between items-center  ">
          <span className="font-bold m-2">
            {data.title}({data.itemCards.length})
          </span>
          <span className="m-2 ">🔽</span>
        </div>

        {/* body */}
       
          
        { showItemList && data.itemCards.map((item) => {
          return <ItemList Key={item.card.info.id} menuInfo ={item?.card.info} />;
        })}
      </div>
    </div>
  );
};
 
export default RestaurantCategory;
