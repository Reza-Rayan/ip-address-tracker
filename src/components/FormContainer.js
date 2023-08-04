import React, { useState } from 'react'
import axios from 'axios';
// import component
import AddressInfo from './AddressInfo';

const FormContainer = ({ onLocationChange }) => {
  const [ipAddress, setIpAddress] = useState('');

  const handleSearch = () => {
    if (ipAddress) {
      axios
        .get(`https://geo.ipify.org/api/v1?apiKey=YOUR_API_KEY&ipAddress=${ipAddress}`)
        .then(response => {
          const { location } = response.data;
          // Call the onLocationChange function with the location data
          onLocationChange({ lat: location.lat, lng: location.lng, ip: location.ip });
        })
        .catch(error => {
          console.error('Error fetching address data:', error);
        });
    }
  };
  return (
    <>
      <div className='w-[80%] my-4 appShadow lg:w-[555px] mx-auto bg-white overflow-hidden rounded-[15px] flex '>
        <input
          className='text-[#2C2C2C] text-[12px] md:text-[18px] bg-transparent p-3 w-full'
          type="text"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button onClick={handleSearch} className='bg-black p-3
                hover:bg-[#3F3F3F] transition-all'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </button>


      </div>
      <AddressInfo ipAddress={ipAddress} />
    </>
  )
}

export default FormContainer