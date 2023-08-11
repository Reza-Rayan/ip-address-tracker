import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map({ location }) {
  const { lat, lng } = location;
  const initialPosition = [lat, lng];
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    setPosition([lat, lng]);
  }, [lat, lng]);


  return (
    <MapContainer
      className='z-10 '
      center={position} zoom={13} style={{ width: '100%', height: '700px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position}>
        <Popup>A marker at ({position[0]}, {position[1]})</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;