import React from 'react'

/**
 * Component to display the individual translation history
 * @param {object} item - The translation history item to display.
 * @param {string} item.sourceText - The original text that was translated
 */
const ProfileHistoryTranslation = ({item}) => {
  return <li>{item}</li>
}

export default ProfileHistoryTranslation