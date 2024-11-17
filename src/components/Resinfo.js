import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//import { RESURL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restrocategory from "./Restrocategory";

const Resinfo=()=>{

    const [showItemIndex,setShowItemIndex]=useState(null);


    const {resid}=useParams();

    const resData= useRestaurantMenu(resid);
 
   
    if (resData===null) return <Shimmer/>;
    console.log(resData);
    const restro=resData.cards[2]?.card?.card?.info;
    const categories= resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
          return (
        
        <div className="mt-[140px] text-center ">
            <h1 className="font-bold my-6 text-2xl">{restro.name}</h1>
            <p className="font-bold text-lg">{restro.cuisines.join(", ") } - {restro.costForTwoMessage}</p>
           
            <ul>
                {categories.map((item, index)=>
                <li ><Restrocategory key={item?.card?.card?.title}
                 data={item?.card?.card} showItems={index==showItemIndex?true:false}
                  setShowItemIndex={()=>{setShowItemIndex(index)
                  
                  }
                  }/></li>)}
                
            </ul>
        </div>
    )
}

export default Resinfo; 