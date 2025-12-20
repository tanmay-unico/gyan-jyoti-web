import React, { useEffect, useRef, useState } from "react";
import Footer from "../sections/Footer";

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const teamSliderRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const el = teamSliderRef.current;
    if (!el) return;

    const handleScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 2) {
        el.scrollLeft = 0;
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const teamMembers = [
    { name: "Mohit Kumar Pal", role: "Computer Teacher", image: "/assets/images/meet_our_team/mohit_kumar_pal.png" },
    { name: "Jeevan Kumar Yadav", role: "General Competitive Exams Educator", image: "/assets/images/meet_our_team/jeevan_kumar_yadav.png" },
    { name: "Poulami Bhakat", role: "English Teacher", image: "/assets/images/meet_our_team/poulami_bhakat.png" },
    { name: "Apurbo Paul", role: "Yoga Teacher", image: "/assets/images/meet_our_team/apurbo_paul.png" },
    { name: "Rubi Mahato", role: "Maths Teacher", image: "/assets/images/meet_our_team/rubi_mahato.png" },
    { name: "Asit Kumar Paul", role: "Competitive Exams Educator", image: "/assets/images/meet_our_team/asit_kumar_paul.png" },
    { name: "Pratima Hembram", role: "English Teacher", image: "/assets/images/meet_our_team/pratima_hembram.png" },
    { name: "Ruma Ahmad", role: "Activity Teacher", image: "/assets/images/meet_our_team/ruma_ahmad.png" },
    { name: "Jotshna", role: "Notes Maker", image: "/assets/images/meet_our_team/jotshna.png" },
    { name: "Barsha Shaw", role: "Junior Teacher", image: "/assets/images/meet_our_team/barsha_shaw.png" },
    { name: "Biplov Gorai", role: "Content and Visual Communication", image: "/assets/images/meet_our_team/biplov_gorai.png" },
    { name: "Chaya Rani Bhakat", role: "Yoga Teacher", image: "/assets/images/meet_our_team/chaya_rani_bhakat.png" },
    { name: "Hari Chand", role: "Sports Teacher", image: "/assets/images/meet_our_team/hari_chand.png" },
    { name: "Piyush Bhakat", role: "Computer Teacher", image: "/assets/images/meet_our_team/piyush_bhakat.png" },
    { name: "Nisha Dey", role: "Activity Teacher", image: "/assets/images/meet_our_team/nisha_dey.png" },
    { name: "Himadri Bhakat", role: "Graphics Designer", image: "/assets/images/meet_our_team/himadri_bhakat.png" },
  ];

  const displayMembers = isMobile ? [...teamMembers, ...teamMembers] : teamMembers;

  return (
    <main>
      <section className="about-page">
        <div className="container about-layout">
          <div>
            <div className="about-eyebrow">KNOW ABOUT US</div>
            <h1 className="about-title">We are a non-governmental organization</h1>
          </div>
          <div className="about-right">
            <p className="about-desc">
              Gyan Jyoti Education Hub is an MSME-funded, NGO-based startup based in Jamshedpur, Jharkhand. We are
              currently operating in an offline model, providing affordable, quality education to all age groups,
              especially in rural areas. Now, we are expanding into the online space to increase reach and impact.
            </p>
          </div>
          <div className="about-video-block">
            <div className="video-card">
              <img className="video-bg" src="/assets/images/about_us/Video.png" alt="Volunteers celebrating" />
            </div>
          </div>
        </div>
        <div className="about-band">
          <div className="container band-grid">
            <div className="band-item">
              <div className="band-eyebrow">OUR MISSION</div>
              <p className="band-text">
                To empower rural and tribal communities through affordable, value-based education and holistic
                development.
              </p>
            </div>
            <div className="band-item">
              <div className="band-eyebrow">OUR VISION</div>
              <p className="band-text">
                To become a sustainable center of learning that prepares children to grow, lead, and thrive in life and
                society
              </p>
            </div>
          </div>
        </div>

        {/* What We Believe In */}
        <section className="believe-section">
          <div className="container">
            <h2 className="believe-title">What We Believe In</h2>
            <div className="believe-layout">
              <div className="believe-image">
                <img src="/assets/images/3Cs.png" alt="3Cs - Courage, Confidence, Creativity" />
              </div>
              <div className="believe-content">
                <div className="believe-item">
                  <h3 className="believe-value">Courage:</h3>
                  <p className="believe-desc">We encourage children to face challenges and stand up for themselves.</p>
                </div>
                <div className="believe-item">
                  <h3 className="believe-value">Confidence:</h3>
                  <p className="believe-desc">We help learners believe in their abilities and express themselves freely.</p>
                </div>
                <div className="believe-item">
                  <h3 className="believe-value">Creativity:</h3>
                  <p className="believe-desc">We nurture imagination, curiosity, and innovative thinking.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognitions */}
        <section className="recognitions">
          <div className="recognitions-strip" />
          <div className="container recognitions-inner">
            <h2 className="recognitions-title">
              <span className="medal" aria-hidden="true" />
              Recognitions
            </h2>
            <div className="recognitions-grid">
              <div className="rec-card">
                <span className="rec-badge" />
                <p>Community Appreciation for Summer Camp 2025</p>
              </div>
              <div className="rec-card">
                <span className="rec-badge" />
                <p>Recognized locally for innovation in rural education Summer Camp 2025</p>
              </div>
              <div className="rec-card">
                <span className="rec-badge" />
                <p>Felicitated students and contributors in closing ceremony</p>
              </div>
            </div>
            <img className="rec-circle left" src="/assets/images/Union.png" alt="" aria-hidden="true" />
            <img className="rec-circle right" src="/assets/images/Union.png" alt="" aria-hidden="true" />
          </div>
        </section>

        {/* Our Journey */}
        <section className="journey">
          <div className="journey-banner">
            <div className="container">
              <h2 className="journey-title">Our Journey</h2>
              <p className="journey-sub">A story of five hearts, countless dreams, and one powerful mission.</p>
            </div>
            <div className="journey-cards">
              <div className="journey-card left">
                <p>
                  In 2022, a quiet revolution began with just five eager learners and one determined soul — Dr. Asha Rani Paul. With a heart rooted in compassion and a dream to transform rural and tribal education, she laid the first brick of what would become Gyan Jyoti Education Hub.
                  <br /><br />
                  Each child who walked through our door brought with them a story — of struggle, silence, and hope. And we listened.
                  <br />
                  We taught.
                  <br />
                  We believed.
                </p>
              </div>
              <div className="journey-card right">
                <p>
                  What began under humble roofs is now a thriving haven for over 100 young minds — minds that code, create, speak, and shine. From basic literacy to computer skills, from cultural confidence to personal growth, we’ve built more than a classroom.
                  <br />
                  We've built a community.
                  <br /><br />
                  With every lesson taught, a barrier breaks.
                  <br />
                  With every smile returned, a future takes shape.
                  <br />
                  And with every step forward, our journey becomes a shared one — written not just by us, but by everyone who believes that education is the light that never dims.
                </p>
              </div>
            </div>
          </div>
          <div className="container journey-inner">
            <img className="journey-figure" src="/assets/images/about_us/women_with_coffe.png" alt="Girl with coffee" />
          </div>
        </section>
      </section>

      {/* Meet Our Team */}
      <section className="team">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-sub">A passionate group of educators, dreamers, and change-makers — united by a shared mission to uplift every child through the power of education and empathy.</p>
        </div>
        <div className="container team-grid" ref={teamSliderRef}>
          {displayMembers.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-photo">
                <span className="team-oval" />
                <img
                  src={m.image}
                  alt={m.name}
                  style={m.objectPosition ? { objectPosition: m.objectPosition } : undefined}
                />
              </div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Events */}
      <section className="events">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="events-title">Our Events</h2>
        </div>
        <div className="container event-grid">
          <div className="event-card">Annual summer camp</div>
          <div className="event-card">Sports campaign</div>
          <div className="event-card">Drawing competition</div>
          <div className="event-card">Brain games</div>
          <div className="event-card event-wide">Award ceremonies</div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;


