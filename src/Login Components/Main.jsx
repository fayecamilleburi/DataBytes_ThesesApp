import React from 'react'
import './Main.css';
import logo from '../Assets/title-header.png';  
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'; 

function Main() {
    const copyright = "Copyright Databytes"

  return (
    <div>
        <div>
            <header className="header">
                <img src={logo} alt="Logo" className='header-logo' />
            </header>
        </div>

        <div className="wrapper">
            <form action="">
                <span className="roboto-slab"><h1>NEU Library System</h1></span>
                <div className="input-box">
                    <input type="text" placeholder='ID Number' required />
                    <FiUser className='icon' />
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <IoLockClosedOutline className='icon' />
                </div>

                <div className="forgot-password">
                    <Link to="/forgotpassword">Forgot password</Link>
                </div>

                <button type="submit">Continue</button>
            </form>
        </div>

        <div>
            <footer className="footer">
                <p>{copyright}</p>
            </footer>
        </div>
    </div>
  );
}

export default Main;
