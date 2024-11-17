import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import Itemlist from "./Itemlist";

const Restrocategory = ({ data, setShowItemIndex, showItems }) => {
  const [show, setShow] = useState(showItems);
  const Handleclick = () => {
    setShowItemIndex();
    if (showItems) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <div className="bg-gray-50 shadow-lg mx-auto my-4 p-4 w-8/12  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={Handleclick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {show
          ? data?.itemCards.map((item) => (
              <Itemlist key={item?.card?.info?.id} data={item} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Restrocategory;
