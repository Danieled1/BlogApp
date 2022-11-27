import React from 'react'
import ReactDOM from 'react-dom/client';
import './style.css';
const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Vibes.</span>
                <span className="title">Register</span>
                <form>
                    <input class="input" type="text" placeholder='display name' required/>
                    <input class="input" type="email" placeholder='email'/>
                    <input class="input" type="password" placeholder='password'/>
                    <label htmlFor="file" class="file">
                        <input type="file" id="file"/>
                        <span class="file-custom"></span>
                    </label>
                    <button>Sign up</button>
                </form>
                    <p>You already have an account? Login</p>
            </div>
        </div>
    )
}

export default Register