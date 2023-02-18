import React, { useEffect } from 'react'
import { userById } from '../api/user'
import ProfileAction from '../components/Profile/ProfileAction'
import ProfileOrderHistory from '../components/Profile/ProfileOrderHistory'
import ProfilePage from '../components/Profile/ProfilePage'
import { STORAGE_KEY_USER } from '../const/storageKeys'
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'
import { storageSave } from '../utils/storage'

function Profile() {

  const [user, setUser] = useUser();
  useEffect(() => {

    const findUser = async () => {
      const [error, latestUser] = await userById(user.id);
      if(error === null){
        storageSave(STORAGE_KEY_USER, latestUser)
        setUser(latestUser);
      }
    }
   // findUser()
     
  }, [setUser, user.id])

  return (
    <>
      <h1>Profile</h1>
      <ProfilePage username = {user.username} />
      <ProfileOrderHistory histories = {user}/>
      <ProfileAction />
 

    </>
  )
}

export default withAuth(Profile)