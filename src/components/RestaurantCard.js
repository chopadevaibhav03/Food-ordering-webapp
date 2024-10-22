import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  //   const {
  //     cloudinaryImageId,
  //     name,
  //     avgRating,
  //     cuisines,
  //     costForTwo,
  //     sla,
  //   } = resData?.info;

  //   // Determine if the cloudinaryImageId is a full path or just an ID
  //   const imageUrl = cloudinaryImageId.includes("RX_THUMBNAIL")
      // ? `https://res.cloudinary.com/swiggy/image/upload/${cloudinaryImageId}`
  //     : `${IMG_CDN_URL}${cloudinaryImageId}`;

  //   return (
  //     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
  //       <img
  //         className="res-logo"
  //         alt="res-logo"
  //         src={imageUrl}
  //       />
  //       <h3>{name}</h3>
  //       <h4>{cuisines.join(", ")}</h4>
  //       <h4>{avgRating} stars</h4>
  //       <h4>{costForTwo}</h4>
  //       <h4>{sla?.slaString} minutes</h4>
  //     </div>
  //   );
  // };

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  // Updated image URL with placeholder fallback
  const imageUrl = cloudinaryImageId
    ? `${IMG_CDN_URL}${cloudinaryImageId}`
    : "https://via.placeholder.com/150"; // Placeholder image if ID is missing

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg  bg-gray-100  hover:bg-gray-200" 
    style={{ }}>
      <img className="res-logo rounded-lg"
       alt="res-logo" src={"https://b.zmtcdn.com/data/pictures/7/20906977/11fdf5b39bd375787aeeba4f660df798_featured_v2.jpg"} />
      
      <h3 className="font-bold p-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
