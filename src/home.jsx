import React from 'react'
import './home.css'
import Footer from './footer.jsx'

import IMG21 from './img4.jpg'
import IMG3 from './img5.jpg'
import IMG4 from './img11.jpg'
import IMG5 from './img14.jpg'
import IMG6 from './img21.png'
import IMG7 from './kitchen.jpg'
import IMG8 from './brush.jpg'
import IMG9 from './bottle.jpg'
import { GiNuclearWaste } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { BsRecycle } from "react-icons/bs";
import { FaTradeFederation } from "react-icons/fa6";


function Home() {
  
  return (
    <div className='main'>
        
          <div className='div0'>
        
           <div className='RE'>
           <p className='REV'>REVERT</p>
           <p className='Home'>Home Essentials for Sustainable Living</p>
           <button className='shop'>Shop Now</button>
           </div>
          </div>

          <div className='div1'>
            <p className='new'>New In</p>
            <div className='div-new'>
             <div>
              <img className='img21' src={IMG21} alt='' />
              <p className='eco' >Eco Glass <br/>
                $5.50
              </p>
            </div>
          <div>
            <img className='img21' src={IMG3} alt='' />
            <p  className='eco'>Bamboo  <br/>
              ToothBrush <br/>
              $5.50
            </p>
          </div>
            <div>
              <img className='img21' src={IMG4} alt='' />
              <p   className='eco'>Seaweed Natural <br/>
               Soap <br/>
                $5.50
              </p>
            </div>
              <div>
              <img className='img21' src={IMG5} alt='' />
              <p  className='eco' >Organic cotton<br/>
              Mesh Bags<br/>
                $5.50
              </p>
              </div>
            </div>
          </div>
        
        <div className='div2'>
         <div className='div-l'>
          <p className='Z'>Zero Waste
          Bath <br/> Products</p>
          <p className='W'>Where Quality meets eco-friendly</p>
          <button className='S'>Shop Now</button>
        </div>
         <div className='div-r'>
            <img className='img21' src={IMG6} alt='' />
         </div>
        </div>
       
       <div className='div3'> 
        <p className='new'> Shop Collections</p>
        <div className='img3div'>
      <img className='img71' src={IMG7} alt='' />
      <div className='imagetext'>
        <h2>Kitchen</h2>
        <p>Shop Collections</p>
      </div>
      <img className='img72' src={IMG8} alt='' />
      <div className='imagetext'>
        <h2>Kitchen</h2>
        <p>Shop Collections</p>
      </div>
      <img className='img8' src={IMG9} alt='' />
      <div className='imagetext'>
        <h2>Kitchen</h2>
        <p>Shop Collections</p>
      </div>
      </div>
       </div>

       <div className="div4"> {/*container 4 */}
         <h1 className='h1-the'>The Revert Mission</h1>
        <p className='p-we'>We believe in ethical and smart shopping. All of our products are carefully <br/> selected to ensure they align with our core values.</p>
        <div className='icondiv'>
          <div>
         <GiNuclearWaste className='icon1' />
          <p className='Waste'>  Waste</p>
          </div>
          <div>
           <LuVegan className='icon1' />
           <p className='Waste'>Vegan</p>
           </div>
           <div>
            <BsRecycle  className='icon1'/>
             <p className='Waste'>Recycle</p>
             </div>
             <div>
              <FaTradeFederation className='icon1' />
              <p className='Waste'>Fair Trade</p>
              </div>
          </div>
        <p className='p-I'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        ​</p>
        <p className='p-I'>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
       <button  className='S'>Learn More</button>
       </div>

       <div className="div5">
        <div className="background">
          <p className='happen'>Happening Now!</p>
          <h1 className='week'> Weekend Sale</h1>
          <button className='shop'>Shop Now</button>
        </div>
       </div>

      < Footer />

    </div>
  )
}

export default Home;
