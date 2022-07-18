import React from 'react'
import logo from '../images/insta_logo.png'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
            <footer className='footer'>
            <ul className='nav-list'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about_jump'>About</a></li>
            <li><a href='#contact_jump'>Contact Me</a></li>
            </ul>
            <div className='footer-note'>
                <p>©All rights are reserved to the owner of this portfolio.</p>
            </div>
            </footer>
    </>
  )
}

export default Footer