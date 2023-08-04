import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ location }) => {
  const position = [location.lat, location.lng];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '600px', width: '100%',zIndex:5}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {location.lat !== 0 && (
        <Marker position={position}>
          <Popup>{`IP Address: ${location.ip}`}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;