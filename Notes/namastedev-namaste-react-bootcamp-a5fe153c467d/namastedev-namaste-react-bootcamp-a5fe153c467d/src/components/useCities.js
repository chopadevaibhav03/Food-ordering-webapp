import { useEffect, useState } from "react";
import stateMap from "../utils/state-city.json";

const useCities = (state) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      //const data = await fetch(api.url.com/getCities?state=${state});

      const json = stateMap[state];

      setCities(json);
    }
  }, [state]);

  return cities;
};

export default useCities;
