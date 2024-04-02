

import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import Document from '../Home/Docu/Document';
import Price from '../Home/Package/Package';
import Testimonial from '../Home/testimonial/testimonial'
import { Button } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { jwtTokenState } from '../auth/atoms';

function Package() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  const navigate = useNavigate(); 
  const jwtToken = useRecoilValue(jwtTokenState);
  const [book, setbook] = useState({
    name: "The Road to be taken",
    author: "C.S Tylor",
    img: "https://th.bing.com/th?id=OIP.O8X2cM_d8XTou4d3_YlbgAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    price: 500,
  });
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_UH0rkDW0Rkm44R",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      img: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = 'https://the-salt-legal-backend.onrender.com/verify';
          const { data } = await axios.post(verifyUrl, response);
          console.log("verifyData", data);
        } catch (error) {
          console.log(error)
        }
      },
      theme: {
        color: "#3399cc"
      },
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  const handleButtonClick = async () => {
    try {
      if (jwtToken) 
      {
        console.log(jwtToken);
        console.log("order payment")
        const orderUrl = 'https://the-salt-legal-backend.onrender.com/orders';
        const { data } = await axios.post(orderUrl, {
          amount: book.price
        });
        console.log("orderData", data);
        initPayment(data.data);
      }
      else {
        navigate('/login');
        console.log('User not logged in. Please login to download.');
      }
    } catch (error) {
      console.log(error)
    }
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