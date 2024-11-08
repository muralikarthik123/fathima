import React from 'react';
// import Form from './form.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.jsx';  // Make sure 'Home' is properly named in both the component and file
import Header from './header.jsx'; 
import Shop from './shop.jsx';
import Our from './Our.jsx'; // Ensure case sensitivity in file and import path
import Contact from './Contact.jsx'; 
import FAQ from './FAQ.jsx';
// import About from './about.jsx';
// import Contact from './contactf.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/our" element={<Our />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes> 
       </BrowserRouter> 
       
      {/* <About /> */}
      {/* < Contact /> */}
      {/* < Form /> */}
    </div>
  );
}

export default App;
