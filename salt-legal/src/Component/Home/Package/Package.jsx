

import React from 'react';
import './Package.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import { jwtTokenState } from '../../auth/atoms';


function Package() {

  
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

  const handlePayment = async () => {
    try {
      if (jwtToken) {
        console.log(jwtToken);
        console.log("order payment")
        const orderUrl = 'https://the-salt-legal-backend.onrender.com/orders';
        const { data } = await axios.post(orderUrl, {
          amount: book.price
        });
        console.log("orderData", data);
        initPayment(data.data);
        if (data.data.status === "created") {
          navigate('/category-pay');
        } 
      }
      else {
        navigate('/login');
        console.log('User not logged in. Please login to download.');
      }
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <div className='pakage-container'>
      <h2>Choose a <span>Right plan</span> for you</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quos nemo totam unde quaerat odit facere.</p>

      <div className="package">

        <div className="package-card">
          <h2>1 User</h2>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'black', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'black', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'black', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'black', marginTop: '5px' }} /><p>20 GB cloud storage Templates</p>
          </div>
          <h3>US $10 / month</h3>
          <button onClick={handlePayment}>SELECT</button>
        </div>
        <div className=" package-card-2">
          <h2>5 Users</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'white', marginTop: '5px' }} /><p>Ideal for small teams </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'white', marginTop: '5px' }} /><p>Ideal for small teams </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'white', marginTop: '5px' }} /><p>Ideal for small teams </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'white', marginTop: '5px' }} /><p>Ideal for small teams </p>
          </div>

          <h3>US ${book.price} month</h3>
          <button onClick={handlePayment}>SELECT</button>

        </div>
        <div className="package-card">
          <h2>Unlimited</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'black', marginTop: '5px' }} /><p>Ideal for larger teams </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'black', marginTop: '5px' }} /><p>Ideal for larger teams </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'black', marginTop: '5px' }} /><p>Ideal for larger teams </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faCheckSquare} style={{ marginRight: '15px', color: 'black', marginTop: '5px' }} /><p>Ideal for larger teams </p>

          </div>
          <h3>US $30 / month</h3>
          <button onClick={handlePayment}>FULL ACCESS</button>
        </div>
      </div>
    </div>
  );
}

export default Package;