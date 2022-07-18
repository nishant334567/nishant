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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est 
                        laborum.</p>
           
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
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <div className='passion'>
                <div className='passion__about'>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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