import React from 'react'

/**
 * Component to display the name of the user
 * @param {object} props - The component props.
 * @param {object} username - The username.
 */

function ProfilePage({username}) {
    return (
        <div><h4>Hello, welcome back {username}</h4></div>
    )
}

export default ProfilePage