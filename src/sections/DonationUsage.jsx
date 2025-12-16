import React from "react";

const segments = [
  { label: "40% child development and women empowerment", color: "#C6F7C5" },
  { label: "35% cleanliness program", color: "#B39DFF" },
  { label: "10% excursions", color: "#FFF0CB" },
  { label: "10% helping people", color: "#FFD166" },
  { label: "5% feeding the poor", color: "#F69AC1" },
];

const Donut = () => {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  let offsetAcc = 0;
  return (
    <svg width="280" height="280" viewBox="0 0 280 280">
      <g transform="translate(140,140)">
        {segments.map((s, i) => {
          const value = parseInt(s.label, 10);
          const len = (value / 100) * circumference;
          const circle = (
            <circle
              key={i}
              r={radius}
              cx={0}
              cy={0}
              fill="transparent"
              stroke={s.color}
              strokeWidth={48}
              strokeDasharray={`${len} ${circumference - len}`}
              strokeDashoffset={-offsetAcc}
            />
          );
          offsetAcc += len;
          return circle;
        })}
        <circle r={70} fill="#000" />
      </g>
    </svg>
  );
};

const DonationUsage = () => {
  return (
    <section className="section donations">
      <div className="container donations-inner">
        <div className="donations-copy">
          <h2 className="heading-lg" style={{ color: "#fff" }}>How we spend your donations and where it goes</h2>
          <p className="donations-sub">
            We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.
          </p>
          <div className="legend">
            {segments.map((s, i) => (
              <div key={i} className="legend-item">
                <span className="legend-dot" style={{ background: s.color }} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="donations-chart">
          <Donut />
        </div>
      </div>
    </section>
  );
};

export default DonationUsage;


