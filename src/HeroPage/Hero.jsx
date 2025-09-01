import React from 'react';
import './Hero.css'; // Import the CSS file for styling

function Hero() {
  return (
    // Use a container div with a className to apply styles
    <div className="hero-container">
      <h1>Ryan Seidel</h1>
      {/* Updated the tagline to be professional and descriptive */}
      <p>A passionate developer creating web solutions.</p>
      
      {/* Added a call-to-action button to guide users */}
      <button className="cta-button">View My Work</button>
    </div>
  );
}

export default Hero;