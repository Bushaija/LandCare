import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Navigation, Footer, PhoneInput} from '.';
import { Link } from 'react-router-dom';
import { backArrow } from '../assets';


const LandCustomerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:""
  });

  const [filled, setFilled] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    switch (true) {
      case !formData.firstName:
        setError("First name is required");
        setFilled(false);
        break;
        
      case !formData.lastName:
        setError("Last name is required");
        setFilled(false);
        break;
      case !formData.email:
        setError("Email is required");
        setFilled(false);
        break;

      default:
        setError("");
        setFilled(true);
        break;
    }

    navigate("/sell/sellLand");
  };
      
  return (
    <>
    <Navigation />
    <div className="flex flex-col gap-4 mt-[90px]">
        <div className='bg-[#202020] flex items-center justify-center overflow-hidden rounded-lg p-16'>
        <div className="px-8  md:px-16 bg-[#282828] rounded-2xl shadow-xlg max-w-3xl p-5 relative">
          {/* backArrow */}
          <Link to={'/sell'}>
              <div className='hover:border-r-2 hover:border-b-2 duration-200 border-orange-600 rounded-lg max-w-[90px] -ml-[10px] mb-4 text-lg font-semibold cursor-pointer  flex justify-start text-ora items-center m-4 absolute top-2 left-8'>
                  <img src={backArrow} alt="back arrow" />
                  back
              </div>
            </Link>

          <div className='mt-16'>
            <h2 className="font-bold text-2xl text-[#dedce4]">Get to Know You!</h2>
              <p className="text-xs mt-4 text-[#dedce4]">we will keep your information safe and secure</p>
              
            <form action="" onSubmit={handleSubmit} className="mt-8 flex flex-col justify-center ">
  
            {error && <div className='text-white font-semibold text-center bg-red-600 rounded-lg  pb-2'>{error}!!</div>}

            {/* house form container */}
            <div className='flex flex-col justify-center items-center gap-4'>
              {/* house form */}
                  <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-16 items-center'>
                    <div className='flex flex-col gap-2 location'>
                      <label className='mt-2  text-[#dedce4]'>First Name</label>
                        <input 
                          type="text" 
                          name="firstName" placeholder="First Name" 
                          onChange={handleChange}
                          className="p-2 rounded-xl" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 bedrooms'>
                    <label className='mt-2  text-[#dedce4]'>Last Name</label>
                      <input
                        type="text" 
                        onChange={handleChange}
                        name="lastName" placeholder="Last Name" 
                        className="p-2 rounded-xl border" 
                      />
                    </div>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-16 items-center'>
                    <div className='flex flex-col gap-2 bathrooms'>
                        <label className='mt-2  text-[#dedce4]'>Phone number</label>
                        <PhoneInput />
                    </div>
                    <div className='flex flex-col gap-2 sqft'>
                    <label className='mt-2  text-[#dedce4]'>Email</label>
                      <input
                        type="email" 
                        onChange={handleChange}
                        name="email" placeholder="Email" 
                        className="p-2 rounded-xl border" 
                      />
                    </div>
                    </div>

                </div>
                <div className='mt-8 flex justify-between items-center'>
                  <button 
                    type='submit'
                    className='border-orange-600 border-[1px] rounded-md text-white p-[4px] hover:scale-105 duration-300 w-full'
                  >
                    Next
                  </button>
                </div>
            </form>

          </div>
        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default LandCustomerForm;