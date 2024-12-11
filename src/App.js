import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

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
      <div className="header-image">
        <img src="/headerpic.jpg" alt="Library Image" />
      </div>

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

    </div>
  );
};

export default App;
