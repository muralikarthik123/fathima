import React from 'react'
import './about.css';
import IMG1 from './img1.jpg';
import IMG2 from './img2.jpg';

function About() {
  return (
    <div className='bgf'>
        <h1 className='h1'>About Us</h1>
        <div className='imgdiv'>
          <img  className='img1' src={IMG1} alt=''/>
      </div>
      <div className="p-div">
        <p className='para1'>If you are willing to find your dream government job, allgovernmentjobs is probably the best website you can ever visit. Right from letting you find government jobs to providing a sleek and easy interface, we are simply the best.<br/><br/>

We deliver government jobs information in different sectors. Ranging from Finance, Engineering to Sports Quota, our website is the one stop destination to all your government job queries. With us, you can find your wishful jobs based on qualification metrics.<br/><br/>

Also, we deliver notifications for every single job post so that you don’t miss on any essential job posting. The notifications are delivered for every single job posts where you can visit the website and see your category jobs.<br/><br/>

We perform deep analysis and bring to you top jobs by recruitment boards. Be it the AAI, AHC, AIMMS, Delhi or any other board; you can trust us to bring the best possible job information in lesser time. <br/></p>
</div>
<h2 className='h2'> Take a glance at our government job categories</h2>
<div className='glance'>
     
    <div className='med1'>
       <p className='med'>Medical</p>
       <p className='med'> Engineering</p>
       <p className='med'>Law</p>
       <p className='med'>Finance</p>
       <p className='med'>Paramedical</p>
       <p className='med'>Pharmacy</p>
    </div>

    <div className='med2'>
       <p className='med'>Medical</p>
       <p className='med'> Engineering</p>
       <p className='med'>Law</p>
       <p className='med'>Finance</p>
       <p className='med'>Paramedical</p>
       <p className='med'>Pharmacy</p>
    </div>
 

</div>
<h2 className='h2'> Who founded MBgovernmentjobs.in?</h2>
<div className='who'>
    <div className='img2div'>
        <img className='img2' src ={IMG2} alt='' />
    </div>
    <div className='g-div'>
        <p>Goli Giriram</p>
        <p>Founder & CEO at Botup Technologies</p>
        <p>Rohit Gatla, the Founder and Chief Executive Officer of Botup Technologies Pvt Ltd, graduated from JNTU Hyderabad. Accomplished with numerous awards and compliments such as the Social Media Influencer Awardee and Accelerator from T-Hub Lab32, ISB ISLAB and Y-Combinator. Rohit has been a driving force behind Allgovernmentjobs.in, with over 12 years of experience in understanding education and employment market trends, he utilizes his expertise effectively. Through Allgovernmentjobs.in, Rohit shares career guidance with over a lakh of people across India, showcasing his extensive experience and commitment to helping individuals navigate their professional paths.</p>
    </div>
</div>
</div>
  )
}

export default About
