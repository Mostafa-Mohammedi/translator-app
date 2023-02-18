import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiUsers } from 'react-icons/fi';
import '../Login/LoginForm.css';
import {loginUser } from '../../api/user'
import { useNavigate } from 'react-router';
const usernameConfig = {
    required: true,
    minLength: 2
};

function LoginForm() {
    //const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [ apiError, stetApiError] = useState(null);


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

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
    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, user] = await loginUser(username);
 //       console.log("Error: ", error);
 //       console.log("User: ", user);
        setLoading(false);
    };

   // console.log(errors);
   

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
            </form>
        </div>
    );
}

export default LoginForm;
