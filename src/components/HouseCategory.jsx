import React from 'react'

const HouseCategory = ({ categories, filterHouseStatus }) => {
  return (
    <div className='flex gap-4'>
        {
            categories.map((category, index) => (
                <button
                key={index}
                onClick={() => filterHouseStatus(category)}
                className='block font-poppins text-[1.05rem] tracking-widest font-semibold w-[70px] px-[8px] py-[2px] border-[2px] border-orange-600 text-gray-200 text-center rounded-sm opacity-[100%] sm:opacity-[70%] hover:opacity-[100%] focus:opacity-[100%] duration-150'
                >
                {
                    category === 'all' ? 'All' : category === 'FOR_SALE' ? "Buy" : "Rent"
                }
                </button>
            ))
        }
    </div>
  )
}

export default HouseCategory 