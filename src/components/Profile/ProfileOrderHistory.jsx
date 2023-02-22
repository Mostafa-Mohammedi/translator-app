import React from 'react'
import ProfileHistoryTranslation from './ProfileHistoryTranslation'
import './profileOrderHistory.css'


/**
 * Displays the translation history for a user in their profile.
 * @param {object} props - The component props.
 * @param {object} histories - The user's object histories.
 * 
 */
const ProfileOrderHistory = ({histories}) => {
   let counter = 1; 

  const signLanguageHistory = histories.translations.slice(-10).map(history => <ProfileHistoryTranslation key={counter++} item = {history}/>)
  return (
    <section className='profile-order-history-container'>
      <ul className='profile-order-history-ul-container'>
       {signLanguageHistory}
      </ul>
    </section>
    )
}

export default ProfileOrderHistory