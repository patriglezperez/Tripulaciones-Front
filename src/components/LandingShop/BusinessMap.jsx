import mapboxgl from "mapbox-gl";
import React, { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Marker from "../Map/subComponents/Marker";
mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN;

export default function BusinessMap({ current }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(current.center[0]);
  const [lat, setLat] = useState(current.center[1]);
  const [zoom, setZoom] = useState(1);
  const [mapType, setMapType] = useState(current.mapType);
  const coordinates = [lat, lng];
  const [businessPosition, setBusinessPosition] = useState(coordinates);

  // initialize map only once
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lat, lng],
      zoom: false,
    });

    //In case of having to display points on the map
    if (mapType === "features") {
      if (current.center?.length > 0) {
        const bounds = [];
        let indexMarker = 1;

        // Create a React ref
        const ref = React.createRef();
        // Create a new DOM node and save it to the React ref
        ref.current = document.createElement("div");
        const root = createRoot(ref.current);
        root.render(<Marker onClick={markerClicked}>{indexMarker}</Marker>);

        // Create a Mapbox Marker at our new DOM node
        new mapboxgl.Marker(ref.current)
          .setLngLat(current.center)
          .addTo(map.current);

        bounds.push(current.center);

        var boundsF = bounds.reduce(function (boundsIn, coord) {
          return boundsIn.extend(coord);
        }, new mapboxgl.LngLatBounds(bounds[0], bounds[0]));
        map.current.fitBounds(boundsF, {
          padding: 20,
        });
      }
    }
  });

  //Update map state
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(5));
      setLat(map.current.getCenter().lat.toFixed(5));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  const markerClicked = (e) => {
    console.log(e.target);
  };

  return (
    <div ref={mapContainer} className="map-container">
      {businessPosition !== null ? <div map={map}></div> : null}
    </div>
  );
}
