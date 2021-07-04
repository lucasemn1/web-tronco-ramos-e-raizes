// Leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "leaflet";

// Styles
import styles from "./style.module.scss";

// Interfaces
import MapMarker from "../../interfaces/MapMarker";

interface Props {
  markers: MapMarker[];
}

export default function Map(props: Props) {
  const customIcon = icon({
    iconUrl: "/assets/icons/location_on.svg",
    iconSize: [54, 54],
  });

  function renderMarkers() {
    return props.markers.map((marker) => (
      <Marker
        key={`${marker.lat}-${marker.long}`}
        position={[marker.lat, marker.long]}
        icon={customIcon}
      >
        <Popup className={styles.popup} closeButton={false}>
          <h1>{marker.title}</h1>

          <div className={styles.buttonsArea}>
            <button>
              <img src="/assets/icons/map.svg" alt="Abrir no GPS." />
            </button>
            <button>
              <img src="/assets/icons/arrow_forward.svg" alt="Abrir." />
            </button>
          </div>
        </Popup>
      </Marker>
    ));
  }

  return (
    <MapContainer
      center={[-5.8255766, -36.5751698]}
      zoom={8}
      scrollWheelZoom={false}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />

      {renderMarkers()}
    </MapContainer>
  );
}
