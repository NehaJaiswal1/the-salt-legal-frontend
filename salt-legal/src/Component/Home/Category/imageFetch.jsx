
 
  import React, { useState, useEffect } from 'react';
  import { initializeApp } from 'firebase/app';
  import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
  
  const FileUpload = () => {
      const [imageUrls, setImageUrls] = useState([]);
  
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
  
      const fetchUploadedImages = async () => {
          try {
              const imagesRef = ref(storage, 'Category'); 
              const imagesList = await listAll(imagesRef);
              const urls = await Promise.all(imagesList.items.map(async (imageRef) => {
                  const url = await getDownloadURL(imageRef);
                  return url;
              }));
              setImageUrls(urls);
          } catch (error) {
              console.error('Error fetching uploaded images:', error);
          }
      };
  
      return (
          <div>
              {imageUrls.map((url, index) => (
                  <div key={index}>
                      <img src={url} alt={`Image ${index}`} />
                  </div>
              ))}
          </div>
      );
  };
  
  export default FileUpload;
  