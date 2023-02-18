import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiUsers } from 'react-icons/fi';
import '../Login/LoginForm.css';
import {loginUser } from '../../api/user';
import { storageSave } from '../../utils/storage.js';
import { useNavigate } from 'react-router';
import { useUser } from '../../context/UserContext';
const usernameConfig = { required: true, minLength: 2 };

function LoginForm() {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const [user, setUser] = useUser();

    
    const [loading, setLoading] = useState(false);
    const [ apiError, stetApiError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if(user !== null){
            navigate('profile');
            console.log("user has changed! " + user.username);


        }
        
    }, [user, navigate])


    const errorMessage = (() => {
        if(!errors.username){
            return null;
        }
        if( errors.username.type === 'required'){
            return <span>This field is required</span>

        }
        if( errors.username.type === 'minLength'){
            return <span>Name must be more then four letter </span>

        }
    })();
    
    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if (error !== null) {
          stetApiError(error)
        }
      
        if (userResponse !== null) {
            storageSave('translation-user', userResponse);
            setUser(userResponse);
        }
      
        setLoading(false);
      };
      

    return (
        <div className='login-form-container'>
            <p className='icon-login'><FiUsers /></p>
            <h2>Login to Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-floating mb-3'>
                    <input
                        {...register('username', usernameConfig)}
                        type="text"
                        className='form-control'
                        id='floatingInput'
                        placeholder='What is your name'
                    />
                    {errorMessage}
                    <label htmlFor='floatingInput'>What's your name?</label>
                </div>
                <button type='submit' disabled={loading} className='btn btn-danger'>
                    Continue
                </button>
                {loading && <p>Continue to Main page ...</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </div>
    );
}

export default LoginForm;
