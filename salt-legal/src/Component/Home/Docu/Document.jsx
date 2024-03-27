


import React, { useState, useEffect } from "react";
import "./Document.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import com from '../../../assets/image/com.png';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 

function Document() {
  const navigate = useNavigate(); 
  const [categoryData, setCategoryData] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const handleRedirect = (url) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };


  useEffect(() => {
    fetch("https://the-salt-legal-backend-1.onrender.com/get/category")
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data); 
        setCategoryData(data.data); 
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, []);

  const handleBrowseMore = () => {
    navigate('/register'); 
  };

  return (
    <div className="card-container1">
      <div className="card-container">
        <div>
          <h3>
            Whatever Business <span>or </span>Legal Document You Need,
            <span> We Have a Template </span> for You.
          </h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo inventore quos officiis, natus nostrum,  </p>
        </div>
        {categoryData.slice(0, 24).map((item, index) => (
          <div key={index} className="card">
            <img
              src={com}
              style={{
                marginRight: "20px",
                alignText: "center",
                color: "#02244a",
                width:'35px',
                marginLeft: "20px",
              }}
              alt="icon"
            />
            <h4>{item.title}</h4>
            <div
              className="chevron-icon"
              onClick={() => toggleCategory(index)}
            >
              <FontAwesomeIcon 
                icon={faChevronDown} 
                size="xs" 
              />
            </div>
            {expandedCategory === index && (
              <div className="dropdown-options">
                {/* Render subcategories here */}
                {item.subCategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="subcategory" onClick={() => handleRedirect('https://www.indiabudget.gov.in/doc/bh1.pdf')}>
                    {subcategory.subCategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="center-button">
        <button onClick={handleBrowseMore}>BROWSE MORE</button> 
      </div>
    </div>
  );
}

export default Document;
