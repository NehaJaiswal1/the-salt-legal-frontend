

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import com from '../../../assets/image/com.png';
import './Document.css';
import { useRecoilValue } from 'recoil';
import { jwtTokenState } from '../../auth/atoms';



function Document() {
  
  const navigate = useNavigate();
  const jwtToken = useRecoilValue(jwtTokenState);
  const [categoryData, setCategoryData] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
 

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank'); 
  };

  const handleDownload=()=>{
    if (jwtToken) {
      navigate('/package'); 
    } else {
      navigate('/login'); 
      console.log('User not logged in. Please login to download.');
    }
    // navigate('/package')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://the-salt-legal-backend.onrender.com/get/category');
        if (response.ok) {
          const data = await response.json();
          setCategoryData(data.data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBrowseMore = () => {
    if (jwtToken) {
      navigate('/templates'); 
    } else {
      navigate('/login'); 
      console.log('User not logged in. Please login to download.');
    }
    
  };

  return (
    <div className="card-container1">
      <div className="card-container">
        <div>
          <h3>
            Whatever Business <span>or </span>Legal Document You Need,
            <span> We Have a Template </span> for You.
          </h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo inventore quos officiis, natus nostrum, </p>
        </div>
        {categoryData.slice(0, 24).map((item, index) => (
          <div key={index} className="card">
            <img src={com} style={{ marginRight: '20px', alignText: 'center', color: '#02244a', width: '35px', marginLeft: '20px' }} alt="icon" />
            <h4>{item.title}</h4>
            <div className="chevron-icon" onClick={() => toggleCategory(index)}>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </div>
            {expandedCategory === index && (
              <div className="dropdown-options">
                {/* Render subcategories here */}
                {item.subCategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="subcategory-div" onClick={() => handleRedirect('https://www.indiabudget.gov.in/doc/bh1.pdf')}>
                    {subcategory.subCategory}
                  </div>
                ))}
                <div className='drop-down-div-fa'>
                <FontAwesomeIcon icon={faDownload}  className='drop-down-fa-icon' onClick={handleDownload}/>
                </div>
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
