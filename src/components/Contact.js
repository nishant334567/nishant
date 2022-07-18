import React,{useState} from 'react'
import axios from'axios'
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';

function Contact() {
    const [title,setTitle]=useState('');
    const [message,setMessage]=useState("");


    function submitQuery(e){
      // console.log(templateParams);
      emailjs.sendForm('service_thehahp', 'template_1zdld8n', '#form','2qgl64Y8RnOw6iWRn')
      .then((result) => {
          console.log(result.text);
          // console.log(result)
      }, (error) => {
          console.log(error.text);
      });
      e.preventDefault();
      e.target.reset();
    }
  return (
    <>
    

        <div className='contact__heading'>
                <h1>Get in touch !!</h1>
        </div>
        <hr></hr>

        <div id='contact_jump' className='contact'>
            
            <div className='contact-form'>
                <form id='form' className='actual-form' onSubmit={submitQuery} >
                    <input placeholder='Title' name='title' value={title} onChange={e=>setTitle(e.target.value)}/>
                    <input placeholder='Name' name='name'></input>
                    {/* <input type='email' placeholder='Email' name='email'></input> */}
                    <textarea placeholder='Message' name='mess' value={message} onChange={e=>setMessage(e.target.value)}></textarea>
                    <button type='submit'>Send message</button>
                    
                </form>
            </div>
        </div>
    {/* <hr></hr> */}
    </>
  )
}

export default Contact