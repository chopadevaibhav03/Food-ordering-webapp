import { useEffect, useState } from "react"
import { MENU_API } from "./constants";


const useRestaurantMenu=(resId)=>{

    const [resData,setResData]=useState(null);

    // console.log("Fetching menu data for restaurant ID:", resId);


    useEffect(() => {
        fetchData();
      }, []);
      
      useEffect(() => {
        // console.log(resData);  // Log resData here to check its structure
      }, [resData]);
      

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json);  
        setResData(json.data);
      };
    return resData;


};
export default useRestaurantMenu;