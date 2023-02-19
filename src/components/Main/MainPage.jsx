import React, { useState } from 'react';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageSave } from '../../utils/storage';
import MainPageForm from './MainPageForm';
import './MainPage.css'
import { TranslationAdd } from '../../api/Translation';


/**
 * 
* The MainPage component is the main page of the app where users can enter text to translate 
* and view the translated images.
*/

function MainPage() {
  const [imageList, setImageList] = useState([]);
  const [user, setUser] = useUser();

  /**
   * When the form is submitted add the image to the react hooks array 
   * @param {Array} images - An array of image filenames.
   */
  const handleFormSubmit = (images) => {
    setImageList(images);
  };

  /**
   * When the form is submitted the data is send to the transactionAdd method in the API for saving
   * @param {String} data 
   * @returns null if the data is empty
   */
  const handleDataTransfer = async (data) => {
    const [error, updateUser] = await TranslationAdd(user, data);
    if(error !== null){
      return
    }

    // Keep UI state and server state in sync
    storageSave(STORAGE_KEY_USER, updateUser)
    // update context
    setUser(updateUser)
    if (error) {
      console.log(error);
      return;
    }

    // Update the user context with the new translation
    setUser(prevUser => ({
      ...prevUser,
      translations: [...prevUser.translations, data]
    }));
  };

  return (
    <div className='mainpage-container'>
      <MainPageForm onFormSubmit={handleFormSubmit} onSubmitData={handleDataTransfer}/>
      <div className='main-page-image-container'>
        {imageList.map((image, index) => (
          <div key={index}>
            <img src={`img/${image}`} alt={image} className="mainpage-image-container" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
