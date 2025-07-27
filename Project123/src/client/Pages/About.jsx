import React from 'react';
import '../Styles/About.css'; // Assuming you have a CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Fletcher Burton</h1>
      <p className="intro">
        Welcome to <strong>FrontlineDB</strong> — a project born out of a passion for World War II history,
        military engineering, and community knowledge sharing.
      </p>

      {/* <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To create a reliable, visually engaging database that explores the technical, tactical,
          and historical aspects of WWII tanks, aircraft, and naval vessels.
        </p>
      </section> */}

      {/* <section className="values">
        <h2>Why This Matters</h2>
        <p>
          By preserving these details, we hope to educate new generations, honor past sacrifices,
          and offer a space for enthusiasts and researchers alike.
        </p>
      </section> */}

    </div>
  );
}

export default About;
