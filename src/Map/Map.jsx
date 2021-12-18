import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents
} from "react-leaflet";
import "./style.css";
import "leaflet/dist/leaflet.css";
import RiverInfo from "./riverInfo/RiverInfo";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const MyMap = () => {
  const map = useMapEvents({
    click: () => {
      map.locate();
    },
    locationfound: location => {
      console.log("location found:", location);
    }
  });
  return null;
};

const Map = () => {
  const position = [39.3689, -107.0328];

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={false}
        className="map"
      >
        <MyMap />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <RiverInfo />
      </MapContainer>
    </div>
  );
};

export default Map;
