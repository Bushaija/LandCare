import React from 'react'
import { callus  } from '../assets';

const CallUs = () => {
  return (
    <a 
      href="tel:0788426462"
      className='fixed right-4 top-[85%] opacity-70 hover:opacity-100 focus:opacity-100 duration-200 z-50'
    >
        <img src={callus} alt="+2507-880-426-462" />
    </a>
  )
}

export default CallUs