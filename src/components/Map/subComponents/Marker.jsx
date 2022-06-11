import React from "react";

export default function Marker({ onClick, children }) {
  const _onClick = (e) => {
    onClick(e);
  };
  return (
    <>
      <div className="marker-number">{children}</div>
      <div className="map-marker" onClick={_onClick}></div>
    </>
  );
}
