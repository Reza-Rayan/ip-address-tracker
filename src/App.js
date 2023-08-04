import React, { useState } from 'react';
import './App.css';
import Map from './components/Map'

import FormContainer from './components/FormContainer';

function App() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <>
      <section className='mainBg text-white z-30'>
        <div className='flex justify-center p-5 flex-col'>
          <h1 className='text-[32px] text-center font-medium mb-3'>IP Address Tracker</h1>
          <FormContainer onLocationChange={handleLocationChange} />
        </div>
      </section>
      <Map location={location} />
    </>
  );
}

export default App;