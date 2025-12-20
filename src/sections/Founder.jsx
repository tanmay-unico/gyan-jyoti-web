import React from "react";

const Founder = () => {
  return (
    <section id="founder" className="section founder">
      <div className="container grid two" style={{ alignItems: "center" }}>
        <div className="founder-left">
          <img
            src="/assets/images/Book.png"
            alt="book icon"
            className="founder-book"
          />
          <div className="founder-eyebrow">OUR FOUNDER’S MESSAGE</div>
          <h2 className="heading-lg founder-title">Message from<br />our Founder</h2>
          {/* Mobile-only founder photo placed between heading and content */}
          <div className="founder-photo-mobile-wrap">
            <img
              src="/assets/images/founder.png"
              alt="founder"
              className="founder-photo founder-photo-mobile"
            />
          </div>
          <p className="text-muted founder-body" style={{ marginTop: 30 }}>
            At GYAN JYOTI EDUCATION HUB, our vision is to empower
            Backward class students in East Singhbhum, Jharkhand, by
            providing quality education that fosters confidence, courage,
            and success.
          </p>
          <p className="text-muted founder-body" style={{ marginTop: 8 }}>
            We aim to create a nurturing environment that promotes
            inclusivity, community engagement, cultural preservation,
            innovation, and excellence.
          </p>
          <p className="text-muted founder-body" style={{ marginTop: 8 }}>
            By embracing diversity and celebrating the rich cultural
            heritage of tribal communities, we strive to transform the lives
            of our students, enabling them to overcome socio-economic
            challenges and become active contributors to their
            communities and the world at large.
          </p>
          <p className="text-muted founder-sign" style={{ marginTop: 12 }}>
            - Dr. Asha Rani Paul (Founder)<br />
            M.ed. PhD - Physics.
          </p>
        </div>
        <div className="founder-media">
          <img
            src="/assets/images/founder_background.png"
            alt=""
            className="shape"
            aria-hidden="true"
          />
          <img
            src="/assets/images/founder.png"
            alt="founder"
            className="founder-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Founder;


