import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map({ location }) {
  const { lat, lng } = location;


  return (
    <MapContainer
      className='z-10 overflow-hidden'
      center={[51.505, -0.09]} zoom={13} style={{ width: '100%', height: '550px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>A marker at (51.5, -0.09)</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;