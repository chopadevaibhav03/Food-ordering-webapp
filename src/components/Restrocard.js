import { CDN_URL } from "../utils/constants";

export const withOfferLabel=(Restrocard)=>{
        return(Props)=>{
                const {resData}=Props;
                return(
                        <div>
                                <label className="absolute bg-white text-black rounded-md shadow-lg hover:bg-black hover:text-white">{resData?.info?.aggregatedDiscountInfoV3?.header}</label>
                                <Restrocard {...Props}/>
                        </div>
                )

        }
}


const Restrocard =(Props)=>{
        
    const {resData}=Props;
    console.log(resData);
    if(resData){
    
    
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo}=resData?.info;
    
    return (
            <div className="w-[250px] bg-slate-200 flex-wrap m-4 p-4 justify-center rounded-lg hover:bg-slate-300 shadow-lg">
                    <img className="w-[200px] rounded-lg" src={CDN_URL + cloudinaryImageId} />
                    <h3 className="my-1 font-bold">{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRating}⭐</h4>
                    <h4>{costForTwo}</h4>
            </div>
    )
}
}

export default Restrocard;