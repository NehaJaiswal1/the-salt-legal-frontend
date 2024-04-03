




import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useNavigate,useLocation } from 'react-router-dom';
import com from '../../assets/image/com.png';
import '../Home/Docu/Document.css';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { useRecoilValue } from 'recoil';
import { jwtTokenState } from '../auth/atoms';



function CategoryPay() {

  const navigate = useNavigate();
  const jwtToken = useRecoilValue(jwtTokenState);
  const [categoryData, setCategoryData] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [fileUrl, setFileUrl] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  

  const firebaseConfig = {
    apiKey: "AIzaSyDVoCPjnHeVwhXGS6e2TecybfRA5kO47BM",
    authDomain: "firstfirebaseproject-c676f.firebaseapp.com",
    projectId: "firstfirebaseproject-c676f",
    storageBucket: "the-salt-legal.appspot.com",
    messagingSenderId: "490386883552",
    appId: "1:490386883552:web:629d36e63e41982abce185",
    measurementId: "G-R45S0BBB9B"
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);


  useEffect(() => {
    fetchUploadedImages();
  }, []);


  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

//   const handleDownload = () => {
//         downloadFiles();
//   }

  const handleDownload = async () => {
    if (selectedFolder !== null) {
      try {
        const folder = categoryData[selectedFolder];
        const downloadURLs = await Promise.all(
          folder.subDocuments.map(async (fileName) => {
            const fileRef = ref(storage, `SubCategories/${folder.folderName}/${fileName}`);
            return await getDownloadURL(fileRef);
          })
        );
        
        downloadURLs.forEach((url, index) => {
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `file${index}`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      } catch (error) {
        console.error('Error downloading files:', error);
      }
    }
  };

  


  const fetchUploadedImages = async () => {
    try {
      const subCategoriesRef = ref(storage, 'SubCategories');
      const subCategoryItems = await listAll(subCategoriesRef);

      const folderNames = subCategoryItems.prefixes.map((folderRef) => folderRef.name);

      const categoryPromises = folderNames.map(async (folderName) => {
        const folderRef = ref(storage, `SubCategories/${folderName}`);
        const folderItems = await listAll(folderRef);
        return { folderName, subDocuments: folderItems.items.map(item => item.name) };
      });

      const categoryData = await Promise.all(categoryPromises);

      setCategoryData(categoryData);
    } catch (error) {
      console.error('Error fetching folder names:', error);
    }
  };

  const truncateFileName = (fileName) => {
    const words = fileName.split(' ');
    return words.length > 3 ? `${words.slice(0, 3).join(' ')}...` : fileName;
  };




  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://the-salt-legal-backend.onrender.com/get/category');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setCategoryData(data.data);
  //       } else {
  //         console.error('Failed to fetch data');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const downloadFiles = async () => {
    try {
      
      const downloadURLs = await Promise.all(
        categoryData.flatMap((item) =>
          item.subDocuments.map(async (fileName) => {
            const fileRef = ref(storage, `SubCategories/${item.folderName}/${fileName}`);
            return await getDownloadURL(fileRef);
          })
        )
      );
  
     
      downloadURLs.forEach((url, index) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `file${index}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } catch (error) {
      console.error('Error downloading files:', error);
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
            <h4>{item.folderName}</h4>
            <div className="chevron-icon" onClick={() => {
              toggleCategory(index);
              setSelectedFolder(expandedCategory === index ? null : index);
            }}>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </div>

            {expandedCategory === index && (
              <div className="dropdown-options">
                {/* Render subcategories here */}
                {item.subDocuments.map((subDocument, subIndex) => (
                  <div key={subIndex} className="subcategory-div">
                    {truncateFileName(subDocument)}
                  </div>
                ))}
                <div className='drop-down-div-fa'>
                  <FontAwesomeIcon icon={faDownload} className='drop-down-fa-icon' onClick={handleDownload} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPay;