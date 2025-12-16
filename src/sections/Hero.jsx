import React, { useEffect, useState } from "react";

const Hero = () => {
  const slides = [
    "/assets/images/slideshow.png",
    "/assets/images/slideshow1.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section hero">
      <div className="container">
        <div className={`hero-slide ${index === 1 ? "dark" : ""}`}>
          <img className="bg" src={slides[index]} alt="hero" />
          <img className="hero-title" src="/assets/images/container.png" alt="Their Smiles Start with You" />
          <a className="hero-cta-img" href="#donate" aria-label="Help a Child smile">
            <img src="/assets/images/button_row.png" alt="Help a Child smile" />
          </a>
          <button className="hero-arrow left" aria-label="Previous" onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>
            <img src="/assets/images/left.png" alt="previous" />
          </button>
          <button className="hero-arrow right" aria-label="Next" onClick={() => setIndex((index + 1) % slides.length)}>
            <img src="/assets/images/left.png" alt="next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


