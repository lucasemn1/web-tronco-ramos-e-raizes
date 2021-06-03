// Leaflet
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "leaflet";

import styles from "./style.module.scss";

export default function Map() {
  const position: LatLngExpression = [51.505, -0.09];
  const customIcon = icon({
    iconUrl: "/assets/img/logo.png",
    iconSize: [32, 32],
  });

  return (
    <MapContainer center={position} zoom={17} scrollWheelZoom={false} className={styles.map}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
