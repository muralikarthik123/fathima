import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './header.css';

function Header() {
  return (
    <div className='header'>
      <ul className='li'>
        <li><Link to="/" style={{color:'black' , textDecoration:'none'}}>Home</Link></li>
        <li><Link to="/shop" style={{color:'black' , textDecoration:'none'}} >Shop All</Link></li>
        <li><Link to="/our" style={{color:'black' , textDecoration:'none'}} >Our Mission</Link></li>
        <li><Link to="/contact" style={{color:'black' , textDecoration:'none'}} >Contact</Link></li>
        <li><Link to="/faq" style={{color:'black' , textDecoration:'none'}} >FAQ</Link></li>
      </ul>
    </div>
  );
}

export default Header;
