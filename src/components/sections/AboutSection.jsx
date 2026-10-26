import React, { useState } from "react";
import { ChevronDown, GraduationCap, X } from "lucide-react";
import { education } from "../../data/portfolioData";

function EducationRow({ entry }) {
  return (
    <div className="education-row">
      <GraduationCap size={22} />
      <div>
        <strong>{entry.institution}</strong>
        <span>{entry.qualification}</span>
        <span>{entry.result}</span>
      </div>
    </div>
  );
}

export function AboutSection() {
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);

  return (
    <section className="section-band about-band" id="about">
      <div className="section-shell two-column reveal">
        <div className="reveal">
          <p className="section-kicker">About</p>
          <h2>Engineer focused on reliable backend systems and practical AI.</h2>
        </div>
        <div className="about-card reveal">
          <p>I’m a Software Engineer focused on building scalable and reliable applications using Java, Spring Boot, PostgreSQL, Kafka, Docker, and applied AI.</p>
              <p>At TCS, I design modular Java frameworks, improve performance and I/O workflows, build reusable
               components, implement failure recovery, and support CI/CD automation with GitHub Actions. 
               Alongside my professional work, I build backend and AI-powered applications using REST APIs,
                Spring Security, JPA/Hibernate, Spring AI, RAG, hybrid retrieval, and Qdrant. 
                I enjoy solving problems related to scalability, performance, security, and system reliability.</p>
          <EducationRow entry={education[0]} />
          <div
            className={`education-more${isEducationExpanded ? " expanded" : ""}`}
            id="additional-education"
            aria-hidden={!isEducationExpanded}
          >
            <div className="education-more-inner">
              {education.slice(1).map((entry) => (
                <EducationRow entry={entry} key={entry.institution} />
              ))}
            </div>
          </div>
          <button
            className="education-toggle"
            type="button"
            aria-controls="additional-education"
            aria-expanded={isEducationExpanded}
            onClick={() => setIsEducationExpanded((isExpanded) => !isExpanded)}
          >
            {isEducationExpanded ? <X size={17} /> : <ChevronDown size={17} />}
            {isEducationExpanded ? "Close" : "View more"}
          </button>
        </div>
      </div>
    </section>
  );
}
