import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx';


// import { IoIosBed } from "react-icons/io";
// import { IoLocationSharp } from "react-icons/io5";
// import { FaBath, FaSlideshare } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { Footer, Navigation, NotFound, PropertyMap } from '.';


import { houses } from '../constants';


const HouseDetails = () => {
    const { id } = useParams(); // gets the ID parameter from the URL
    const house = houses.find(house => house.id === id);

    if (!house) {
        return <NotFound />;
    }

    //image sliding.....
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? house.images.length - 1: currentIndex -1;
      setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === house.images.length - 1 ;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    } 
    

    return (
      <>
      <Navigation />

        <section className='flex flex-col justify-center items-center'>
          <main className='flex flex-col md:justify-between md:flex-row md:shadow-2xl md:w-full xs:items-center gap-5'>

          <article className='shadow-xl sm:shadow-sm p-2'>
            <div className='max-w-[500px] relative group md:pt-8'>
              {/* image */}
              <img src={`${house.images[currentIndex]}`} className="w-full h-full rounded-xl bg-center bg-cover duration-500" alt="property image" />
              

              {/* left arrow */}
              <div className='block absolute top-[50%] -left-2 -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-orange-700 cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide} size={30} fill={"white"}/>
              </div>

              {/* right arrow */}
              <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-2 text-2xl rounded-full p-2 bg-orange-700 cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide} size={30} fill={"white"}/>
              </div>

              {/* pagination */}
            <div className='flex top-4 justify-center py-2'>
              {
                house.images.map((image, index) => (
                  <div key={index} onClick={() => goToSlide(index)} className={`text-${index ? "white" : "orange-600"} text-2xl cursor-pointer`}>
                    <RxDotFilled />
                  </div>
                ))
              }
            </div>
          
            </div>

          </article>

          {/* card information */}
          <article className='max-w-[400px] xs:min-w-[420px] shadow-xl sm:shadow-sm'>
            <h2 className='text-[1.5rem] font-semibold text-gradient mb-4 text-center'>Overview</h2>
            
            <div className='flex flex-col gap-2 p-2'>

                {/* price */}
                <div className='flex justify-between items-center'>
                  <span className='text-white font-semibold text-[1.25rem]'>{house.price.title}:</span>
                  <p className="text-gray-300 font-semibold">
                    {house.price.amount}{house.price.short} {house.currency}
                  </p>
                </div>

                {/* Beds*/}
                <div className='flex justify-between items-center'>
                  <span className='text-white font-semibold text-[1.25rem]'>{house.bedrooms.title}:</span>
                  <p className='text-gray-300 font-semibold'>
                    {house.bedrooms.number}
                  </p>
                </div>

                {/* Bathrooms */}
                <div className='flex justify-between items-center'>
                  <span className='text-white font-semibold text-[1.25rem]'>{house.bathrooms.title}:</span>
                  <p className='text-gray-300 font-semibold'>
                    {house.bathrooms.number}
                  </p>
                </div>

                {/* ParkingSpot */}
                <div className='flex justify-between items-center'>
                  <span className='text-white font-semibold text-[1.25rem]'>{house.parkingSpot.title}:</span>
                  <p className='text-gray-300 font-semibold'>
                    {`${house.parkingSpot.status ? "Yes" : " No"}`}
                  </p>
                </div>

                {/* SquareFeet */}
                <div className='flex justify-between items-center'>
                  <span className='text-white font-semibold text-[1.25rem]'>{house.houseSize.title}:</span>
                  <p className='text-gray-300 font-semibold'>
                    {house.houseSize.size} 
                    {house.houseSize.unit}
                  </p>
                </div>

                {/* Lot/land size */}
                <div className='flex justify-between items-center'>
                  <span className='text-white font-semibold text-[1.25rem]'>{house.lotSize.title}:</span>
                  <p className='text-gray-300 font-semibold'>
                    {house.lotSize.size} 
                    {house.lotSize.unit}
                  </p>
                </div>

                {/* Land use */}
                <div className='flex justify-between gap-8 items-start'>
                  <span className='text-white font-semibold text-[1.25rem]'>{house.landUse.title}:</span>
                  <p className='text-gray-300 font-semibold'>
                    {house.landUse.options[0]}, 
                  </p>
                </div>

                {/* Location */}
                <div className='flex justify-between gap-8 items-start'>
                  <span className='text-white font-semibold text-[1.25rem]'>{house.address.title}:</span>
                  <p className='text-gray-300 font-semibold'>
                    {house.address.streetAddress}, 
                    {house.address.cell}, 
                    <br /> {house.address.province},
                    {house.address.city}
                  </p>
                </div>

            </div>
            </article>
          </main>

          <article className='flex flex-col justify-center items-center mt-8 shadow-xl w-full p-8'>
            {/* house map */}
            <h2 className='text-[1.5rem] font-semibold text-gradient mb-4 text-center'>Mapping</h2>
            <div>
              <PropertyMap />
            </div>
          </article>
        </section>

      <Footer />
      </>
    );
};

export default HouseDetails;
