

import React,{useState, useEffect} from 'react';
import styles from '../style';
import { houses } from '../constants';
import { Navigation, Footer, HouseList} from '.';


const Buy = () => {
  return (
    <section>
      {/* navigation bar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navigation />
        </div>
      </div>

        <div>
        <HouseList houses={houses}/>
        </div>

      {/* footer */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </section>
  )
}

export default Buy