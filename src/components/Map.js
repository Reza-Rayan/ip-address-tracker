
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
      mapRef.current.setView(position, 20);
    }
  }, [position]);


  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [40, 60], // e.g., [32, 32]
    // Other icon options
  });

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
      </Marker>
    </MapContainer >
  );
}

export default Map;