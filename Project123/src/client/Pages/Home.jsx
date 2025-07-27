import React from 'react';
import "../Styles/Home.css"; // Assuming you have a CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome To My Website</h1>
        <p>To Look At My Porfolio</p>
        <a href="/Portfolio" className="cta-button">Click Here</a>
      </header>
    
      <section className="info-section">
        <h2>Explore Our Database</h2>
        <p>
          Dive into detailed information, timelines, and historical context for all major
          military vehicles used in World War II.
        </p>
      </section>

      <section className="feature-section">
        <div className="feature-card">
          <h3>Skills</h3>
          <p className="skills-list">
            React, JavaScript, HTML, CSS, Node.js, Express, MongoDB, Git, and more.
             </p>
        </div>
        <div className="feature-card">
          <h3>Aircraftz</h3>
          <p>Explore bombers, fighters, and reconnaissance aircraft.</p>
        </div>
        <div className="feature-card">
          <h3>Naval Power</h3>
          <p>Browse battleships, destroyers, and aircraft carriers.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
