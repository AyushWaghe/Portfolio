import React, { useState } from "react";
import { ArrowRight, ExternalLink, FileText, Github, Play } from "lucide-react";
import { projects } from "../../data/portfolioData";
import { ProjectVideoDialog } from "../ui/ProjectVideoDialog";
import { SectionHeading } from "../ui/SectionHeading";
import { TagCloud } from "../ui/TagCloud";
import "../../styles/project-video.css";

function ProjectCard({ project, onOpenDemo }) {
  const hasGithub = Boolean(project.github);
  const hasLive = Boolean(project.live);

  return (
    <article className="project-card reveal">
      <div className={`project-image${project.imageSrc ? " project-image-photo" : ""}${project.demo ? " project-image-video" : ""}`}>
        {project.demo ? (
          <button className="project-demo-thumbnail" type="button" onClick={() => onOpenDemo(project)} aria-label={`Watch ${project.title} demo`} title="Watch demo">
            <img src={project.imageSrc} alt="" loading="lazy" />
            <Play size={26} fill="currentColor" aria-hidden="true" />
          </button>
        ) : project.imageSrc ? (
          <img src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
        ) : (
          <span>{project.image}</span>
        )}
      </div>
      <div className="project-body">
        <p>{project.type}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.details.map((detail) => <p className="project-detail" key={detail}>{detail}</p>)}
        <TagCloud items={project.stack} />
        {(project.detailsPath || project.detailsUrl || project.demo || hasGithub || hasLive) && (
          <div className="project-links">
            {(project.detailsPath || project.detailsUrl) && (
              <a
                className="project-details-link"
                href={project.detailsPath || project.detailsUrl}
                target={project.detailsUrl ? "_blank" : undefined}
                rel={project.detailsUrl ? "noopener noreferrer" : undefined}
                onClick={project.detailsPath ? () => window.sessionStorage.setItem("portfolioReturnSection", "projects") : undefined}
              >
                {project.detailsUrl ? <ExternalLink size={17} /> : <FileText size={17} />} View details <ArrowRight size={16} />
              </a>
            )}
            {project.demo && (
              <button className="project-demo-link" type="button" onClick={() => onOpenDemo(project)}>
                <Play size={17} fill="currentColor" /> Watch demo
              </button>
            )}
            {hasGithub && <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a>}
            {hasLive && <a href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={17} /> Live</a>}
          </div>
        )}
      </div>
    </article>
  );
}

export function ProjectsSection({ activeCategory, onCategoryChange }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectTabs = Object.keys(projects);

  return (
    <section className="section-band projects-band" id="projects">
      <div className="section-shell reveal">
        <SectionHeading kicker="Projects" title="Selected work" split>
          <div className="tabs" role="tablist" aria-label="Project categories">
            {projectTabs.map((tab) => (
              <button key={tab} className={activeCategory === tab ? "active" : ""} onClick={() => onCategoryChange(tab)} type="button">{tab}</button>
            ))}
          </div>
        </SectionHeading>
        <div className="project-grid tab-content" key={activeCategory}>
          {projects[activeCategory].map((project) => <ProjectCard key={project.title} project={project} onOpenDemo={setSelectedProject} />)}
        </div>
        <ProjectVideoDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}
