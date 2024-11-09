import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;


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
        src={IMG_CDN_URL+cloudinaryImageId
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
