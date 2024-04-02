

import React from "react";
import "./TemplateSampleDetail.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from 'react-router-dom'; 
import { Card, CardContent, Typography, Button } from "@mui/material";
import ts1 from "../../assets/template/sample.webp";
import { useRecoilValue } from 'recoil';
import { jwtTokenState } from '../auth/atoms';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faCheckDouble,
  faCheckSquare,
  faCircleCheck,
  faFileWord,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import Footer from '../Home/Footer/Footer'

function TemplateSampleDetail() {
  const navigate = useNavigate(); 
  const jwtToken = useRecoilValue(jwtTokenState);
  const handleDownloadClick = () => {
    if (jwtToken) {
      navigate('/package'); 
    } else {
      navigate('/login'); 
      console.log('User not logged in. Please login to download.');
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="templateSampleContainer">
        <h2 className="templateSampleContainer-h2">
          Creating a <span>Comprehensive Employee </span>Handbook
        </h2>
        <p className="templateSampleContainer-p">
          Templates / Human Resources / Company Policies
        </p>

        <div className="template-sample-card-div">
          <Card className="template-sample-card">
            <CardContent>
              <img src={ts1} />
            </CardContent>
          </Card>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Card className="template-sample-subcard">
              <CardContent>
                <div className="template-sample-subcard-div">
                  ADDITIONAL BENEFITS
                </div>
                <div className="template-sample-sub-subcard">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>Free storage Services</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>Life time Access</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>Simple to pay and Edit</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>Simple to share</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>20 GB cloud storage Templates</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        marginRight: "15px",
                        color: "green",
                        marginTop: "5px",
                      }}
                      size="2x"
                    />
                    <p>20 GB cloud storage Templates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="template-sample-subcard-1">
              <CardContent>
                <div className="template-sample-sub-subcard">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="template-sample-sub-subcard-p">File Type </p>
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      style={{
                        marginRight: "5px",
                        color: "#02244a",
                        marginTop: "5px",
                        marginLeft: "30px",
                      }}
                      size="2x"
                    />
                    <p className="template-sample-sub-subcard-p">Word</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="template-sample-sub-subcard-p">File Type </p>
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      style={{
                        marginRight: "5px",
                        color: "#02244a",
                        marginTop: "5px",
                        marginLeft: "30px",
                      }}
                      size="2x"
                    />
                    <p className="template-sample-sub-subcard-p">Word</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="template-sample-sub-subcard-p">File Size</p>

                    <p
                      className="template-sample-sub-subcard-p"
                      style={{ marginLeft: "20px" }}
                    >
                      200kb
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="template-sample-sub-subcard-p">Pages</p>

                    <p
                      className="template-sample-sub-subcard-p"
                      style={{ marginLeft: "40px" }}
                    >
                      34
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="card-container-template">
        <Card>
          <CardContent className="card-content-template">
            <span>Creating a Comprehensive Employee Handbook</span>
           
            <p>
              Crafting an Employee Handbook is a critical step for any business
              owner. It's a tool that not only communicates your company's
              culture and expectations but also legally safeguards your
              business.
            </p>
            <p>
             
              Our employee handbook template at Business in a Box offers a
              streamlined way to create a professional and thorough staff
              manual.
            </p>
            <h3>What Is an Employee Handbook <span>?</span></h3>
            <p>An Employee Handbook is a document that clarifies all the crucial policies and procedures of your business or company.</p>
            <p>
            In a sense, this document defines in detail the culture of your organization. Also known as a company manual, an Employee Handbook compiles all the essential practices that you have adopted within the business. You are required to provide all the necessary information about your company, in one place. It might seem overwhelming to prepare a comprehensive document that can describe the working conditions of your organization. However, with our employee handbook templates, you can draft a well-formulated guide for your new employees, communicating everything they need to know about their workplace.
            </p>
            <h3>Key Elements of an Employee Handbook</h3>
            <p>The value of a well-constructed Employee Handbook lies in its detail and clarity. It should encompass the following elements:</p>
            <ul>
              <li>Company Culture and Values - Articulate the mission, vision, and core values of your business, helping employees align with your ethos.</li>
              <li>Company Culture and Values - Articulate the mission, vision, and core values of your business, helping employees align with your ethos.</li>
              <li>Company Culture and Values - Articulate the mission, vision, and core values of your business, helping employees align with your ethos.</li>
              <li>Company Culture and Values - Articulate the mission, vision, and core values of your business, helping employees align with your ethos.</li>
            </ul>
            <h3>What are key business policies included in an employee handbook <span>?</span></h3>
            <p>An Employee Handbook typically includes key business policies that are crucial for both the employer and employees to understand and adhere to.</p>
            <p>Get your Business in a Box today to lay a solid groundwork for your employee relations. Our templates offer a clear path to creating comprehensive and compliant Employee Handbooks, ensuring that your business operates smoothly, your team is well-informed, and your company culture is effectively communicated.</p>
          </CardContent>
        </Card>
       
      </div>
      <div className="template-sample-div-detail" onClick={handleDownloadClick}> <Button> DOWNLOAD</Button></div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default TemplateSampleDetail;