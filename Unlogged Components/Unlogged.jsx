'use client'

import React, { useState } from 'react';
import './Unlogged.css';
import { IoSearch } from "react-icons/io5";
import title from '../Assets/title-header.png';
import logo from '../Assets/neu-logo.png';
import { words } from '../lib/data';

function Unlogged() {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
      if (e.target.value === '') {
          setActiveSearch([])
          return
      }
      setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0, 8))
  }

    const address = "9 Central Ave, New Era, Quezon City, 1107 Metro Manila"
    const website = "https://neu.edu.ph/main/"
    const copyright = "@DataBytes2024";

  return (
    <div>
      <div>
            <header className="header">
                <img src={title} alt="Logo" className='header-logo' />
                
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/">Login</a>
                </nav>
            </header>
        </div>

        <div>
        <form className='searchbar-form'>
            <div className="searchbar-container">
                <input 
                    type="search" 
                    placeholder='Search' 
                    className='searchbar-input' 
                    onChange={handleSearch} 
                />
                <button className="searchbar-button">
                    <IoSearch />
                </button>
            </div>

            {activeSearch.length > 0 && (
                <div className="searchbar-results">
                    {activeSearch.map((s, index) => (
                        <span key={index}>{s}</span>
                    ))}
                </div>
            )}
        </form>
        </div>

        <div className="option">
            <label className="radio-container" htmlFor="home">
                <input type="radio" name="Option" value="Home" id="home" />
                Home
            </label>
            <label className="radio-container" htmlFor="discover">
                <input type="radio" name="Option" value="Discover" id="discover" />
                Discover
            </label>
            <label className="radio-container" htmlFor="catalog">
                <input type="radio" name="Option" value="Catalog" id="catalog" />
                Catalog
            </label>
        </div>

        <div>
            <footer className='footer'>
                <div className="footer-top">
                    <p className="footer-item address">{address}</p>
                    <p className="footer-item copyright">{copyright}</p>
                </div>
                <a href="/" className="footer-item website">{website}</a>
                <img src={logo} alt="NEU Logo" className='footer-logo' />
            </footer>
        </div>
    </div>
  );
}

export default Unlogged;
