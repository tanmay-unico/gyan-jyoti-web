import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormModal from "../components/FormModal";

const CTABanner = () => {
  const [isVolunteerFormOpen, setIsVolunteerFormOpen] = useState(false);
  const [isDonateFormOpen, setIsDonateFormOpen] = useState(false);

  const VOLUNTEER_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfwpr6pzt1GkUbgTk0u803l1hmoknLO6J8iiTaEL3BbFHSXoA/viewform?embedded=true";
  
  const DONATE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeiwFBKe35NKunPUwQ5IqRY0-41lBWP2hY2g9cIve2Y0yLGjQ/viewform?embedded=true";

  return (
    <>
      <section id="donate" className="section cta">
        <div className="container">
          <div className="card" style={{ position: "relative", overflow: "hidden" }}>
            <img src="/assets/images/contact.png" alt="cta" style={{ width: "100%", height: 420, objectFit: "cover" }} />
            <div className="overlay" />
            <div className="content">
              <div style={{ maxWidth: 700 }}>
                <h3 className="heading-lg" style={{ color: "#fff", margin: 0, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2 }}>You can contribute to provide a place for children with special needs!</h3>
                <div style={{ marginTop: 24, display: "flex", gap: 16, justifyContent: "center" }}>
                  <button className="btn primary" type="button" onClick={() => setIsVolunteerFormOpen(true)}>Join us as Volunteer</button>
                  <button className="btn yellow" type="button" onClick={() => setIsDonateFormOpen(true)}>Donate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormModal
        isOpen={isVolunteerFormOpen}
        onClose={() => setIsVolunteerFormOpen(false)}
        formUrl={VOLUNTEER_FORM_URL}
        title="Volunteer - Gyan Jyoti Education Hub (Google Form)"
      />

      <FormModal
        isOpen={isDonateFormOpen}
        onClose={() => setIsDonateFormOpen(false)}
        formUrl={DONATE_FORM_URL}
        title="Donate - Gyan Jyoti Education Hub (Google Form)"
      />
    </>
  );
};

export default CTABanner;


