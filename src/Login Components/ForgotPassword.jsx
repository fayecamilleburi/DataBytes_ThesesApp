import React, { useEffect } from 'react'; // Import useEffect for background handling
import './ForgotPassword.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const ForgotPassword = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Set the background specific to this page
  useEffect(() => {
    document.body.className = 'login-background'; // Apply the login background class
    return () => {
      document.body.className = ''; // Reset the body class when the component unmounts
    };
  }, []);

  // Function to handle the "Continue" button click and navigate back to the login page
  const handleContinue = () => {
    navigate('/lib'); // Navigate back to the login page
  };

  return (
    <div>
      <div className="forgot-pass-wrapper">
        <form action="">
          <p className='forgot-pass-instructions'>
            To reset your password, submit your username or your email address <br />
            below. If we can find you in the database, an email will be sent to your <br />
            email address, with instructions on how to get access again.<br />
          </p>

          <div className="forgot-pass-input-box">
            <span className="forgot-pass-roboto-slab"><h1>via Username</h1></span>
            <input type="text" />
            <button type="submit" onClick={handleContinue}>Continue</button>
          </div>

          <div className="forgot-pass-input-box">
            <span className="forgot-pass-roboto-slab"><h1>via Email</h1></span>
            <input type="text" />
            <button type="submit" onClick={handleContinue}>Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
