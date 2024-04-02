


import React,{useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Step from "./Step/Step";
import Benefit from "./Benefit/Benefit";
import Document from './Docu/Document'
import StepCard from "./Step/StepCard";
import Footer from "./Footer/Footer";
import FooterBanner from "./FooterBanner/FooterBanner";
import Package from "./Package/Package";
import Testimonial from "./testimonial/testimonial";


function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <Banner/>
      </div>
      <div>
        <Category/>
      </div>
      <div>
        <Step />
      </div>
      <div>
        <Document/>
      </div>
      <div>
        <Benefit/>
      </div>
      <div>
        <Testimonial/>
      </div>
      <div>
        <Package/>
      </div>
      
         <div>
          <FooterBanner/>
        </div>
       
        <Footer/>
    </div>
  );
}

export default Home;