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

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg  bg-gray-100  hover:bg-gray-200"
      style={{}}
    >
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId
        }
      />

      <h3 className="font-bold p-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString} minutes</h4>
    </div>
  );
};

/* Higher order Components 
  - Which meas component take a component and return a component
*/

export const withPramotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
