import React from "react";
import CTABanner from "../sections/CTABanner";
import Footer from "../sections/Footer";

const WhatWeDo = () => {
  return (
    <main className="whatwedo-page">
      <section className="wwd-hero section">
        <div className="container">
          <h1 className="wwd-heading">What We Do ?</h1>
          <div className="wwd-grid">
            <div className="wwd-card">
              <div className="wwd-shape">
                <img src="/assets/images/what_we_do/img1.png" alt="We Welcome" />
              </div>
              <h3 className="wwd-title">We Welcome</h3>
              <p className="wwd-text">We welcome students of all age groups and backgrounds</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-shape">
                <img src="/assets/images/what_we_do/img2.png" alt="We Care" />
              </div>
              <h3 className="wwd-title">We Care</h3>
              <p className="wwd-text">We care for their academic, emotional, and social development</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-shape">
                <img src="/assets/images/what_we_do/img3.png" alt="We Heal" />
              </div>
              <h3 className="wwd-title">We Heal</h3>
              <p className="wwd-text">We heal educational gaps through creative learning</p>
            </div>
            <div className="wwd-card">
              <div className="wwd-shape">
                <img src="/assets/images/what_we_do/img4.png" alt="We Prepare" />
              </div>
              <h3 className="wwd-title">We Prepare</h3>
              <p className="wwd-text">We prepare children for lifelong growth through values and skills</p>
            </div>
          </div>
        </div>
      </section>
      <section className="wwd-special section">
        <div className="container">
          <h2 className="wwd-sn-heading">What we do for our kids with special needs</h2>
          <div className="wwd-sn-grid">
            <div className="sn-col">
              <div className="sn-head"><img className="sn-icon-img" src="/assets/images/what_we_do/education.png" alt="" aria-hidden="true" /> <span>Educational Services</span></div>
              <ul className="sn-list">
                <li>
                  <strong>Affordable Education for All Age Groups</strong>
                  <p>From play school to graduate-level support.</p>
                </li>
                <li>
                  <strong>Low-Cost Computer Education</strong>
                  <p>Digital literacy for primary and middle school students.</p>
                </li>
                <li>
                  <strong>Government Exam Coaching</strong>
                  <p>Support for high school and graduate students preparing for competitive exams.</p>
                </li>
                <li>
                  <strong>Scholarship Examinations</strong>
                  <p>Identify and support talented students with financial aid.</p>
                </li>
              </ul>
            </div>
            <div className="sn-col">
              <div className="sn-head"><img className="sn-icon-img" src="/assets/images/what_we_do/education.png" alt="" aria-hidden="true" /> <span>Skill Development</span></div>
              <ul className="sn-list">
                <li>
                  <strong>Camps & Workshops</strong>
                  <p>Activity-based learning to promote creativity and life skills.</p>
                </li>
                <li>
                  <strong>Sports Activities</strong>
                  <p>Games and physical exercises for overall development.</p>
                </li>
                <li>
                  <strong>Training Programs</strong>
                  <p>Short-term training for practical and job-oriented skills.</p>
                </li>
              </ul>
            </div>
            <div className="sn-col">
              <div className="sn-head"><img className="sn-icon-img" src="/assets/images/what_we_do/education.png" alt="" aria-hidden="true" /> <span>Community Support</span></div>
              <ul className="sn-list">
                <li>
                  <strong>Social Welfare Initiatives</strong>
                  <p>Awareness programs, drives, and essential aid distribution.</p>
                </li>
                <li>
                  <strong>Crowdfunding & Social Support</strong>
                  <p>Donation system to support underprivileged learners.</p>
                </li>
                <li>
                  <strong>Study Material Shop</strong>
                  <p>Affordable books, stationery, and learning tools.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="impact section">
        <div className="container impact-inner">
          <h2 className="impact-title">Our Impact</h2>
          <div className="impact-strip">
            <div className="impact-item">
              <div className="impact-num">500</div>
              <div className="impact-label">Students</div>
            </div>
            <div className="impact-item">
              <div className="impact-num">3</div>
              <div className="impact-label">Districts</div>
            </div>
            <div className="impact-item">
              <div className="impact-num">15+</div>
              <div className="impact-label">Campaigns</div>
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
};

export default WhatWeDo;


