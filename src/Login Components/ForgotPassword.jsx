import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div>
      <div className="wrapper">
        <form action="">
          <p className='instructions'>
            To reset your password, submit your username or your email address <br />
            below. If we can find you in the database, an email will be sent to your <br />
            email address, with instructions how to get access again.<br />
          </p>

          <div className="input-box">
            <span className="roboto-slab"><h1>via Username</h1></span>
            <input type="text" />
            <button type="submit">Continue</button>
          </div>

          <div className="input-box">
            <span className="roboto-slab"><h1>via Email</h1></span>
            <input type="text" />
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword