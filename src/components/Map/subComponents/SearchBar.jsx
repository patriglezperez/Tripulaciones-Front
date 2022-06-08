import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import {getUrl,getAddress} from '../../../utils/mapbox/geocoder'

export default function SearchBar({ map=null,setMarker,initialPosition }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    
  }, []);

  const handleOnChangeSearch = async (e) => {
    setSearch(e.target.value);
    const data = await getUrl(e.target.value);
    setResults(data.data.features);
    
  };

    const dragEnd = async (e)=>{
      const data = await getAddress(e.target._lngLat);
      setSearch(data.data.features[0].place_name)
      setMarker(data.data.features[0]);
      
      
    }

    const changeMap = (element) => {
      setMarker(element);
      if (!map.current) return; // wait for map to initialize
      map.current.flyTo({ center: element.center,zoom:15 });
      new mapboxgl.Marker({
        draggable:true
      })
     .setLngLat(element.center).on('dragend',dragEnd)
     .addTo(map.current);
      
    };
    

  return (
    <div className="search-box">
      <input
        type="text"
        onChange={handleOnChangeSearch}
        value={search}
        placeholder="Buscar..."
      />
      {results.length > 0 ? <div className="result-list">
        {results.map((element) => (
          <div
            className="result"
            key={element.id}
            onClick={() => {
              changeMap(element);
              setResults([]);
            }}
          >
            {element.place_name_es}
          </div>
        ))}
      </div> : ""}
      
    </div>
  );
}
