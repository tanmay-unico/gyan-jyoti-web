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
    { name: "Rubi Mahato", role: "Math teacher - M.Sc B.Ed", image: "/assets/images/meet_our_team/rubi_mahato.jpg" },
    { name: "Jeevan Kumar Yadav", role: "Content & visual communication officer - M.Com, B.Ed, CTET & STET qualified", image: "/assets/images/meet_our_team/jeevan_kumar_yadav.jpg", objectPosition: "center 45%" },
    { name: "Piyush Bhakat", role: "B.Tech", image: "/assets/images/meet_our_team/piyush_bhakat.jpg" },
    { name: "Prabir Hansda", role: "Social media handling", image: "/assets/images/meet_our_team/prabir_hansda.jpg" },
    { name: "Bilpov Gorai", role: "Content & visual communication", image: "/assets/images/meet_our_team/bilpov_gorai.jpg", objectPosition: "center 10%" },
    { name: "Ruma Ahmad", role: "Activity teacher", image: "/assets/images/meet_our_team/ruma_ahmad.jpg" },
    { name: "Polomi Bhakat", role: "English teacher - M.A", image: "/assets/images/meet_our_team/polomi_bhakat.jpg" },
    { name: "Chaya Rani Bhakat", role: "Yoga teacher", image: "/assets/images/meet_our_team/chaya_rani_bhakat.jpg" },
    { name: "Rakesh Manna", role: "Graphics designer - B.A", image: "/assets/images/meet_our_team/rakesh_manna.jpg" },
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
              <button className="video-play" aria-label="Play video">
                <img src="/assets/images/Play_icon.png" alt="Play" />
              </button>
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


