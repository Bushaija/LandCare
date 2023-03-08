
import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Statistics = () => {
  return (
    <section className='my-2'>
        <h1 className='text-[2rem] font-bold text-gradient'>What the Numbers Say</h1>
        <p className={`${styles.paragraph} my-4`}>Search and find your dream house at afforadable prices, but with the best quality</p>
        <div className="cards">
            {
                stats.map((stat) => (
                    <div key={stat.id} className={`flex-1 flex-wrap flex-col justify-between items-center shadow-2xl py-8 bg-[#272727]`}>
                        <h4
                        className='font-poppins font-semibold text-[24px] xs:leading[53px] leading-[42px] text-center text-gradient'
                        >{stat.value}+</h4>
                        <p
                        className='font-poppins text-center font-semibold text-[15px] leading-[21px] uppercase ml-3 opacity-[90%] text-gray-100'
                        >{stat.title}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Statistics