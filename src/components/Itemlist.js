import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/reduxSlice/cartSlice";


const Itemlist=({data})=>{
    const dispatch=useDispatch();
    const handleAddItem=()=>{
            dispatch(addItem(data));
    }
    return <div className="text-left flex justify-between py-3">
            
            <div className=" border-b-2 p-3 w-10/12">
                <span>{data?.card?.info?.isVeg?"🟩":"🟥"}</span>
                <span className="p-5">{data?.card?.info?.name}  - ₹ {data?.card?.info?.price/100}</span>
                <p className="text-xs">{data?.card?.info?.description}</p>
                <button className="p-2 my-4 bg-green-200 shadow-lg rounded-lg" onClick={handleAddItem}>Add +</button>
                
            </div>
            <div className="w-2/12  h-auto p-2">
                <img className=" rounded-md" src={CDN_URL + data?.card?.info?.imageId}/>
                
            </div>

        </div>
    
}
export default Itemlist;