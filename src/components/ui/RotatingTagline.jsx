import React, { useEffect, useState } from "react";
import "./rotating-tagline.css";

const taglines = [
  "Java Backend Engineer",
  "Ex-Samsung PRISM Research Intern",
  "Spring Boot & Distributed Systems Builder",
  "Applied AI & RAG Engineer"
];

export function RotatingTagline() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    const update = () => {
      clearInterval(timer);
      if (motion.matches) setActive(0);
      else timer = setInterval(() => setActive((index) => (index + 1) % taglines.length), 4000);
    };
    update();
    motion.addEventListener("change", update);
    return () => {
      clearInterval(timer);
      motion.removeEventListener("change", update);
    };
  }, []);
  return (
    <h2 className="rotating-tagline" aria-label={taglines.join(". ")}>
      {taglines.map((text, index) => (
        <span key={text} aria-hidden="true" className={index === active ? "active" : index === (active + taglines.length - 1) % taglines.length ? "leaving" : ""}>{text}</span>
      ))}
    </h2>
  );
}
