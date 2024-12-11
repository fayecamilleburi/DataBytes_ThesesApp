'use client';

import React, { useEffect, useState } from 'react';
import './Librarian.css';
import { IoSearch } from "react-icons/io5";
import { words } from '../lib/data';
import title from '../Assets/title-header.png';
import { Link } from 'react-router-dom';
import logo from '../Assets/neu-logo.png';

function Librarian() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
    const [activeSearch, setActiveSearch] = useState([]);
  
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

    const address = "9 Central Ave, New Era, Quezon City, 1107 Metro Manila"
    const website = "https://neu.edu.ph/main/"
    const copyright = "@DataBytes2024";
  
    const catalogItems = [
      {
        src: "/pic1.jpg",
        title: "Explore and Research",
        text: "Discover a wide range of resources for your research needs.",
      },
      {
        src: "/pic2.jpg",
        title: "Lorem ipsum",
        text: "Learn more about our extensive collections and services.",
      },
      {
        src: "/pic3.jpg",
        title: "Events and Launch",
        text: "Stay updated with upcoming library events and activities.",
      },
      {
        src: "/pic4.jpg",
        title: "About the University",
        text: "Understand the mission and vision of our institution.",
      },
    ];
  
    return (
        
      <div className="App">
        {/* Header */}
        <header className="header">
          <h1>New Era University Library System</h1>
          <nav className="menu-bar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#resources">Resources</a></li>
              <li className="user-dropdown" onClick={toggleUserMenu}>
                <button className="admin-button">Administrator</button>
                {userMenuOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#logout">Logout</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </header>
  
        {/* Header Image Below Header */}
    
  
        {/* Space before 4 Boxes (400px height) */}
        <div className="spacer"></div>
  
        {/* 4 Clickable Boxes */}
        <div className="box-section">
          {catalogItems.map((item, index) => (
            <div key={index} className="box">
              <img src={item.src} alt={`Catalog ${index}`} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="hover-overlay">
                <a href="#learnMore">Learn More</a>
              </div>
            </div>
          ))}
        </div>
    <div>
      {/* Rectangle for Library Highlights */}
      <div className="library-highlights1">Library Highlights</div>

      <header className="libr-header">
        <img src={title} alt="Logo" className="libr-header-logo" />
        <nav className="libr-navbar">
          <Link to="/lib">Home</Link> {/* Home link */}
          <Link to="/login">Login</Link> {/* Login link */}
        </nav>
      </header>

      <div>
        <form className="libr-searchbar-form">
          <div className="libr-searchbar-container">
            <input
              type="search"
              placeholder="Search"
              className="libr-searchbar-input"
              onChange={handleSearch}
            />
            <button className="libr-searchbar-button">
              <IoSearch />
            </button>
          </div>

          {activeSearch.length > 0 && (
            <div className="libr-searchbar-results">
              {activeSearch.map((s, index) => (
                <span key={index}>{s}</span>
              ))}
            </div>
          )}
        </form>
      </div>

      <div className="libr-option">
        <label className="libr-radio-container" htmlFor="home">
          <input type="radio" name="Option" value="Home" id="home" />
          Home
        </label>
        <label className="libr-radio-container" htmlFor="discover">
          <input type="radio" name="Option" value="Discover" id="discover" />
          Discover
        </label>
        <label className="libr-radio-container" htmlFor="catalog">
          <input type="radio" name="Option" value="Catalog" id="catalog" />
          Catalog
        </label>
      </div>

      {/* Image below Library Highlights */}
      <img src="/library.jpg" alt="Library" className="library-image" />
      <div className="library-text"> 
        <div className="line1">Launch of</div>
        <div className="line2">BookMobile</div>
      </div>
      <img src="/library2.jpg" alt="Library2" className="library-image2" />
      <img src="/library3.jpg" alt="Library3" className="library-image3" />
      <img src="/library4.jpg" alt="Library4" className="library-image4" />
      <img src="/library5.jpg" alt="Library5" className="library-image5" />
      
      <div className="library-text2">
        <div className="line3"></div>Welcome to NEU Library!</div>
      
      <div className="library-text3">
        <div className="line4">Lorem ipsum dolor sit amet, consectetur </div>
        <div className="line5">Donec  convallis  dolor  dignissim tortor </div>
        <div className="line6">risus pellentesque.</div>
      </div>

      <div className="library-text4">
        <div className="line3"></div>Welcome to NEU Library!</div>
      
      <div className="library-text5">
        <div className="line4">Lorem ipsum dolor sit amet, consectetur </div>
        <div className="line5">Donec  convallis  dolor  dignissim tortor </div>
        <div className="line6">risus pellentesque.</div>
      </div>

      <div className="recent-activity">Recent Activity</div>
      <div className="recent-activity2"></div>
      <div className="recent-activity3"></div>

      {/* Image below Recently Accessed */}
      <img src="/thesis1.jpg" alt="Thesis1" className="thesis-image1" />
      <div className="thesis1"> 
        <div className="thesisline1">MDS clinical diagnostic</div>
        <div className="thesisline2">criteria for Parkinson's </div>
        <div className="thesisline3">disease </div>
      </div>
      
      <img src="/thesis1.jpg" alt="Thesis1" className="thesis-image2" />
      <div className="thesis2"> 
        <div className="thesisline4">The Brain's Default</div>
        <div className="thesisline5">Network System </div>
      </div>

      <img src="/thesis1.jpg" alt="Thesis1" className="thesis-image3" />
      <div className="thesis3"> 
        <div className="thesisline6">Geometry: Learning</div>
        <div className="thesisline7">about Triangles </div>
      </div>

      <div className="recommendations-bar">Recommendations</div>
      <div className="recommendations-bar2"></div>
      <div className="recommendations-box1"></div>
      <div className="recommendations-box2"></div>
      <div className="recommendations-box3"></div>
      <div className="recommendations-box4"></div>
      <div className="recommendations-box5"></div>
      <div className="recommendations-box6"></div>

      <img src="/thesisreco1.png" alt="Thesisreco1" className="reco-image1" />
      <img src="/thesisreco2.png" alt="Thesisreco2" className="reco-image2" />
      <img src="/thesisreco3.png" alt="Thesisreco3" className="reco-image3" />
      <img src="/thesisreco3.png" alt="Thesisreco1" className="reco-image4" />
      <img src="/thesisreco1.png" alt="Thesisreco2" className="reco-image5" />
      <img src="/thesisreco2.png" alt="Thesisreco3" className="reco-image6" />

      <div className="header-thesis1-reco">The Brain Network</div>
      <div className="thesis1-reco"> 
        <div className="thesisrecoline1">Ronal B. Postura MD, MSc,</div>
        <div className="thesisrecoline2">Daniela Berg MD,</div>
        <div className="thesisrecoline3">Matthew Stern MD,</div>
        <div className="thesisrecoline4"> Werner Poewe MD,C</div>
        <div className="thesisrecoline5">First publushed: 16 October</div>
        <div className="thesisrecoline6">2015</div>
      </div>

      <div className="header-thesis2-reco">The Heart Network</div>
      <div className="thesis2-reco"> 
        <div className="thesisrecoline7">Ronal B. Postura MD, MSc,</div>
        <div className="thesisrecoline8">Daniela Berg MD,</div>
        <div className="thesisrecoline9">Matthew Stern MD,</div>
        <div className="thesisrecoline10"> Werner Poewe MD,C</div>
        <div className="thesisrecoline11">First publushed: 16 October</div>
        <div className="thesisrecoline12">2015</div>
      </div>
      <div className="header-thesis3-reco">The Heart Network</div>
      <div className="thesis3-reco"> 
        <div className="thesisrecoline13">Ronal B. Postura MD, MSc,</div>
        <div className="thesisrecoline14">Daniela Berg MD,</div>
        <div className="thesisrecoline15">Matthew Stern MD,</div>
        <div className="thesisrecoline16"> Werner Poewe MD,C</div>
        <div className="thesisrecoline17">First publushed: 16 October</div>
        <div className="thesisrecoline18">2015</div>
      </div>

      <div className="header-thesis4-reco">The Heart Network</div>
      <div className="thesis4-reco"> 
        <div className="thesisrecoline13">Ronal B. Postura MD, MSc,</div>
        <div className="thesisrecoline14">Daniela Berg MD,</div>
        <div className="thesisrecoline15">Matthew Stern MD,</div>
        <div className="thesisrecoline16"> Werner Poewe MD,C</div>
        <div className="thesisrecoline17">First publushed: 16 October</div>
        <div className="thesisrecoline18">2015</div>
      </div>
      <div className="header-thesis5-reco">The Heart Network</div>
      <div className="thesis5-reco"> 
        <div className="thesisrecoline13">Ronal B. Postura MD, MSc,</div>
        <div className="thesisrecoline14">Daniela Berg MD,</div>
        <div className="thesisrecoline15">Matthew Stern MD,</div>
        <div className="thesisrecoline16"> Werner Poewe MD,C</div>
        <div className="thesisrecoline17">First publushed: 16 October</div>
        <div className="thesisrecoline18">2015</div>
      </div>
      <div className="header-thesis6-reco">The Heart Network</div>
      <div className="thesis6-reco"> 
        <div className="thesisrecoline13">Ronal B. Postura MD, MSc,</div>
        <div className="thesisrecoline14">Daniela Berg MD,</div>
        <div className="thesisrecoline15">Matthew Stern MD,</div>
        <div className="thesisrecoline16"> Werner Poewe MD,C</div>
        <div className="thesisrecoline17">First publushed: 16 October</div>
        <div className="thesisrecoline18">2015</div>
      </div>

    
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

export default Librarian;
