'use client'

import React, { useEffect, useState } from 'react'; // Import useEffect for background handling
import './Unlogged.css';
import { IoSearch } from "react-icons/io5";
import title from '../Assets/title-header.png';
import { words } from '../lib/data';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Unlogged() {
  const [activeSearch, setActiveSearch] = useState([]);

  // Set the background specific to this page
  useEffect(() => {
    document.body.className = 'main-background'; // Apply the main page background class
    return () => {
      document.body.className = ''; // Reset the body class when the component unmounts
    };
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setActiveSearch([]);
      return;
    }
    setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0, 8));
  };

  return (
    <div>
      <div>
        <header className="header">
          <img src={title} alt="Logo" className="header-logo" />
          <nav className="navbar">
            <Link to="/">Home</Link> {/* Home link */}
            <Link to="/login">Login</Link> {/* Login link to navigate to Main component */}
          </nav>
        </header>
      </div>

      <div>
        <form className="searchbar-form">
          <div className="searchbar-container">
            <input
              type="search"
              placeholder="Search"
              className="searchbar-input"
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
    </div>
  );
}

export default Unlogged;
