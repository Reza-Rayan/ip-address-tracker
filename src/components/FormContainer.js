import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AddressInfo from './AddressInfo';

const FormContainer = ({ onLocationChange }) => {
  const initialValues = {
    ipAddress: '',
  };

  const validationSchema = Yup.object({
    ipAddress: Yup.string()
      .required('IP Address is required')
      .matches(
        // Regular expression to match IP address format
        /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/,
        'Invalid IP Address format'
      ),
  });

  const onSubmit = async (values) => {
    try {
      const response = await
        fetch
          (`https://geo.ipify.org/api/v2/country,city?apiKey=at_MBVm41xOSstE6zRui3oPA9LVhXrHa&ipAddress=${values.ipAddress}`);
      const { location } = await response.json();
      onLocationChange({ lat: location.lat, lng: location.lng, ip: location.ip });
      
    } catch (err) {
      console.error('Error fetching address data:', err);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });



  return (
    <>
      <div className='w-[80%] appShadow lg:w-[555px] mx-auto bg-white overflow-hidden rounded-[15px] flex '>
        <form onSubmit={formik.handleSubmit} className="flex w-full">
          <input
            className={`text-[#2C2C2C] text-[12px] md:text-[18px] bg-transparent p-3 w-full ${formik.touched.ipAddress && formik.errors.ipAddress ? 'border-red-500' : ''}`}
            type="text"
            placeholder="Search for any IP address or domain"
            name="ipAddress"
            value={formik.values.ipAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button type="submit" className='bg-black p-3 hover:bg-[#3F3F3F] transition-all'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </form>
      </div>
      {formik.touched.ipAddress && formik.errors.ipAddress ? (
        <p className='text-red-500 text-[18px] font-medium text-center mt-2'>{formik.errors.ipAddress}</p>
      ) : null}
      <AddressInfo ipAddress={formik.values.ipAddress} />
    </>
  );
};

export default FormContainer;