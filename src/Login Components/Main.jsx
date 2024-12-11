import React, { useEffect } from 'react';
import './Main.css';
import logo from '../Assets/title-header.png';  
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function Main() {
    const copyright = "Copyright Databytes";
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        document.body.className = 'login-background'; // Apply login background
        return () => {
            document.body.className = ''; // Reset on component unmount
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        navigate('/lib'); // Navigate to the Librarian component
    };

    return (
        <div>
            <header className="header">
                <img src={logo} alt="Logo" className='header-logo' />
            </header>

            <div className="wrapper">
                <form onSubmit={handleSubmit}>
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

            <footer className="footer">
                <p>{copyright}</p>
            </footer>
        </div>
    );
}

export default Main;
