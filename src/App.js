import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './pages/about us'
import ContactUs from './pages/contact us'
import Services from './pages/services'
import Team from './pages/team'


const App=()=>{
  return(
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/services" element={<Services/>}/> 
      <Route path="/team" element={<Team/>}/> 
    </Routes>
  </Router>
  </div>
  )
}
export default App;
