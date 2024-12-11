import React from 'react'
import './Navbar.css'
import logo from '../../Assets/title-header.png'

const Navbar = () => {

  return (
    <div>
      <header className="header">
        <img src={logo} alt="NEU Logo" className='logo-image' />
      </header>
    </div>
  )
}

export default Navbar
