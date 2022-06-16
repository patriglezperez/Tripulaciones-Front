import mapboxgl from "mapbox-gl";
import React, { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import SearchBar from "./subComponents/SearchBar";
import Marker from "./subComponents/Marker";
import { getUrl, getAddress } from "../../utils/mapbox/geocoder";
mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN;

export default function Map({
  features,
  changePlace,
  setMarker,
  mapType: type,
}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-3.74);
  const [lat, setLat] = useState(40.37);
  const [zoom, setZoom] = useState(15);
  const [mapType, setMapType] = useState(type);
  // const [userPosition, setUserPosition] = useState(null);

  // const dragEnd = async (e) => {
  //   const data = await getAddress(e.target._lngLat);
  // };
  // //Update map type
  // useEffect(() => {
  //   setMapType(type);
  // }, [type]);

  // //Check navigator permissions
  // useEffect(() => {
  //   if (map.current) return;
  //   if ("geolocation" in navigator) {
  //     getUserPosition();
  //   } else {
  //     setUserPosition({ lat, lng });
  //   }
  // }, [map]);

  // //Get user position
  // const getUserPosition = async () => {
  //   await navigator.geolocation.getCurrentPosition((position) => {
  //     setUserPosition({
  //       lng: position.coords.longitude,
  //       lat: position.coords.latitude,
  //     });
  //   });
  // };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    if (changePlace) {
      const moveMap = (i) => {
        map.current.flyTo({
          center: [features[i].coordinates[0], features[i].coordinates[1]],
          zoom: 15,
        });
      };
      changePlace.current = moveMap;
    }
   

    if (features?.length > 1) {
      
      if (features?.length > 1) {
       
        const bounds = [];
        let indexMarker = 1;
        features.forEach((feature) => {
          // Create a React ref
          const ref = React.createRef();
          // Create a new DOM node and save it to the React ref
          ref.current = document.createElement("div");
          const root = createRoot(ref.current);
          root.render(<Marker onClick={markerClicked}>{indexMarker}</Marker>);
          indexMarker++;

          // Create a Mapbox Marker at our new DOM node
          new mapboxgl.Marker(ref.current)
            .setLngLat(feature.coordinates)
            .addTo(map.current);
          
          bounds.push(feature.coordinates);
        });

        var boundsF = bounds.reduce(function (boundsIn, coord) {
          return boundsIn.extend(coord);
        }, new mapboxgl.LngLatBounds(bounds[0], bounds[0]));
        map.current.fitBounds(boundsF, {
          padding: 20,
        });
      }
    } else {
      console.log("Mark")
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement("div");
      const root = createRoot(ref.current);
      root.render(<Marker onClick={markerClicked}></Marker>);
      var sw = new mapboxgl.LngLat(-3.73, 40.37);
      var ne = new mapboxgl.LngLat(-3.75, 40.36);
      var llb = new mapboxgl.LngLatBounds(sw, ne);  
      new mapboxgl.Marker(ref.current)
            .setLngLat(features[0].coordinates)
            .addTo(map.current);
       
    }
  });
  //Update state
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  const markerClicked = (e) => {
    console.log(e);
  };
  return (
    <div ref={mapContainer} className="map-container">
    </div>
  );
}
