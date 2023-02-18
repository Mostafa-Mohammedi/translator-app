import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useUser } from '../../context/UserContext';
import { storageDelete } from '../../utils/storage';

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
  return (
    <div>
        <h1>ProfileAction</h1>
        <Link to={"/main"}> Main Page</Link>
        <button> clear History</button>
        <button onClick={handleLogoutClick}> log out</button>

        </div>
  )
}

export default ProfileAction