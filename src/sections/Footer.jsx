import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="footer-brand">
              <img src="/assets/images/logo.png" alt="logo" className="footer-logo" />
            </div>
            <div className="footer-col">
              <div className="footer-head">Home</div>
              <Link to="/about" className="footer-link" onClick={scrollToTop}>About us</Link>
              <Link to="/what-we-do" className="footer-link" onClick={scrollToTop}>What we do</Link>
              <Link to="/media" className="footer-link" onClick={scrollToTop}>Media</Link>
              <Link to="/contact" className="footer-link" onClick={scrollToTop}>Contact</Link>
            </div>
            <div className="footer-col">
              <div className="footer-head">More</div>
              <a href="#impact" className="footer-link">Impact</a>
              <a href="#news" className="footer-link">News</a>
              <Link to="/donate" className="footer-link" onClick={scrollToTop}>Donate</Link>
              <a href="#blog" className="footer-link">Blog</a>
            </div>
            <div className="footer-col">
              <div className="footer-head">Connect</div>
              <a href="https://www.facebook.com/groups/501615936284704/?ref=share&mibextid=NSMWBT" className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/gyanjyotieducationhub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/groups/501615936284704/?ref=share&mibextid=NSMWBT" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.facebook.com/groups/501615936284704/?ref=share&mibextid=NSMWBT" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="footer-subscribe">
            <h3 className="footer-title">Subscribe to get latest updates</h3>
            <div className="footer-form">
              <input placeholder="Your email" type="email" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Gyan Jyoti Education</div>
      </div>
    </footer>
  );
};

export default Footer;



