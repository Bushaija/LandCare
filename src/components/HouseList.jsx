import React,{useEffect, useState} from 'react'
import {SingleHouse, AllPropertiesMap, HouseCategory} from '.'


function HouseList({houses}) {
   const allCategories = ['all', ...new Set(houses.map(house => house.homeStatus.statusCode))]; //all, FOR_SALE, and FOR_RENT
   const [houseProperties, sethouseProperties ] = useState(houses);//house objects.
   const [categories, setCategories] = useState(allCategories);
  
  
  const filterHouseStatus = (homeStatus) => {
    //array of all houses
    if(homeStatus === "all") {
      sethouseProperties(houses);
      return;
    }
    
    //array of specific house status [FOR_RENT or FOR_SALE]
    const targetHomeStatus = houses.filter(house => house.homeStatus.statusCode === homeStatus);
    sethouseProperties(targetHomeStatus);
  }

  return (
    <main className='xs:px-8 w-full'>
      <section>
        {/* Filters */}
        <div className='flex justify-center xs:justify-start items-center xs:items-start'>
          <div className='max-w-[320px] backdrop-brightness-50 backdrop-blur-lg px-[20px] py-[22px] flex justify-center items-center shadow-2xl'>
            <HouseCategory categories={categories} filterHouseStatus={filterHouseStatus} />
          </div>
        </div>

        {/* map & cards */}
        <main className='flex flex-col mt-4 xs:mt-12'>
    
          {/* cards */}
          <div className='place-items-center cards'>
            {
              houseProperties.map((houseProperty, index) => (
                <SingleHouse key={index} houseObject={houseProperty} />
              ))
            }
          </div>

           {/* Map */}
           <div className='hidden lg:block lg:ml-8 lg:h-full'>
           <AllPropertiesMap />
          </div>

        </main>
      </section>
    </main>
  )
}

export default HouseList