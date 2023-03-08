import React from 'react';
import { services } from '../constants';
import styles from '../style';

const ServicesComponent = () => {
  return (
    <section>
      <div className='flex flex-col gap-4'>
        {/* Our services content */}
        <div className='flex flex-col sm:flex-row sm:gap-4 justify-between items-center'>
          <h1 className={`${styles.heading2} mt-2`}>
          <span className='text-gradient'>Streamlined Solutions</span> <br className='sm:block hidden' />for Your Property Needs
          </h1>
          <div className="w-full mt-2">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Unlock endless possibilities with our wide range of expert services. From finding your dream home to securing the best deal, we've got you covered.
            </p>
          </div>
        </div>

        {/* Our services card */}
        <article className='grid gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 mt-8'>
          {
            services.map((service, index) => (
              <div key={index} className='flex flex-col justify-center items-center shadow-2xl py-8 bg-[#272727]'>
                {/* image */}
                <div className='mb-4'>
                  <img src={service.img} className="w-[200px]" alt="" />
                </div>
                {/* content */}
                <div>
                  <h2 className='text-[1.35rem] font-semibold text-[#cfcfcf]'>{service.title}</h2>
                  <p className='text-[1rem] text-gray-200 opacity-[.6]'>{service.description}</p>
                  <div className='w-full border-[1px] my-8 rounded-full border-orange-600 opacity-[70%] xs:hidden' />
                </div>
              </div>
            ))
          }
        </article>
      </div>
    </section>
  )
}

export default ServicesComponent