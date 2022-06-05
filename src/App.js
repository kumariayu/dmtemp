import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './pages/about us'
import ContactUs from './pages/contact us'
import Services from './pages/services'


const App=()=>{
  return(
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/services" element={<Services/>}/> 
    </Routes>
  </Router>
  </div>
  )
}
export default App;
