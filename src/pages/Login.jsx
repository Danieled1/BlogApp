import React from 'react'
import ReactDOM from 'react-dom/client';
import './style.css';
const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Vibes.</span>
                <span className="title">Login</span>
                <form>
                    <input class="input" type="email" placeholder='email'/>
                    <input class="input" type="password" placeholder='password'/>
                    <button>Sign in</button>
                </form>
                    <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login