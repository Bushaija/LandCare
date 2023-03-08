import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNav = () => {
    setIsVisible(!isVisible);
  }

  return (
    <header className="primary-header flex boverflow-hidden">
      <div>
      <h1 className='logo shadow-xl text-gray-200 text-[1.15rem] font-bold border-l-[3px] border-orange-400 p-[5px] rounded-full'>Land<span className='text-ora'>Care</span></h1>
      </div>
      <button 
        className="mobile-nav-toggle" 
        aria-controls="primary-navigation" 
        onClick={toggleNav}
      >
        {isVisible ? (
          <img src={close} alt="Close menu" />
        ) : (
          <img src={menu} alt="Open menu" />
        )}
        <span className="sr-only" aria-expanded={isVisible}>Menu</span>
      </button>
      <nav>
        <ul id="primary-navigation" data-visible={isVisible} className="primary-navigation underline-indicators flex backdrop-brightness-50 backdrop-blur-lg shadow-xl">
        {
          navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
              <Link 
                to={`/${nav.id}`} 
                className={`${index === 0 ? " border-b-2 border-[#ff7600] text-white" : "border-0"} py-2 hover:text-orange-500 focus:text-orange-500 duration-150 border-orange-600`}>
                {nav.title}
              </Link>
            </li>
          ))
        }
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
