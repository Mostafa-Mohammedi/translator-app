import React from 'react'
import ProfileHistoryTranslation from './ProfileHistoryTranslation'
import './profileOrderHistory.css'


/**
 * Displays the translation history for a user in their profile.
 * 
 * @param {object} props - The component props.
 * @param {object} histories - The user's translation histories.
 * 
 */
const ProfileOrderHistory = ({histories}) => {
   let counter = 1; 

  const signLanguageHistory = histories.translations.map(history => <ProfileHistoryTranslation key={counter++} item = {history}/>)
  return (
    <section className='profile-order-history-container'>
      <ul className='profile-order-history-ul-container'>
      <h4>Translation histories log</h4>
        {signLanguageHistory}
      </ul>
    </section>
    )
}

export default ProfileOrderHistory