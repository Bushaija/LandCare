import React from 'react';
import { nextArrow, prevArrow } from '../assets';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ArrowButton } from '.'

import { SampleHouse } from '.'
import { gif1, gif2 } from '../assets';
// import { villas } from '../constants';
import { houses, villas } from '../constants';

const VillaSlider = () => {
    const params = {
        ContainerEl: 'section',
        WrapperEl: 'section',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        renderPrevButton: () => <img src={prevArrow} alt="" className='swiper-button-prev' /> ,
        renderNextButton: () => <CustomButton className="swiper-button-next">Next</CustomButton>,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
        },
        
      }
      return (
        <article className='shadow-xl bg-[#292929] p-2 xs:p-8 my-12'>
            <div className='flex justify-between items-center my-4 px-2 xs:px-4 py-0'>
                <h2 className='text-white font-semibold xs:font-bold sm:text-[1.5rem]'>Best Properties</h2>
                <ArrowButton text="see more" path="/buy" />
            </div>
            <Swiper 
                {...params}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation={{
                    nextEl: '.nextArrow',
                    prevEl: '.prevArrow',
                    disabledClass: "swiper-button-disabled"
                }}
                pagination={{ clickable: true }}
                className="overflow-hidden max-w-[80em] flex justify-center items-center bg-dark rounded-lg"
            >
            {
                    villas.map((villa, index) => (
                        <SwiperSlide key={index} className="py-8">
                            <SampleHouse houseObject={villa}/>
                        </SwiperSlide> 
                    ))
                }
                <div className="swiper-pagination"></div>
            </Swiper>
        </article>
      )
}

export default VillaSlider