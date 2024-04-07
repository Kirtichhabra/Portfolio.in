import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
      <section className="hero-container">
       <div className="hero-conent">
        <h1>Building Digital Experieces That Inspire</h1>
        <p><h3>Passionate about frontend development | Thrive on creating user-centric interfaces that drive engagement and elevate brands.</h3></p>
       </div>

       <div className="hero-img">
        <div>
            <div className="tech-icon">
                <img src="C:\Users\Testbook\Downloads\Angular.png" alt=""/>
            </div>
            <img src="./assests/images/javascript1.jfif" alt=""/>

        </div>
        <div>
            <div className="tech-icon">
            <img src="./assests/images/angular1.png" alt=""/>
            </div>
            <div className="tech-icon">
            <img src="./assests/images/css1.png" alt=""/>
            </div>
            <div className="tech-icon">
            <img src="./assests/images/HTML1.jfif" alt=""/>
            </div>
        </div>
       </div>
      </section>
        );
}

export default Hero;
