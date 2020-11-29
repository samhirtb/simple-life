import React from 'react';
import '../../CSS/styles.css';
import {Link} from 'react-router-dom'

function AboutMeHome() {
    return (
        
        <div className = "home-sidebar-container aboutme-home-container">
            <Link to="/about-me" className="aboutme-home-link">
                <div className="home-sidebar-inner-container">
                    <h2 className="home-sidebar-title">About me</h2>
                    <img className="aboutme-home-img" src="/images/about-me.jpg" alt="simple-life"></img>
                    <p className="aboutme-home-details">I find life better, and I'm happier, when things are nice and simple</p>
                </div>
            </Link>
        </div>
       
    )
}

export default AboutMeHome;