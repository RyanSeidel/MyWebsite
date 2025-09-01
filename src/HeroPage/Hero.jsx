import React from 'react';
import './Hero.css'; // Import the CSS file for styling
import profilePhoto from '/src/assets/RyanSeidel2.png'
function Hero() {
  return (
    <div className="hero-container">
      
      {/* Layer 1: The Image (must be a direct child with the correct class) */}
      <img 
        src={profilePhoto} 
        alt="Ryan Seidel headshot" 
        className="hero-background-image" 
      />
      
      {/* Layer 2: The Content Box (the next direct child) */}
      <div className="content-box">
        
        {/* Column 1 (with 3 rows) */}
        <div>
          <div className="text-block">
        <h3>I'm Ryan,</h3>
        <h4>An aspiring Software Engineer </h4>
        <div className="text-block2">
         <p>I am a Master of Science in Computer Science pursuing at University of Texas at Arlington, concentrating in Embedded Systems.</p>
        </div></div>
        </div> 
        
        {/* Column 2 (the right side) */}
        <div>
          {/* Row 1 */}
          
          <div>
            <p>About Me I love to do blah blah blah </p>
          </div>
          {/* Row 2 */}
          <p>My Work Experience Click this for More </p>
          <button> Click this Noob </button>
          <div>
           
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;