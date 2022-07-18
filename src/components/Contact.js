import React,{useState} from 'react'
import axios from'axios'
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';

function Contact() {
  
  function submitQuery(e){
      // console.log(templateParams);
      e.preventDefault();
      emailjs.sendForm('service_thehahp', 'template_1zdld8n', '#form','2qgl64Y8RnOw6iWRn')
      .then((result) => {
          document.getElementById('form').reset();
          alert('You message was sent to Nishant successfully')
          
      }, (error) => {
          alert(error.text, "Please Try Again!! Something bad occured")
      });
      
      // e.target.reset();
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
                    <input placeholder='Title' name='title'/>
                    <input placeholder='Name' name='name'/>
                    {/* <input type='email' placeholder='Email' name='email'></input> */}
                    <textarea placeholder='Message' name='mess'/>
                    <button type='submit'>Send message</button>
                    
                </form>
            </div>
        </div>
    {/* <hr></hr> */}
    </>
  )
}

export default Contact