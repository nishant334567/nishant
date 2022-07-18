import React,{useState} from 'react'
import Photo from '../images/nishant.jpg';

import './Home.css'
import axios from 'axios'
import About from './About';
import Contact from './Contact';


function Home() {
    
  return (
    <main>
        <div id='home' className='my-desc'>
            <div className='my-desc__photo'>
                <img src={Photo}/>
            </div>
            <div className='my-desc__about'>
                <div className='my-desc__about__text'>
                    <h1>Hi ..</h1>
                    <div className='typed-out'><h2>I am Nishant Thakur</h2></div>
                    <p>Thanks for visiting !! So you wanted to know me a bit more.To start with, let me tell 
                        you one interesting fact. <b>It took me 2.2 decade to build this portfolio</b>.
                    </p>
           
                </div>
            </div>
        </div>

        {/* About  */}
        <About/>

        {/* Contact Me form */}
        <Contact/>
    </main>
  )
}

export default Home