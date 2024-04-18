import { memo } from "react";
import { GoogleMap } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
};

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
    </>
  );
};

export default memo(MapStores);
