import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container grid two" style={{ alignItems: "center" }}>
        <div style={{ maxWidth: 560 }}>
          <div className="about-eyebrow">KNOW ABOUT US</div>
          <h2 className="heading-lg" style={{ marginTop: 16, maxWidth: 520 }}>
            We provide a place for children with special needs
          </h2>
          <p className="text-muted" style={{ marginTop: 12 }}>
            Gyan Jyoti Education Hub is an MSME-funded, NGO-based startup based in Jamshedpur, Jharkhand.
            We are currently operating in an offline model, providing affordable, quality education to all age
            groups, especially in rural areas. Now, we are expanding into the online space to increase reach and impact.
          </p>
        </div>
        <div className="about-media">
          <span className="about-glow" />
          <div className="about-card">
            <img src="/assets/images/Frame 6923.png" alt="about" />
          </div>
        </div>
      </div>
      <div className="about-cta">
        <Link className="btn primary learn-btn" to="/about">
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default About;


