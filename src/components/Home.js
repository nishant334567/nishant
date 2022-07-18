import React,{useState} from 'react'
import Photo from '../images/nishant.jpg';
import Prof from '../images/dev-icon.jpg';
import Pass from '../images/guitar.png';
import './Home.css'
import axios from 'axios'


function Home() {
    const [title,setTitle]=useState('');
    const [message,setMessage]=useState("");
    async function submitQuery(e){
        e.preventDefault();
        console.log(title,message)
        await axios.post('http://localhost:5000/query', {
            title: title,
            message: message
        }).then(res=>console.log(res))
    }
  return (
    <main>
        <div id='home' className='my-desc'>
            <div className='my-desc__photo'>
                <img src={Photo}/>
            </div>
            <div className='my-desc__about'>
                <div className='my-desc__about__text'>
                    <h1>Hi ..</h1>
                    <h2>I am Nishant Thakur</h2>
                    <p>Thanks for visiting !! So you wanted to know me a bit more. To start with, let me tell 
                        you one interesting fact. <b>It took me 2.2 decade to build this portfolio</b>.
                        Yes you guessed it right I am an average guy 👶👶

                    </p>
           
                </div>
            </div>
        </div>

        {/* About  */}
        <div className='about__heading'><h1>About Me !!</h1></div>

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

        {/* Contact Me form */}
        <div className='contact__heading'>
                <h1>Get in touch !!</h1>
        </div>
        <div id='contact_jump' className='contact'>
            
            <div className='contact-form'>
                <form className='actual-form' onSubmit={submitQuery} >
                    <input placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
                    <textarea placeholder='Message' value={message} onChange={e=>setMessage(e.target.value)}></textarea>
                    <button type='submit'>Send message</button>
                    
                </form>
            </div>
        </div>
    </main>
  )
}

export default Home