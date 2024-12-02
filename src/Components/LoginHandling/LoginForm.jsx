import React from 'react';
import './LoginForm.css';
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";

const LoginForm = () => {
  return (
    <div className="wrapper">
        <form action="">
            <span className="roboto-slab"><h1>NEU Library System</h1></span>
            <div className="input-box">
                <input type="text" placeholder="ID Number" required />
                <FiUser className='icon' />
            </div>

            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <IoLockClosedOutline className='icon' />
            </div>

            <div className="forgot-password">
                <a href="/">Forgot password?</a>
            </div>

            <button type="submit">Continue</button>
        </form>
    </div>
  )
}

export default LoginForm
