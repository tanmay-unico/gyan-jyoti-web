import React, { useState } from "react";

const items = [
  { q: "How we spend your donation?", a: "Funds are allocated across education, development, health, and facility upgrades with quarterly audits." },
  { q: "Where does my donation go?", a: "Directly into our programs in Jharkhand supporting special needs children and their families." },
  { q: "How can I volunteer or intern with the NGO?", a: "Fill the volunteer form and our team will get in touch within 48 hours." },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="chip" style={{ marginBottom: 4 }}>FAQ</div>
        <h2 className="heading-lg">Frequently Asked Questions</h2>
        <img className="faq-circle" src="/assets/images/Background.png" alt="" aria-hidden="true" />
        <div className="faq-band" aria-hidden="true" />
        <div className="grid" style={{ marginTop: 32, marginLeft: "auto", marginRight: "auto" }}>
          {items.map((it, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}
                <span>{open === i ? "−" : "+"}</span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


