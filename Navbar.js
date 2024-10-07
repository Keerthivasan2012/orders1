import React from 'react';
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="search-bar">
        <input type="search" placeholder="Search..." />
        <button type="submit" style={{marginLeft:'10px'}}>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;