

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import Document from '../Home/Docu/Document';
import Price from '../Home/Package/Package';
import Testimonial from '../Home/testimonial/testimonial'
import { Button } from '@mui/material';

function Package() {
  
  const navigate = useNavigate(); 
  const handleButtonClick = () => {
    navigate('/payment-page'); 
  };
  return (
    <div>
    
      <div>
        <Navbar/>
      </div>
      <div style={{marginTop:'10rem'}}>
        {/* <h2>Get Instant Access to 3,000+ Document Templates, Cloud Storage, and File Sharing to Organize, Manage and Grow Your Business.</h2> */}
        {/* <Document /> */}
      </div>
      <div>
        <Price />
      </div>
      <div style={{marginTop:'80px', marginBottom:'50px', textAlign:'center'}}>
        <span>Get full access with Payment right now </span>
      </div>
      <div className="center-button">
        <Button onClick={handleButtonClick}>PAY NOW</Button>
      </div>
      <div>
        <Testimonial/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Package