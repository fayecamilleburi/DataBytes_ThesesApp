import React from 'react';
import './LoginAuth.css'; 
import logo from '../Assets/title-header.png';
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";

function LoginAuth() {
    const copyright = "Copyright Databytes";

    return (
        <div>
            <header className="loginauth-header">
                <img src={logo} alt="Logo" className='loginauth-header-logo' />
            </header>

            <div className="loginauth-wrapper">
                <form action="">
                    <span className="loginauth-slab"><h1>NEU Library System</h1></span>
                    <div className="loginauth-input-box">
                        <input type="text" placeholder='ID Number' required />
                        <FiUser className='loginauth-icon' />
                    </div>

                    <div className="loginauth-input-box">
                        <input type="password" placeholder='Password' required />
                        <IoLockClosedOutline className='loginauth-icon' />
                    </div>

                    <div className="loginauth-forgot-password">
                        <a href="/">Forgot password</a>
                    </div>

                    <button type="submit">Continue</button>
                </form>
            </div>

            <footer className="loginauth-footer">
                <p>{copyright}</p>
            </footer>
        </div>
    );
}

export default LoginAuth;
