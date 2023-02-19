import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TranslationClearHistory } from '../../api/Translation';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageDelete, storageSave } from '../../utils/storage';
import './profileAction.css'

/**
 * Profile action compontent to add the button and main page link.
 */

const ProfileAction = () => {
  const [user, setUser] = useUser();
  const navigate = useNavigate();


  /**
   * Function for logging the user out 
   * confirm if user want to log out and delete the session storage
   * set the user object to null
   * navigate back to the login page
   */

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
      navigate("/");

    }
  }

  /**
   * Function for deleting translation log
   * Check if user is sure to delete the log
   * delete the transaction log and update the user save the update user object to session log
   */
  const handleClearHistoryClick = async () => {
    if (!window.confirm("Are you sure?")) {
      return
    }
    const [clearError] = await TranslationClearHistory(user.id);
    if (clearError !== null) {
      return
    }

    const updateUser = {
      ...user,
      translations: []

    }
    storageSave(STORAGE_KEY_USER, updateUser)
    setUser(updateUser)

  }

  return (
    <div className='profile-action-container'>
      <Link className='profile-action-link' to={"/main"}> Main Page</Link>
        <button className='profile-action-button-history' onClick={handleClearHistoryClick}> clear History</button>
        <button className='profile-action-button-log-out' onClick={handleLogoutClick}> log out</button>
      </div>

  )
}

export default ProfileAction