import React from 'react'
import './contact.css'
import Footer from './footer.jsx'
import IMG12 from './img23.jpg'

function Contact() {
  return (
    <div className='back'>
      <div className='div-1'>
        <h1 className='h1-Get'> Get In Touch</h1>
        <p className='p-We'>We love our customers. Feel free to contact us at any time. We are <br/> available via email, live chat, or phone.</p>

      </div>


      <div className='div-2'>
        <div className='p-div'>
        <p className='p-come'>Come & Say Hi</p>
        <p className='p-re'>Re.vert</p>
        <p className='p-ter'>500 Terry Francine Street<br/>
           San Francisco, CA 94158</p>
      </div>
      
      <div className='div-img'>
        <img className='c-img' src={IMG12} alt='' />
      </div>
     </div> 

     <div className='div-3'> 
      <div className='div-l'>
        <p className='p-Cus'>Customer Service</p>
        <p className='p-ph'>Phone: 123-456-7890</p>
        <p className='p-ph'>Email:  info@mysite.com</p>
        <p className='p-ph'> Monday - Friday 9:00am - 7:00pm EST</p>

      </div>
      <form className='div-R'>
        <label className='l-First'> First Name *</label><br/>
        <input  className='i-First' type='textbox'required /><br/><br/>
        <label  className='l-First'> Last Name*</label><br/>
        <input className='i-First' type='textbox' required/><br/><br/>
        <label  className='l-First'>Email*</label><br/>
        <input className='i-First' type='email' required /><br/><br/>
        <label  className='l-First'>Write a Message*</label><br/>
        <textarea  /><br/>

        <button className='B-sub'>Submit</button>
        


      </form>
     
     </div>
     <Footer />
    </div>
  )
}

export default Contact
