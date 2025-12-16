import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="work" className="section services">
      <div className="container grid two" style={{ alignItems: "center" }}>
        <div style={{ maxWidth: 560 }}>
          <div className="about-eyebrow">OUR SERVICES</div>
          <h2 className="heading-lg" style={{ marginTop: 16 }}>Some services we provide for our children</h2>
          <div className="service-list">
            <div className="service-row"><span className="svc-badge"><span className="svc-icon" aria-hidden="true" />Educational support</span></div>
            <div className="service-row"><span className="svc-badge"><span className="svc-icon" aria-hidden="true" />Skill and Personality Development</span></div>
            <div className="service-row"><span className="svc-badge"><span className="svc-icon" aria-hidden="true" />Community and welfare support</span></div>
          </div>
          <Link className="btn primary learn-btn services-learn-desktop" style={{ marginTop: 24 }} to="/what-we-do">Learn more</Link>
        </div>
        <div className="services-media">
          <img className="services-img" src="/assets/images/what_we_do_boy.png" alt="service" />
        </div>
      </div>
      <div className="services-cta-mobile">
        <Link className="btn primary learn-btn" to="/what-we-do">Learn more</Link>
      </div>
      <img className="services-bg" src="/assets/images/BG.png" alt="" aria-hidden="true" />
    </section>
  );
};

export default Services;


