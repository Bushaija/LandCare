import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../style';
import { gif6, gif7 } from '../assets';
import { Footer, Navigation } from '.';


const Sell = () => {
  return(
  <section>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
    <Navigation />
    <div className={`${styles.marginY}`}>
      <div className={`w-full flex justify-between items-center md:flex-row flex-col relative`}>
        <h1 className={styles.heading2}>
         <span className='text-orange-600'>Effortlessly Sell Your</span> <br className='sm:block hidden' /> Property with Us
        </h1>
        <div className="w-full md:mt-0 mt-6 mb-12">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Partner with us for a seamless selling experience. Our experts handle everything from property evaluation to negotiations to close the deal. Trust us to get the best value for your property
            </p>
        </div>
      </div>

    <div className='flex sm:justify-start justify-center gap-2'>
      <div className={`w-full ${styles.marginY} flex flex-col gap-16 justify-center items-center sm:flex-row sm:mb-[0] z-[1]`}>
        {/* container */}
        <article className='backdrop-brightness-50 rounded-lg backdrop-blur-lg shadow-2xl p-8'>
          <div 
          className='max-w-xs border-b-4 border-orange-500 rounded-xl relative'
          >
              <img src={gif6} alt="" className='rounded-sm object-fill' />
              <div className='absolute top-[45%] left-[38%] py-2 px-4 bg-black text-lg font-semibold text-ora rounded-lg z-20 hover:translate-y-2 duration-300'>
                <Link to={'/sell/houseCustomerInfo'}>
                  House
                </Link>
              </div>
              <div className={`absolute inset-0 bg-orange-600 opacity-[15%] z-10`} />
          </div>
        </article>

        <article className='backdrop-brightness-50 rounded-lg backdrop-blur-lg shadow-2xl p-8'>
          <div className='max-w-xs border-b-4 border-orange-500 rounded-xl relative'>
              <img src={gif7} alt="land background image" className='rounded-sm object-fill' />
              <div className='absolute top-[45%] left-[33%] py-2 px-4 bg-black text-lg font-semibold text-ora rounded-lg z-20 hover:translate-y-2 duration-300'>
                <Link to={'/sell/landCustomerInfo'}>
                  Land/Plot
                </Link>
              </div>
              <div className={`absolute inset-0 bg-orange-600 opacity-[15%] z-10`} />
          </div>
        </article>

        </div>
    </div>
    </div>
    <Footer />
    </div>
  </div>
  </section>
  )
}

export default Sell