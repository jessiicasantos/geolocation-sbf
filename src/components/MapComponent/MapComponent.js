import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: -22.9930264,
  lng: -43.4455854,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD5RSAL7ai4UITr-iwZS-Y1WA8sjrvcRzM",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!

    new window.google.maps.Marker({
      position: center,
      map,
      title: "Hello World!",
    });

    new window.google.maps.Marker({
      position: {
        lat: -22.98303,
        lng: -43.45552,
      },
      map,
      title: "Hello World!",
    });

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
}

export default React.memo(MyComponent);
