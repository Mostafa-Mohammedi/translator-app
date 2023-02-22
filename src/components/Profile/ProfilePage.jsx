import React from 'react'
import './profilePage.css'

/**
 * Component to display the name of the user
 * @param {object} props - The component props.
 * @param {object} username - The username.
 */

function ProfilePage({ username }) {
    return (
        <div className='profilepage-container'>
            <p>Hello, welcome back {username}</p>
        </div>
    )
}

export default ProfilePage