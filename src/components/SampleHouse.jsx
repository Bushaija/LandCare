import React from 'react'
import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { Link } from 'react-router-dom';


function SampleHouse({ houseObject }) {

    return (
        <section key={houseObject.index} className='w-[320px] bg-[#ffffff] p-2 border-2 shadow-2xl'>
           {/* image */}
           <div className='relative'>
                <img 
                    src={houseObject.mainPhoto} 
                    alt=""
                    className='w-[320px] h-[250px] object-cover sm:w-[100%]'
                 />
                 <div className='absolute top-4 left-4 py-[3px] px-[20px] font-semibold bg-gray-100 text-sm'>{houseObject.homeStatus === "FOR_SALE" ? 'Buy' : 'Rent' }</div>
           </div>
           {/* address */}
           <div className='py-2'>
                <h2 className='text-black font-semibold'>{houseObject.address.cell}</h2>
                <p className='text-gray-600 text-sm'>{houseObject.address.province}, {houseObject.address.streetAddress}</p>
           </div>
           {/* features */}
           <div className='flex justify-between pr-2 mb-2'>
            {/* row2 */}
            <div className='flex gap-36 justify-center items-center'>
                
                <div className='flex items-center gap-[2px]'>
                    <IoLocationSharp className='text-gray-500' />
                    <span className='text-gray-600'>{houseObject.address.city}</span>
                </div>
                <div className='flex items-center gap-[2px]'>
                        <span className='text-gray-800 text-lg font-bold'>{houseObject.price}M</span>
                        <span className='text-gray-800 font-bold'>{houseObject.currency}</span>
                </div>
            </div>
           </div>
           {/* bold part */}
           
        </section>
      )
}

export default SampleHouse;