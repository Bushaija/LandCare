import React from 'react';
import styles from '../style';
import { Navigation, Footer, ServicesComponent } from '.';

const Services = () => {
  return (
    <>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navigation />
          <ServicesComponent />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default Services