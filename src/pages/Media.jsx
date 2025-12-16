import React, { useState } from 'react';
import Footer from '../sections/Footer';
import './Media.css';

const Media = () => {
  const [showAllGlimpses, setShowAllGlimpses] = useState(false);

  const moments = [
    {
      src: '/assets/images/media/97.jpeg',
      title: 'Creative Art',
      text: 'Nurturing imagination and self-expression through art',
    },
    {
      src: '/assets/images/media/94.jpg',
      title: 'Active Play',
      text: 'Building healthy bodies and teamwork skills',
    },
    {
      src: '/assets/images/media/68.jpg',
      title: 'Love of Reading',
      text: 'Opening doors to new worlds through books',
    },
  ];

  const glimpsesAll = [
    '/assets/images/media/1.jpg',
    '/assets/images/media/3.jpg',
    '/assets/images/media/7.jpg',
    '/assets/images/media/15.jpg',
    '/assets/images/media/35.jpg',
    '/assets/images/media/36.jpg',
    '/assets/images/media/38.jpg',
    '/assets/images/media/45.jpg',
    '/assets/images/media/48.jpg',
    '/assets/images/media/52.jpg',
    '/assets/images/media/55.jpg',
    '/assets/images/media/66.jpg',
    '/assets/images/media/69.jpg',
    '/assets/images/media/74.jpg',
    '/assets/images/media/84.jpg',
    '/assets/images/media/90.jpg',
  ];

  const glimpses = showAllGlimpses ? glimpsesAll : glimpsesAll.slice(0, 8);

  return (
    <div className="media-page">
      <section className="media-hero">
        <div className="media-hero__shade" aria-hidden="true" />
        <div className="container media-hero__inner">
          <div className="media-hero__content">
            <h1>
              Building Bright<br />
              Futures,<br />
              <span>One Child at a Time</span>
            </h1>
            <p>We empower children through education, creativity, and community support. Every child deserves a chance to learn, grow, and shine.</p>
            <div className="media-hero__actions">
              <a className="btn primary" href="/donate">Support Our Mission</a>
              <a className="btn ghost" href="/contact">Get Involved</a>
            </div>
          </div>
        </div>
      </section>

      <div className="container media-body">
        <section className="moments">
          <div className="moments-head">
            <h2>Moments That <span>Matter</span></h2>
            <p>Every day, we create opportunities for children to learn, grow, and discover their potential</p>
          </div>
          <div className="moments-grid">
            {moments.map((item, idx) => (
              <div className="moment-card" key={idx}>
                <div className="moment-photo">
                  <img src={item.src} alt={item.title} />
                </div>
                <div className="moment-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glimpses">
          <div className="glimpses-head">
            <h2>And More Glimpses of <span>Our World</span></h2>
          </div>
          <div className="glimpses-grid">
            {glimpses.map((src, i) => (
              <div className="glimpse-card" key={i}>
                <div className="glimpse-frame">
                  <img 
                    src={src} 
                    alt={`Glimpse ${i + 1}`} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      console.warn(`Failed to load image: ${src}`);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          {!showAllGlimpses && (
            <div className="glimpses-action">
              <button className="btn primary" onClick={() => setShowAllGlimpses(true)}>
                Load More
              </button>
            </div>
          )}
        </section>

        <section className="headlines">
          <div className="headlines-inner">
            <div className="headlines-head">
              <h2>We're Making Headlines</h2>
              <p>Our work has been recognized by local and national media for the positive impact we're creating.</p>
            </div>
            <div className="headlines-grid">
              <div className="headline-clipping">
                <img src="/assets/images/media/21.jpg" alt="Newspaper clipping 1" />
              </div>
              <div className="headline-clipping">
                <img src="/assets/images/media/22.jpg" alt="Newspaper clipping 2" />
              </div>
              <div className="headline-clipping">
                <img src="/assets/images/media/23.jpg" alt="Newspaper clipping 3" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Media;