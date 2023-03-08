import React from 'react';
import styles from '../style';
import { CallToAction, Hero, VillaSlider, ServicesComponent, Navigation, Testimonials, Footer } from '.';

const Home = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className='h-full'>
          <Navigation />
          <Hero />
          <VillaSlider /> 
          <ServicesComponent />
          <Testimonials />
          <CallToAction />
          <Footer />
        </section>
        </div>
      </div>
  )
}

export default Home