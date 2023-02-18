import React, { useState } from 'react';
import { TransactionAdd } from '../../api/transaction';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageSave } from '../../utils/storage';
import MainPageForm from './MainPageForm';

function MainPage() {
  const [imageList, setImageList] = useState([]);
  const [user, setUser] = useUser();

  // When the form is submitted, add the images to the imageList state
  const handleFormSubmit = (images) => {
    setImageList(images);
  };

  // When the data is submitted to the API, update the transaction history for the user
  const handleDataTransfer = async (data) => {
    const [error, updateUser] = await TransactionAdd(user, data);
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

    // Update the user context with the new transaction
    setUser(prevUser => ({
      ...prevUser,
      translations: [...prevUser.translations, data]
    }));
  };

  return (
    <div>
      <MainPageForm onFormSubmit={handleFormSubmit} onSubmitData={handleDataTransfer} />

      <div>
        {imageList.map((image, index) => (
          <div key={index}>
            <img src={`img/${image}`} alt={image} width="50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
