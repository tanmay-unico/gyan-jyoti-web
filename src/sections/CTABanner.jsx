import React from "react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section id="donate" className="section cta">
      <div className="container">
        <div className="card" style={{ position: "relative", overflow: "hidden" }}>
          <img src="/assets/images/contact.png" alt="cta" style={{ width: "100%", height: 420, objectFit: "cover" }} />
          <div className="overlay" />
          <div className="content">
            <div style={{ maxWidth: 700 }}>
              <h3 className="heading-lg" style={{ color: "#fff", margin: 0, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2 }}>You can contribute to provide a place for children with special needs!</h3>
              <div style={{ marginTop: 24, display: "flex", gap: 16, justifyContent: "center" }}>
                <Link to="/donate" className="btn primary">Join us a Volunteer</Link>
                <Link to="/donate" className="btn yellow">Donate</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;


