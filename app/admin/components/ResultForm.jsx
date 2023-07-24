"use client"
import React, { useState } from 'react';

const ResultForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    user:"",
    sci: '',
    sst: '',
    eng: '',
    hindi: '',
    maths: '',
  });

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to insert/update data here using formData
    console.log(formData);
  };

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Insert/Update Subject Data</h2>
        <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="sci" className="block text-gray-700 font-bold mb-2">
            Student
          </label>
          <input
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter User"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sci" className="block text-gray-700 font-bold mb-2">
            Science (sci)
          </label>
          <input
            type="text"
            id="sci"
            name="sci"
            value={formData.sci}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Science data"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sst" className="block text-gray-700 font-bold mb-2">
            Social Studies (sst)
          </label>
          <input
            type="text"
            id="sst"
            name="sst"
            value={formData.sst}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Social Studies data"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eng" className="block text-gray-700 font-bold mb-2">
            English (eng)
          </label>
          <input
            type="text"
            id="eng"
            name="eng"
            value={formData.eng}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter English data"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hindi" className="block text-gray-700 font-bold mb-2">
            Hindi
          </label>
          <input
            type="text"
            id="hindi"
            name="hindi"
            value={formData.hindi}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Hindi data"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="maths" className="block text-gray-700 font-bold mb-2">
            Maths
          </label>
          <input
            type="text"
            id="maths"
            name="maths"
            value={formData.maths}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Maths data"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          {/* Add a clear button or cancel button if needed */}
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default ResultForm;
