import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import './Login.css'

/**
 * Login component to display the login inside the application
*/

function Login() {
  return (
    <main className='container'>
      <div className="circel-image-topp"></div>
      <LoginForm />
      <div className="circel-image-down"></div>
    </main>

  )
}

export default Login