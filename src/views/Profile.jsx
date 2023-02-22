import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProfileAction from '../components/Profile/ProfileAction'
import ProfileOrderHistory from '../components/Profile/ProfileOrderHistory'
import ProfilePage from '../components/Profile/ProfilePage'
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'
import { CgProfile } from 'react-icons/cg'
import './Profile.css'

/**
 * A functional component that displays the user's profile information, order history and actions.
 */
function Profile() {
  const [user] = useUser();
  console.log(user)

  return (
    <main className='profile-container'>
      <Navbar />
      <section className='profile-main-container'>
        <div className='profile-article-container'>
          <article className='profile-icon-container'>
          <p>Profile page</p>
            <span className='profile-icon'><CgProfile /></span> 
            <ProfilePage username={user.username} />
          </article>
          <article className='profile-log-container'>
            <p>Display 10 last sign logs</p>
          <ProfileOrderHistory histories={user} />
          </article>

        </div>
        <ProfileAction />
      </section>
    </main>
  )
}

export default withAuth(Profile)
