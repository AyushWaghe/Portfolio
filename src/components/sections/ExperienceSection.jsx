import React, { useState } from "react";
import { BriefcaseBusiness, ChevronDown, ChevronUp, UsersRound } from "lucide-react";
import { experience, extracurricularExperience } from "../../data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";
import { TagCloud } from "../ui/TagCloud";

const experienceTabs = ["Professional Experience", "Extracurricular"];

function ExperienceItem({ job, isExtracurricular }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visiblePoints = job.expandable ? job.points.slice(0, 2) : job.points;
  const additionalPoints = job.expandable ? job.points.slice(2) : [];
  const Icon = isExtracurricular ? UsersRound : BriefcaseBusiness;

  return (
    <article className="timeline-item reveal">
      <div className="timeline-dot"><Icon size={18} /></div>
      <div className="timeline-content">
        <div className="timeline-top">
          <div><h3>{job.role}</h3><p>{job.company}</p></div>
          <span>{job.period}</span>
        </div>
        {job.place && <p className="job-place">{job.place}</p>}
        {visiblePoints.length > 0 && <ul>{visiblePoints.map((point) => <li key={point}>{point}</li>)}</ul>}
        {additionalPoints.length > 0 && (
          <div className={`experience-more${isExpanded ? " expanded" : ""}`} aria-hidden={!isExpanded}>
            <div className="experience-more-inner">
              <ul>{additionalPoints.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </div>
        )}
        {job.expandable && (
          <button className="experience-toggle" type="button" aria-expanded={isExpanded} onClick={() => setIsExpanded((expanded) => !expanded)}>
            {isExpanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}
        {job.stack?.length > 0 && <TagCloud items={job.stack} />}
      </div>
    </article>
  );
}

export function ExperienceSection({ activeExperience, onExperienceChange }) {
  const isExtracurricular = activeExperience === "Extracurricular";
  const entries = isExtracurricular ? extracurricularExperience : experience;

  function handleTabKeyDown(event, index) {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % experienceTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + experienceTabs.length) % experienceTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = experienceTabs.length - 1;
    if (nextIndex === undefined) return;

    event.preventDefault();
    onExperienceChange(experienceTabs[nextIndex]);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[nextIndex].focus();
  }

  return (
    <section className="section-band experience-band" id="experience">
      <div className="section-shell reveal">
        <SectionHeading kicker="Experience" title="Where I've contributed" split>
          <div className="tabs experience-tabs" role="tablist" aria-label="Experience categories">
            {experienceTabs.map((tab, index) => (
              <button
                key={tab}
                id={`experience-tab-${index}`}
                className={activeExperience === tab ? "active" : ""}
                type="button"
                role="tab"
                aria-controls="experience-panel"
                aria-selected={activeExperience === tab}
                tabIndex={activeExperience === tab ? 0 : -1}
                onClick={() => onExperienceChange(tab)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </SectionHeading>
        <div
          className="timeline tab-content"
          id="experience-panel"
          key={activeExperience}
          role="tabpanel"
          aria-labelledby={`experience-tab-${experienceTabs.indexOf(activeExperience)}`}
          tabIndex={0}
        >
          {entries.map((job) => <ExperienceItem job={job} isExtracurricular={isExtracurricular} key={`${job.company}-${job.role}`} />)}
        </div>
      </div>
    </section>
  );
}
