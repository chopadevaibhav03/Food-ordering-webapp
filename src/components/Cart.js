import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/reduxSlice/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch();
    const handleClearItem=()=>{
        dispatch(clearCart());
        //console.log("clear");
    }
    
    return <div className="mt-[150px] text-center w-6/12 m-auto">
        <h2 className="">Cart</h2>
        <button className="bg-black text-white rounded-lg m-2 p-2" onClick={handleClearItem}>Clear Cart</button>
        {cartItems.length==0 && <h1 className="mt-10">Cart is empty!! Try to add items</h1>}
        {cartItems.map((item)=><Itemlist data={item}/>)}
        
    </div>
}

export default Cart;