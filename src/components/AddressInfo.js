import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddressInfo = ({ ipAddress }) => {
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    if (ipAddress) {
      axios
        .get(`https://geo.ipify.org/api/v2/country?apiKey=at_MBVm41xOSstE6zRui3oPA9LVhXrHa&ipAddress=${ipAddress}`)
        .then(response => {
          setAddressData(response.data);
        })
        .catch(error => {
          console.error('Error fetching address data:', error);
        });
    }
  }, [ipAddress]);

  return (
    <div className='container mx-auto z-50'>
      {addressData && (
        <div className=' bg-white grid relative mb-[-80px] mt-6
        grid-cols-1 md:grid-cols-2 lg:grid-cols-4
         p-5 appShadow rounded-[15px] flex-shrink-0 gap-3 text-[#2C2C2C]'>
          <div className='font-medium
          text-center md:text-start
          md:border-r-2'>
            <h3 className='text-[12px] font-medium text-[#2C2C2C]
             tracking-[1.75px] uppercase'>IP Address:</h3>
            <p className='text-[26px] mt-2'>{addressData.ip}</p>
          </div>

          <div className='font-medium
          text-center md:text-start
          px-2  lg:border-r-2'>
            <h3 className='text-[12px] font-medium text-[#2C2C2C]
             tracking-[1.75px] uppercase'>Location:</h3>
            <p className='text-[26px] mt-2'>
              {`${addressData.location.region}, ${addressData.location.country},
            ${addressData.as.asn}`}
            </p>
          </div>

          <div className='font-medium
          text-center md:text-start
          px-2  md:border-r-2'>
            <h3 className='text-[12px] font-medium text-[#2C2C2C]
             tracking-[1.75px] uppercase'>Timezone:</h3>
            <p className='text-[26px] mt-2'> UTC {addressData.location.timezone}</p>
          </div>

          <div className='font-medium
          text-center md:text-start
          px-2'>
            <h3 className='text-[12px] font-medium text-[#2C2C2C]
             tracking-[1.75px] uppercase'>ISP:</h3>
            <p className='text-[26px] mt-2'> {addressData.isp}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressInfo;