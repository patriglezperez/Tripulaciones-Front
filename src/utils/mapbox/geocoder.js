import axios from "axios";

export const getUrl = (str) => 
axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${str.replace(
  " ",
  "%20"
)}.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=${
  process.env.REACT_APP_MAP_TOKEN
}`);

export const getAddress = e => axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e.lng},${e.lat}.json?language=es&access_token=${
  process.env.REACT_APP_MAP_TOKEN
}`);
