import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FiUsers } from 'react-icons/fi';
import '../Login/LoginForm.css'
function LoginForm() {
    const [username, setUsername] = useState('');

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        if (event.target.value.length < 3) {
            console.log("brukernavnet må være lengre enn tre tegn")
        }
    }
    const onSubmit = data => console.log(data);

    return (
        <div className='login-form-container'>
            <p className='icon-login'><FiUsers /></p>
            <h2>Login to Account</h2>
            <form onSubmit={handleSubmit((onSubmit))}>
                <div className='form-floating mb-3'>
                    <input {...register("name")} defaultValue={username} onChange={handleUsernameChange} className="form-control" id="floatingInput" placeholder="What is your username" />
                    <label htmlFor="floatingInput">what's is your name?</label>
                </div>
                <button type="submit" className="btn btn-danger">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
