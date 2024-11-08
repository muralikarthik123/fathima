import React from 'react'
import './contactf.css';

function contactf() {
  return (
    <div className='main'>
        <h1 className='h1-C'> Contac Us</h1>
        <h2 className='h1-C'> Get In Touch</h2>
        <div className='form'>
            <form >
                <label className='full'> Full Name</label> <br/>
                <input type='text' className='text' placeholder=' Enter Your Full Name' required/><br/><br/>
                <label  className='full'> Mobile No.</label><br/>
                <input type='number' className='text' placeholder=' Enter Your Mobile No.' required/><br/><br/>
                <label  className='full'> Email</label><br/>
                <input type='email' className='text' placeholder=' Enter Your Email ID' required/><br/><br/>
                <label  className='full'> Message</label><br/>
                <input type='text-area' className='text' placeholder=' Enter Your Message' required/><br/><br/>
                <button className='btn-s' >Send</button>
            </form>
        </div>
      
    </div>
  )
}

export default contactf
