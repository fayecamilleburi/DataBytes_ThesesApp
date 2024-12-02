import React from 'react'
import './Navbar.css'
import logo from '../../Assets/neu-logo.png'

const Navbar = () => {

  return (
    <div>
      <header className="header">
        <img src={logo} alt="NEU Logo" className='logo-image' />
        <a href="/" className="logo">
        <span className="alex-brush">New Era University</span>   <span className="alumni-sans-inline-one">Library System</span>
        </a>
      </header>
    </div>
  )
}

export default Navbar
