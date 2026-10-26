import React from "react";

export function SectionHeading({ kicker, title, children, split = false }) {
  return (
    <div className={`section-heading reveal${split ? " split" : ""}`}>
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
