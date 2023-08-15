
import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// ...


function Map({ location }) {
  const { lat, lng } = location;
  const position = [lat, lng];

  const mapRef = useRef(null);

  useEffect(() => {
    //check view
    if (mapRef.current) {
      mapRef.current.setView(position, 12);
    }
  }, [position]);

  const customIcon = L.icon({
    iconUrl: '/path/to/icon.png',
    iconSize: [50, 50], // specify the size of the icon
    // Other icon options like iconAnchor, popupAnchor, etc.
  })

  return (
    <MapContainer
      ref={mapRef}
      className='z-10 '
      center={position}
      zoom={14} style={{ width: '100%', height: '720px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />

      <Marker position={position} icon={customIcon}>
        <Popup>You are here: ({position[0]}, {position[1]})</Popup>
      </Marker>
    </MapContainer >
  );
}

export default Map;