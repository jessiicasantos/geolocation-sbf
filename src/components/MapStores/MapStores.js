import { memo } from "react";
import { GoogleMap } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const InfoWindow = () => (
  <div id="infowindow-content">
    <span id="place-name" className="title"></span>
    <br />
    <span id="place-address"></span>
  </div>
);

const MapStores = ({ onLoad, onUnmount, mapCenter }) => {
  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
        }}
      />
      <InfoWindow />
    </>
  );
};

export default memo(MapStores);
