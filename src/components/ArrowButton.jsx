import React from 'react';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ArrowButton = ({text, path}) => {
  return (
    <div className="flex items-center z-[1] gap-[5px] xs:gap-[10px] transition-all duration-75 cursor-pointer w-[max-content] text-orange-600 hover:text-white focus:text-white font-[400] xs:font-semibold text-md">
      <Link to={`${path}`}>{text}</Link>
      <BsArrowRight className='text-[20px] xs:text-[28px]'/>
    </div>
  );
}

export default ArrowButton