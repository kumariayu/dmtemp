import React from 'react'
import {Link} from 'react-router-dom'

const header = () => {
  return (
      <>
    <nav class="navbar navbar-expand-lg custom-nav-2 fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.php">
                <img src="img/logo-white.png" alt="logo" class="img-fluid"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="ti-menu"></span>
            </button>
            <div class="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto menu">
                    <li><a href="/"> Home</a>
                        
                    </li>
                    <li><a href="about-us.php">About Us</a></li>
                    <li><a href="#" class="dropdown-toggle">Company</a>
                       <ul class="sub-menu">
                            
                            
                            <li><a href="#" class="dropdown-toggle-inner">Team</a>
                                <ul class="sub-menu">
                                    <li><a href="team.php">Our Team Members</a></li>
                                    <li><a href="team-single.php">Team Member Profile</a></li>
                                </ul>
                            </li>
                            <li><a href="our-blog.php">Our Blog</a></li>
                                
                            <li><a href="project-details.php">Project Details </a></li>
                            <li><a href="services-details.php">Services Details</a></li>
                        </ul>
                    </li>
                    <li><a href="services.php">Services</a></li>
                    <li><a href="project.php">Case Study</a></li>
                    <li><a href="contact-us.php">Contact Us</a></li>
                    <Link to="/about-us" className='nav-link'>About us</Link>
                    <Link to="/contact-us" className='nav-link'>Contact us</Link>
                    <Link to="/home" className='nav-link'>Home</Link>
                    <Link to="/services" className='nav-link'>Services</Link>
                    
                </ul>
            </div>
        </div>
    </nav></>
  )
}

export default header