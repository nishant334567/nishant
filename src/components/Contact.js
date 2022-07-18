import React,{useState} from 'react'
import axios from'axios'

function Contact() {
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
    <>
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
    </>
  )
}

export default Contact