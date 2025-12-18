import React, { useEffect, useState } from "react";
import Footer from "../sections/Footer";

const DonatePage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeiwFBKe35NKunPUwQ5IqRY0-41lBWP2hY2g9cIve2Y0yLGjQ/viewform?embedded=true";

  useEffect(() => {
    if (!isFormOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsFormOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    // Prevent background scroll while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isFormOpen]);

  return (
    <main className="donate-page">
      <section className="donate-hero section">
        <div className="container donate-layout">
          <div className="donate-left">
            <div className="donate-kicker">DONATION</div>
            <h1 className="donate-title">Making a donation for our children.</h1>
            <p className="donate-sub">When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow.</p>
            <div className="donate-actions">
              <button className="btn primary" type="button" onClick={() => setIsFormOpen(true)}>
                Donate now
              </button>
            </div>
          </div>
          <div className="donate-right">
            <img src="/assets/images/donation/right.png" alt="Donate" className="donate-img" />
          </div>
        </div>
      </section>

      {isFormOpen && (
        <div
          className="modal-overlay"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsFormOpen(false);
          }}
        >
          <div className="modal" role="dialog" aria-modal="true" aria-label="Donate form">
            <button className="modal-close" type="button" aria-label="Close dialog" onClick={() => setIsFormOpen(false)}>
              ×
            </button>
            <iframe
              className="modal-iframe"
              src={FORM_URL}
              title="Donate - Gyan Jyoti Education Hub (Google Form)"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}

      <section className="donate-why section">
        <div className="container">
          <div className="why-bg" aria-hidden="true" />
          <h2 className="why-title">Why Contribute?</h2>
          <p className="why-intro">Contributing to Gyan Jyoti Education Hub is more than just supporting an organization — it is an investment in the future of children who are often left behind due to poverty, lack of resources, and limited access to quality education. Many of our students come from rural and tribal backgrounds, where education is often a luxury rather than a right.</p>

          <div className="why-block">
            <div className="why-lead">Your support helps us:</div>
            <ul className="why-list">
              <li>Bridge the educational gap for children in underserved communities</li>
              <li>Provide free or low-cost learning materials, books, and stationery</li>
              <li>Train and retain dedicated local teachers and mentors</li>
              <li>Offer safe, structured environments for students to learn and grow</li>
              <li>Organize camps, competitions, and cultural activities that build confidence</li>
              <li>Introduce digital learning and computer education to children who’ve never used a device</li>
              <li>Ensure every child feels seen, valued, and capable of achieving their dreams</li>
            </ul>
          </div>

          <p className="why-outro">When you contribute, you are empowering a generation to break cycles of poverty, become self-reliant, and lead their communities with confidence. Even the smallest donation can make a meaningful difference. Education is not a privilege — it’s a right. Your contribution brings that right closer to reality for every child we serve.</p>
        </div>
      </section>
      <section className="donate-how section">
        <div className="container">
          <h2 className="how-title">How You Can Contribute ?</h2>
          <div className="how-grid">
            <div className="how-col left">
              <figure className="how-card tall">
                <img src="/assets/images/donation/img1.jpg" alt="Help fund education programs, books, and learning kits" />
                <figcaption>Help fund education programs,<br/>books, and learning kits</figcaption>
              </figure>
              <figure className="how-card short">
                <img src="/assets/images/donation/img2.jpg" alt="Donate" />
              </figure>
            </div>
            <div className="how-col center">
              <figure className="how-card center-card">
                <img src="/assets/images/donation/img4.jpg" alt="Sponsor events and scholarship" />
                <figcaption>Sponsor events and scholarship</figcaption>
              </figure>
            </div>
            <div className="how-col right">
              <figure className="how-card small">
                <img src="/assets/images/donation/img3.jpg" alt="Provide basic infrastructure support" />
                <figcaption>Provide basic infrastructure<br/>support</figcaption>
              </figure>
              <figure className="how-card short">
                <img src="/assets/images/donation/img5.png" alt="Donation drive" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="donate-help section">
        <div className="container help-inner">
          <h2 className="help-title">How You Help ?</h2>
          <div className="help-grid">
            <div className="help-card">
              <div className="help-shape"><img src="/assets/images/donation/sponsor_child.png" alt="Sponsor a Child" /></div>
              <h3 className="help-head">Sponsor a Child</h3>
              <p className="help-text">Be the reason of child eats, learns and dreams again. Your monthly support covers education, food, clothing and care, giving one child the childhood they deserve.</p>
              <a className="help-link" href="#">Sponsor Now</a>
            </div>
            <div className="help-card">
              <div className="help-shape"><img src="/assets/images/donation/spread_the_world.png" alt="Spread the World" /></div>
              <h3 className="help-head">Spread the World</h3>
              <p className="help-text">One share can spark one life-changing connection. Talk about us. Share our mission. You might lead someone to the child they were meant to help.</p>
              <a className="help-link" href="#">Share our Story</a>
            </div>
            <div className="help-card">
              <div className="help-shape"><img src="/assets/images/donation/volunteer_time.png" alt="Volunteer your time" /></div>
              <h3 className="help-head">Volunteer your time</h3>
              <p className="help-text">Your time is the most beautiful gift. Teach, play, mentor or simply be there. Even a few hours can plant lifelong hope in a child’s heart.</p>
              <a className="help-link" href="#">Join as Volunteer</a>
            </div>
          </div>
          <div className="help-cta">
            <button className="btn primary">Get Involved</button>
          </div>
          <p className="help-foot">You dont need to change the world - just change one child's world.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default DonatePage;


