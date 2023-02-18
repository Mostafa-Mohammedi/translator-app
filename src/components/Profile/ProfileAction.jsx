import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { clearHistoryTransaction } from '../../api/transaction';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageDelete, storageSave } from '../../utils/storage';

const ProfileAction = () => {
  const [user, setUser] = useUser();
  const navigate = useNavigate();



  const handleLogoutClick = () => {
    if(window.confirm("Are you sure?")){
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
      navigate("/");

    }
  }
    const handleClearHistoryClick = async () => {
      if(!window.confirm("Are you sure?")){
        return
    }
    const [ clearError] = await clearHistoryTransaction(user.id);
    if(clearError !== null){
      return
    }  
    const updateUser = {
      ...user,
      translations: []

    }
    storageSave(STORAGE_KEY_USER,updateUser)
    setUser(updateUser)

  }

  return (
    <div>
        <h1>ProfileAction</h1>
        <Link to={"/main"}> Main Page</Link>
        <button onClick={handleClearHistoryClick}> clear History</button>
        <button onClick={handleLogoutClick}> log out</button>

        </div>
  )
}

export default ProfileAction