import React, {useState} from 'react';
import { Link } from "react-router-dom";

const Search = () => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState(0);

  return (
    <article className='flex flex-col sm:flex-row sm:justify-start sm:items-end gap-2 sm:gap-4 rounded-lg p-2 sm:p-4 max-w-[310px] xs:flex-row xs:items-end xs:max-w-[520px] sm:max-w-[510px] backdrop-brightness-50 backdrop-blur-lg z-20 shadow-2xl search-container'>
      {/* location */}
      <div className=" flex flex-col max-w-[200px] sm:max-w-[250px] location-container w-full">
        <span className='text-gray-200 text-normal sm:text-lg font-normal mb-[4px] '>Location</span>
        <input 
          type="text" 
          placeholder='Enter location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className=" p-[4px] sm:p-[8px] rounded-md  bg-gray-200"
        />
      </div>

      {/* price range */}
      <div className="flex flex-col max-w-[200px] sm:max-w-[250px]  price-container">
        <span className='text-gray-200 text-normal sm:text-lg font-normal mb-[4px]'>Price Range</span>
        <select 
          name="Price" 
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-[4px] sm:p-[8px] rounded-md"
        >
          <option value="<100k">{`<100k`}</option>
          <option value="100k-200k">100k-200k</option>
          <option value="200k-500k">200k-500k</option>
          <option value=">500k">{`>500k`}</option>
        </select>
      </div>

      {/* search btn */}
      <button className="btn-search text-center rounded-md cursor-pointer opacity-[80%] hover:opacity-[100%] focus:opacity-[100%] duration-100 text-white text-md bg-orange-600 w-[84px] p-[2px] mt-[5px] sm:mt-0 sm:p-[7px]">
        <Link to="/buy">Search</Link>
      </button>

    </article>
  )
}

export default Search