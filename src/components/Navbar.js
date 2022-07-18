import React from 'react'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='nav-logo'>
            <h2>Nishant Thakur</h2>
        </div>

        <div className='nav-items'>
        <ul className='nav-list'>
            <li><Link to ='/'>Home</Link></li>
            <li><a href='#about_jump'>About</a></li>
            <li><a href='#contact_jump'>Contact Me</a></li>
        </ul>
        </div>
    </div>
        
    </>
  )
}

export default Navbar