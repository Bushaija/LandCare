
import React, { useState, useEffect } from "react";
import styles from "../style";
import { img2 } from '../assets';
import Search from "./Search";

const images = [img2];

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex(prevState => (prevState + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="mt-4 mx-auto z-0 header_content relative mb-20 sm:mb-0 bg-dark p-[2px] shadow-2xl flex justify-center items-center">
      <div className="w-full duration-500 rounded-lg shadow-lg -z-10">
        <img
          src={`${images[slideIndex]}`}
          alt="hero_images"
          className="w-full md:h-[500px]"
        />
        <div className={`absolute inset-0 bg-orange-600 opacity-[15%]`} />
      </div>

      {/* content */}
      <div
        className="block rounded-sm shadow-lg
        absolute top-[20px] sm:top-[20px] left-[50px] sm:left-[20px] md:max-w-[500px]
        backdrop-brightness-50
        p-4
        "
      >
        <h2 className=" text-lg sm:text-3xl font-semibold sm:font-bold  text-white text-left">
        Expertly Guiding You to Your <br />
          <span className="text-gradient"> Ideal Home & Plot</span>
        </h2>
        <p className={`${styles.paragraph} hidden md:flex max-w-[px] text-left mt-5 `}>
              Find your dream home or plot with ease. Our dedicated real estate experts use their knowledge and expertise to guide you every step of the way.
              </p>
    </div>


      {/* search box */}
      <div className="absolute top-[60%] left-[70px] sm:top-[60%] sm:left-[20px] bg-[#292929] shadow-2xl">
        <Search />
      </div>
    </section>
  )
}

export default Hero