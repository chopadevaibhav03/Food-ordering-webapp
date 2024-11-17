import { useEffect, useState } from "react"
import { RESURL } from "./constants";


const useRestaurantMenu=(resid)=>{

    const [resData,setResData]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(RESURL+resid);
        const json=await data.json();
        setResData(json.data);
    };
    return resData;


};
export default useRestaurantMenu;