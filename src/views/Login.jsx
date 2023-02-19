import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import './Login.css'

/**
 * Login component to display the login inside the application
*/

function Login() {
  return (
    <div className='container'>
      <img src="img/sirkel.png" alt="sirkel image" className="circel-image-topp"></img>
      <LoginForm />
      <img src="img/sirkel.png" alt="sirkel image" className="circel-image-down"></img>
    </div>

  )
}

export default Login