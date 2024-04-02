
import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../Navbar/Navbar';
import Category from '../Home/Category/Category';
import TemplateSample from './TemplateSample/TemplateSample';
import Document from '../Home/Docu/Document'
import { Button } from '@mui/material';
import './Templates.css'
import Footer from '../Home/Footer/Footer'

function Templates() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const navigate = useNavigate(); 
  const handleButtonClick = () => {
    navigate('/templates/template-sample');
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* <div>
        <Category />
      </div> */}
      <div>
        <TemplateSample />
      </div>
      <div>
        <Document />
      </div>
      <div className="center-content">
        <h2>Skyrocket Your Success with the <span>Ultimate Business Arsenal</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur recusandae illum eos, ducimus !</p>
        <Button className='templates-button-div' onClick={handleButtonClick}>GET FULL ACCESS</Button>
      </div>
      <div>
        <Footer/>
      </div>



    </div>
  )
}

export default Templates