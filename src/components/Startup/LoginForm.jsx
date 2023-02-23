import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiUsers } from 'react-icons/fi';
import { loginUser } from '../../api/user';
import { storageSave } from '../../utils/storage.js';
import { useNavigate } from 'react-router';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import '../Login/LoginForm.css';

const usernameConfig = { required: true, minLength: 2 };

/**
 * Form component for logging in a user to the profile page 
 */
function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [user, setUser] = useUser();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate('profile');
      console.log("user has changed! " + user.username);
      setLoggedIn(true);
    }
  }, [user, navigate]);

  /**
   * Function to display an span error message if the username field has a validation error
   */
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === 'required') {
      return <span>This field is required</span>
    }
    if (errors.username.type === 'minLength') {
      return <span>Name must be more than two letters</span>
    }
  })();

  /**
   * Function to take the data from user input and send them to the API to safe the data
   * @param {Object} username takes the username object from the 
   */
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  return (
    <div className='login-page'>
      <div className='login-form-container'>
        <p className='icon-login'><FiUsers /></p>
        <h2>Login to Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-floating mb-3'>
            <input
              {...register('username', usernameConfig )}
              type="text"
              className='form-control'
              id='floatingInput'
              placeholder="What's your name?"
              defaultValue={""}

            />
            <label for='floatingInput'>What's your name?</label>
            {errorMessage}
          </div>
          <button type='submit' disabled={loading} className='btn btn-danger'>
            Continue
          </button>
          {loading && <p>Continue to Main page ...</p>}
          {apiError && <p>{apiError}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
