import React from 'react'
import Prof from '../images/dev-icon.jpg';
import Pass from '../images/guitar.png';

function About() {
  return (
    <>
  
        <div className='about__heading'><h1>About Me !!</h1></div>
        <hr></hr>
          <div id='about_jump' className='about'>
              <div className='profession'>
                  <div className='profession__image'>
                      <img src={Prof}/>
                  </div>
                  <div className='profession__about'>
                      <p>
                          I am 2022 graduate from NIT Allahabad, specialised in Electronics and 
                          Communication Engineering. I am working as a DIGITAL ENGINEER in Tata 
                          Digital Pvt LTD. 
                      </p>
                      </div>
              </div>

<hr></hr>     
         <div className='passion'>
                  <div className='passion__about'>
                      <p>
                        I started playing guitar in my college 1st year. My love for music increased
                        and gradually I started playing other instruments, writing my own songs and 
                        composing. I have wrote few songs and soon you'll hear those !!
                        Do hit the like and subscribe button, whenever its out on internet. 🙃🙃 
                      </p>
                      </div> 
                  <div className='passion__image'>
                      <img src={Pass}/>
                  </div>
              </div>
          </div>
    </>
  )
}

export default About