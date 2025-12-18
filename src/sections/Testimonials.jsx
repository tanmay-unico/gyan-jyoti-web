import React from "react";

const CONTRIBUTORS = [
  {
    name: "Ms. B. Kachchap",
    role: "Retd. Principal",
    quote:
      "To Asha Paul founder of Gyan Jyoti Education Hub. Your dedication, Enthusiasm and insight are really inspiring. I wish you many years of great achievement, Congratulation.",
    image: "/assets/images/contributors/contri1.png",
    align: "left",
  },
  {
    name: "Dr. B. N. Prasad",
    role: "Ex-Dean, Kolhan University",
    quote:
      "I extend all my good wishes for upcoming institution “Gyan Jyoti Education Hub” in Ghatsila. Viewing the academic background and wide experience of the team, I am sure that the Academy will prove itself a milestone in the field of primary education this zone. I wish my sincere blessings for the Institute.",
    image: "/assets/images/contributors/contri2.png",
    align: "right",
  },
  {
    name: "Mr. Biplab Gorai",
    role: "CSO",
    quote:
      "Asha di has been an inspiring force since 2018, growing from a dedicated social activist into the founder of Gyan Jyoti Education Hub. Her commitment, teaching excellence, and passion for social impact have helped the institution become a trusted name in quality education.",
      image: "/assets/images/contributors/contri3.png",
    align: "left",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container contributors">
        <div className="contributors-head">
          <div className="contributors-eyebrow">
            <span className="line" aria-hidden="true" />
            <span>OUR FOUNDER’S MESSAGE</span>
          </div>
          <h2 className="contributors-title">Hear from our contributors</h2>
        </div>

        <div className="contributors-list">
          {CONTRIBUTORS.map((person, idx) => {
            const isRight = person.align === "right";
            return (
              <article
                className={`contributors-item ${isRight ? "reverse" : ""}`}
                key={idx}
              >
                <div className="contributors-photo">
                  <img src={person.image} alt={person.name} />
                </div>
                <div className="contributors-body">
                  <p className="contributors-quote">{person.quote}</p>
                  <div className="contributors-meta">
                    <div className="contributors-name">{person.name}</div>
                    <div className="contributors-role">{person.role}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


