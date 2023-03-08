import React from 'react';
import styles from '../style';
import { quotes } from '../assets';

const Feedback = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col p-4 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className='w-[32px] h-[24px] object-contain' />
      <p className={`${styles.paragraph}font-poppins font-normal text-[1.25rem] leading-[32px] text-dimWhite my-10`}>{content}</p>
      
      <div className='flex flex-row'>
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-[#eeecec]'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback