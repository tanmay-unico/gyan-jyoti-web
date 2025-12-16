import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import WhatWeDo from "./pages/WhatWeDo";
import DonatePage from "./pages/Donate";
import Media from "./pages/Media";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-root">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/media" element={<Media />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


