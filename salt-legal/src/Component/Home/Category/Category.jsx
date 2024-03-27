
import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Category.css";
import image from '../../../assets/image/startup1.png';
import { useNavigate } from 'react-router-dom';


function Category() {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // Fetch category data from the backend API
    fetch("http://localhost:3001/get/category")
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data); // Log the response data
        setCategoryData(data.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, []);

  console.log("Category data state:", categoryData);
  return (
    <div className="category-container">
      <div>
        <h2 className="container1">
          Reimagining Your Business Management with Comprehensive Templates
        </h2>

        <p>5,000+ Templates | 10+ Business Departments</p>
      </div>

      <div className="category-container">
        {categoryData.slice(0, 8).map((item, index) => (
          <Card key={index} className="card-style"  onClick={() => navigate('/templates')}>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia>
                  <img
                    src={image}
                    style={{ width: "100px" }}
                    alt={item.title}
                  />
                </CardMedia>
                <div className="card-style-1">
                  <Typography
                    variant="h6"
                    component="h2"
                    className="card-style-2"
                    style={{ textAlign: "center" }}
                  >
                    {item.title}
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
    </div>
  );
}

export default Category;
