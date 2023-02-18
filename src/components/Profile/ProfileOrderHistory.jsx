import React from 'react'
import ProfileHistoryTranslation from './ProfileHistoryTranslation'

const ProfileOrderHistory = ({histories}) => {
   let counter = 1; 

  const signLanguageHistory = histories.translations.map(history => <ProfileHistoryTranslation key={counter++} item = {history}/>)
  return (
    <section>
      <h4>Sign language Historie</h4>
      <ul>
        {signLanguageHistory}
      </ul>
    </section>
    )
}

export default ProfileOrderHistory