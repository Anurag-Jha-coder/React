import { useState, useEffect } from "react";
import { RES_INFO_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
 
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(RES_INFO_API + resId);

    const json = await data.json();
    setresInfo(json?.data);
  };
  
  return resInfo;
};

export default useRestaurantMenu;
