import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import FormContainer from './components/FormContainer';

function App() {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
    ip: '',
  });

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div className="App">
      <section className='mainBg text-white'>
        <div className='flex justify-center p-5 flex-col'>
          <h1 className='text-[32px] text-center font-medium mb-5'>IP Address Tracker</h1>
          <FormContainer onLocationChange={handleLocationChange} />
        </div>
      </section>
      <Map location={location} />
    </div>
  );
}

export default App;