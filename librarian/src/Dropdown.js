import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
  };

  return (
    <><div className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-button">
              Librarian
          </button>
          {isDropdownOpen && (
              <div className="dropdown-menu">
                  <a href="/profile">My Profile</a>
                  <a href="/resource">Resource Management</a>
                  <a href="/settings">Settings</a>
              </div>
          )}
      </div></>


  );
};

export default Dropdown;
