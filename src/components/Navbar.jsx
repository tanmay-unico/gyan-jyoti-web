import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "bn", label: "Bengali" },
    { code: "as", label: "Assamese" },
    { code: "ne", label: "Nepali" },
    { code: "or", label: "Odia" },
  ];

  const setLanguage = (lang) => {
    const iframe = document.querySelector("iframe.goog-te-menu-frame");
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    } else if (iframe) {
      try {
        const innerSelect = iframe.contentDocument.querySelector(".goog-te-combo");
        innerSelect.value = lang;
        innerSelect.dispatchEvent(new Event("change"));
      } catch {}
    }
    setOpen(false);
  };

  return (
    <header className={`navbar ${menuOpen ? "is-open" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }} onClick={() => { if (typeof window !== "undefined") { window.scrollTo(0, 0); } }}>
          <img src="/assets/images/logo.png" alt="Gyan Jyoti" style={{ width: 120, height: 80 }} />
        </Link>
        <button className="hamburger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/about" onClick={() => setMenuOpen(false)}>About us</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/what-we-do" onClick={() => setMenuOpen(false)}>What We Do</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/media" onClick={() => setMenuOpen(false)}>Media</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
        <div className="nav-cta">
          <div className="nav-translate" ref={dropdownRef}>
            <button className="translate-btn" onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open}>
              <img src="/assets/images/g_translate.png" alt="Translate" />
              <span className="chev">▾</span>
            </button>
            {open && (
              <ul className="translate-menu" role="listbox">
                {languages.map((l) => (
                  <li key={l.code} role="option">
                    <button onClick={() => setLanguage(l.code)}>{l.label}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link className="btn primary" to="/donate">Donate</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


