import React, {useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { backArrow } from '../assets';

import { Navigation, Footer } from '.';


function SellHouse() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Application submitted successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setTimeout(() => {
      navigate('/sell');
    }, 3000);

    useEffect(() => {
      if (location.pathname !== "/sell/customerInfo") {
        navigate("/sell/customerInfo");
      }
    }, [location, navigate]);
  }

  

  return (
  <>
    <Navigation />
    <div className="flex flex-col gap-4 mt-[90px]"> {/* w-full */}
        
          <div className='bg-[#202020] flex items-center justify-center overflow-hidden rounded-lg p-16'>
          <div className="px-8 md:px-16 bg-[#282828] rounded-2xl shadow-xlg max-w-3xl p-8 relative">
            {/* backArrow */}
            <Link to={'/sell/houseCustomerInfo'}>
              <div className='hover:border-r-2 hover:border-b-2 duration-200 border-orange-600 rounded-lg max-w-[90px] -ml-[10px] mb-4 text-lg font-semibold cursor-pointer  flex justify-start text-ora items-center m-4 absolute top-2 left-8'>
                  <img src={backArrow} alt="back arrow" />
                  back
              </div>
            </Link>

          <div className='mt-16'>
            <h2 className="font-bold text-2xl text-[#dedce4]">Sell House</h2>
            <p className="text-xs mt-4 text-[#dedce4]">If you are already a member, easily log in</p>

            <form action="" onSubmit={handleSubmit} className="mt-8 flex flex-col justify-center ">
              {/* house form container */}
              <div className='flex flex-col justify-center items-center gap-4'>
                {/* house form */}
                  <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-16 items-center'>
                    <div className='flex flex-col gap-2 location'>
                      <label className='mt-2  text-[#dedce4]'>Location</label>
                      <input required className="p-2 rounded-xl" type="text" name="location" placeholder="Location" />
                    </div>
                    <div className='flex flex-col gap-2 bedrooms'>
                    <label className='mt-2  text-[#dedce4]'>Number of Bedrooms</label>
                    <input required className="p-2 rounded-xl border" type="number" name="bedrooms" min="0" max="10" placeholder="Bedrooms" />
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-16 items-center'>
                    <div className='flex flex-col gap-2 bathrooms'>
                      <label className='mt-2  text-[#dedce4]'>Number of Bathrooms</label>
                      <input required className="p-2 rounded-xl border" type="number" name="Bathrooms" min="0" max="10" placeholder="Number of Bathrooms" />
                    </div>
                    <div className='flex flex-col gap-2 sqft'>
                    <label className='mt-2  text-[#dedce4]'>Square Feet</label>
                    <input required className="p-2 rounded-xl border" type="text" name="sqft" placeholder="Sqft" />
                    </div>
                  </div>
            </div>

            <div className='flex flex-col items-center sm:items-left sm:-ml-72 mt-4'>
                <div className='flex flex-col gap-2 price'>
                    <label className='mt-2 text-[#dedce4]'>Sell Price</label>
                    <input className="p-2 rounded-xl w-[220px] border" type="text" name="sell_price" placeholder="price" />
                  </div>
                <div className='parkingSpot flex justify-start gap-2 items-left sm:items-center mt-4 -ml-28'>
                  <input type="checkbox" name='parkingSpot' className=''/>
                  <label className='text-[#dedce4]'>Parking spot</label>
                </div>
              </div>

              <button 
                type='submit'
                className="bg-orange mt-[3rem] rounded-xl text-white py-2 text-center hover:scale-105 duration-300"
              >Finish</button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
    </div>
    <Footer />
  </>
  )
}


export default SellHouse;
