import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProfileAction from '../components/Profile/ProfileAction'
import ProfileOrderHistory from '../components/Profile/ProfileOrderHistory'
import ProfilePage from '../components/Profile/ProfilePage'
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'
import {CgProfile}  from 'react-icons/cg'
import './Profile.css'

/**
 * A functional component that displays the user's profile information, order history and actions.
 */
function Profile() {
  const [user] = useUser();

  return (
    <div className='profile-container'>
      <Navbar />
      <div className='profile-main-container'>
      <h1 className='header'>Profile</h1>
      <p className='profile-icon'><CgProfile/></p>
      <ProfilePage username={user.username} />
      <ProfileOrderHistory histories={user} />
      <ProfileAction />
    </div>
    </div>
  )
}

export default withAuth(Profile)
