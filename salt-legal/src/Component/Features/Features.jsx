

import React,{useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import bt from "../../assets/template/banner-template.jpg";
import "./Features.css";
import { categoryData } from "../../Data/data";
import Testimonials from "../Home/testimonial/testimonial";
import Testimonial from "../Home/testimonial/testimonial";
import tsl from '../../assets/tsl-logo.png'

function Features() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="features-container">
        <h2>
          <span>Optimized for Enhancing Business Efficiency</span>
        </h2>
        <p>Top designed Templates to smooth running of Bussiness</p>
        <div className="features-div">
          <div>
            <img src={bt} style={{ width: "100%", padding: "50px" }} />
          </div>
        </div>
        {/* Youtube video */}
        <div>
          <div className="footer-banner-2">
            <h2>
              Who we are <span>?</span>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            <p>
              Reprehenderit impedit eius voluptates perspiciatis quod delectus,
              fugiat nihil hic vel dicta
            </p>
          </div>
          <div className="content-right">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7oKGUn07V4w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis quis iste cumque molestiae eveniet? Ullam voluptatem nemo ad fugiat totam distinctio iste quae iure consectetur optio? Error, velit odio.
          </h2> */}
          </div>
        </div>

        <h2>
          <span>Our Core Features</span>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          temporibus facilis doloribus totam vero illum!
        </p>
      </div>

      <div className="features-container-2">
        {categoryData.map((item, index) => (
          <Card key={index} className="feature-card-style">
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia>
                  <img src={item.img} style={{ width: "100px" }} />
                </CardMedia>

                <div className="feature-card-style-1">
                  {/* <hr
                  style={{
                   
                    backgroundColor: "gray",
                    height: '2px',width:'180px'
                  }}
                /> */}
                  <Typography
                    variant="h6"
                    component="h2"
                    className="feature-card-style-2"
                    style={{ textAlign: "center" }}
                  >
                    {item.description}
                  </Typography>
                  <hr
                    style={{
                      backgroundColor: "gray",
                      height: "2px",
                      width: "180px",
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      
      <div>
        <Testimonial />
      </div>
      <div>
      <div className="feature-footer-banner-1">
        <div className="feature-text">
          Powered By 
          <p>The Salt Legal</p>
        </div>
        <div className="feature-image">
          <img src={tsl} alt="Image" />
        </div>
       
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Features;
