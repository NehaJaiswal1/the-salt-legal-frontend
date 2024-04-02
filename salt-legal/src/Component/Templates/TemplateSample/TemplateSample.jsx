

import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import {templateSample} from '../../../Data/templateSample'
import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material";
import './TemplateSample.css'

function TemplateSample() {

  const navigate = useNavigate(); 

  const handleImageClick = () => {
    navigate('/templates/template-sample'); 
  };
  const handleButtonClick = () => {
    navigate('/login'); 
  };
  return (
   
   
   <div>
       <h2 className='template-container-h2'>Discover Our<span> Best-Selling Business Templates! </span> </h2>
          <div className="template-container">
            
        {templateSample.map((item, index) => (
          <Card key={index} className="template-card-style-1">
             <CardContent>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Wrap the image inside a clickable div */}
                <div onClick={handleImageClick}>
                  <CardMedia>
                    <img src={item.img} style={{ width: '100%', cursor:'pointer'}} alt={item.name} />
                  </CardMedia>
                </div>
                <p>
                  {item.name}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='template-button-div'>
      {/* <Button className='register-button'onClick={handleButtonClick}>Get STARTED</Button> */}
      </div>
      
    </div>
  )
}

export default TemplateSample