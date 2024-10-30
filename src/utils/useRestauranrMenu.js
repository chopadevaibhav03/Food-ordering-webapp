import { useEffect, useState } from "react"
import { MENU_API } from "./constants";


const useRestaurantMenu=(resid)=>{

    const [resData,setResData]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(MENU_API+resid);
        const json=await data.json();
        setResData(json.data);
    };
    return resData;


};
export default useRestaurantMenu;