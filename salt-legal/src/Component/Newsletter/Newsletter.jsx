

import { Button, Card, CardContent, Typography } from "@mui/material";
import React,{useEffect} from "react";
import b1 from "../../assets/benefit1.png";
import b2 from "../../assets/benefit2.png";
import b3 from "../../assets/benefit3.png";
import "./Newsletter.css";
import Navbar from "../Navbar/Navbar";
import Footer from '../Home/Footer/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faBookmark,
  faDownload,
  faShare,
  faShareAltSquare,
  faShareFromSquare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

function Newsletter() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="newsletter-container">
        <div className="news-letter-div">
          <img src={b1} />
          <CardContent>
            <h2>Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              pariatur sunt tempora esse saepe id, odit nam neque minima harum
              distinctio repudiandae? Laborum perferendis est quisquam magnam
              dolor minima suscipit.
            </p>
            <div className="news-letter-div-1">
              <div>
                <FontAwesomeIcon
                  icon={faDownload}
                  size="lg"
                  style={{
                    color: "rgb(22 163 74)",
                    marginRight: "20px",
                    backgroundColor: "rgb(187 247 208)",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faShareFromSquare}
                  size="lg"
                  style={{
                    color: "rgb(202 138 4)",
                    backgroundColor: "rgb(254 240 138)",
                    marginRight: "20px",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faBookmark}
                  size="lg"
                  style={{
                    color: "rgb(220 38 38)",
                    backgroundColor: " rgb(254 202 202)",
                    marginRight: "20px",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "auto" }}>
                <Button>Read More</Button>
              </div>
            </div>
          </CardContent>
        </div>
        <div className="news-letter-div">
          <CardContent>
            <h2>Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              pariatur sunt tempora esse saepe id, odit nam neque minima harum
              distinctio repudiandae? Laborum perferendis est quisquam magnam
              dolor minima suscipit.
            </p>
            <div className="news-letter-div-1">
              <div>
                <FontAwesomeIcon
                  icon={faDownload}
                  size="lg"
                  style={{
                    color: "rgb(22 163 74)",
                    marginRight: "20px",
                    backgroundColor: "rgb(187 247 208)",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faShareFromSquare}
                  size="lg"
                  style={{
                    color: "rgb(202 138 4)",
                    backgroundColor: "rgb(254 240 138)",
                    marginRight: "20px",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faBookmark}
                  size="lg"
                  style={{
                    color: "rgb(220 38 38)",
                    backgroundColor: " rgb(254 202 202)",
                    marginRight: "20px",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "auto" }}>
                <Button>Read More</Button>
              </div>
            </div>
          </CardContent>
          <img src={b2} />
        </div>
        <div className="news-letter-div">
          <img src={b3} />
          <CardContent>
            <h2>Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              pariatur sunt tempora esse saepe id, odit nam neque minima harum
              distinctio repudiandae? Laborum perferendis est quisquam magnam
              dolor minima suscipit.
            </p>
            <div className="news-letter-div-1">
              <div>
                <FontAwesomeIcon
                  icon={faDownload}
                  size="lg"
                  style={{
                    color: "rgb(22 163 74)",
                    marginRight: "20px",
                    backgroundColor: "rgb(187 247 208)",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faShareFromSquare}
                  size="lg"
                  style={{
                    color: "rgb(202 138 4)",
                    backgroundColor: "rgb(254 240 138)",
                    marginRight: "20px",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faBookmark}
                  size="lg"
                  style={{
                    color: "rgb(220 38 38)",
                    backgroundColor: " rgb(254 202 202)",
                    marginRight: "20px",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div style={{ marginLeft: "auto" }}>
                <Button>Read More</Button>
              </div>
            </div>
          </CardContent>
        </div>
        <div className="newsletter-banner-1">
        <div className="text">
        “In three words I can sum up everything I've learned about life: It goes on.“
          <p>~ Robert Frost</p>
        </div>
       
       
      </div>
        {/* <div className="news-letter-div-2">
          <CardContent>
            <h2>
             
            </h2>
            <p></p>

            <div className="news-letter-div-1">
              <div style={{ marginLeft: "auto" }}>
                <Button>Get Our Newsletter</Button>
              </div>
            </div>
          </CardContent>
        </div> */}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Newsletter;
