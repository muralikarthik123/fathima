import React from 'react'
import './footer.css'

function footer() {
  return (
    <div>
      <div className="footer">
        <div className="left">
          <h1 className='h1-stay'>
          Stay inspired and <br /> eco-conscious</h1>
          <p className='p-rec'> Receive the latest trends and tips on eco-friendly design, <br/> sustainable living, zero waste and eco-conscious practices.</p>
          <label className='l-email'> Email</label> <br/> <br/>
          <input className='i-email' type='email' placeholder='Enter your email' /> <br/> <br/>
          <button className='Sub'>Submit</button>
        </div>
        <div className="right">
          <div className='R-sub'>
          <ul>
            <li> Home</li>
            <li>Shop All</li>
            <li>Our Mission</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Kitchen</li>
            <li>Bath</li>
            <li>On the Go</li>
            <li>Sale</li>
          </ul> 
           <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Cookie Policy</li>
           </ul>
        </div>
        </div>
       </div>
    </div>
  )
}

export default footer
