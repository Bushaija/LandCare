import React from 'react'
import styles from './style';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Buy, HouseCustomerForm, LandCustomerForm, SellHouse, SellLand, SidePhone, Home, Sell, Services, About, NotFound, HouseDetails,  } from './components';


function App() {
  return (
    <Router>
      <div >
        <SidePhone />
      </div>
      <div className='bg-dark w-full overflow-hidden'>
        <Routes> 
          <Route path="/" element={<Home/>} />

          <Route path="/buy" element={<Buy/>} />
          <Route path="/buy/details/:id" element={<HouseDetails />} />

          <Route path="/sell" element={<Sell/>} />
          <Route path="/sell/houseCustomerInfo" element={<HouseCustomerForm/>} />
          <Route path="/sell/landCustomerInfo" element={<LandCustomerForm/>} />
          <Route path="/sell/sellHouse" element={<SellHouse/>} />
          <Route path="/sell/sellLand" element={<SellLand/>} />
          
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;