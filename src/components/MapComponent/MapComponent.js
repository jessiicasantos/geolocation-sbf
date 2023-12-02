import { memo, useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: -22.9930264,
  lng: -43.4455854,
};

function MyComponent() {
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      let response = await axios.get(
        "https://api.gruposbf.com.br/geolocation-api/stores"
      );

      let dataResponse = await response.data;

      console.log(dataResponse);

      setData(dataResponse);
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD5RSAL7ai4UITr-iwZS-Y1WA8sjrvcRzM",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    function callback(map) {
      data.forEach(
        (d) =>
          new window.google.maps.Marker({
            position: {
              lat: parseFloat(d.latitude),
              lng: parseFloat(d.longitude),
            },
            map,
            title: d.name,
          })
      );

      setMap(map);
    },
    [data]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <h1>Loading...</h1>
  );
}

export default memo(MyComponent);
