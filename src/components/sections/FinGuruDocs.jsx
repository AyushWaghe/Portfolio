import React from "react";
import { ArrowLeft, ArrowUpRight, BookOpen, Layers3 } from "lucide-react";
import {
  finGuruCoreFeatures,
  finGuruDesignDecisions,
  finGuruDiagrams,
  finGuruDocNavigation,
  finGuruProblemStatement,
  finGuruProjectOverview,
  finGuruProposedSolution,
  finGuruTechnology,
  finGuruUserStories
} from "../../data/finGuruDocumentation";

function DocumentationFigure({ src, alt }) {
  return (
    <figure className="docs-figure docs-content-figure">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

function MainTopic({ id, children }) {
  return <h2 className="docs-main-topic" id={id}>{children}</h2>;
}

function Subtopic({ id, children }) {
  return <h3 className="docs-subtopic" id={id}>{children}</h3>;
}

export function FinGuruDocs() {
  const [tableHeading, ...technologyRows] = finGuruTechnology;

  return (
    <div className="docs-page" id="top">
      <header className="docs-topbar">
        <a className="docs-back-link" href="/#projects" aria-label="Back to projects"><ArrowLeft size={18} /> Projects</a>
        <a className="docs-brand" href="#project-overview"><span>FG</span> Fin Guru</a>
        <a className="docs-top-action" href="#design-decisions">Design decisions <ArrowUpRight size={16} /></a>
      </header>

      <div className="docs-layout">
        <aside className="docs-sidebar" aria-label="Fin Guru documentation navigation">
          <p>DOCUMENTATION</p>
          <nav>
            {finGuruDocNavigation.map((item) => (
              <div className="docs-nav-group" key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
                {item.children && <div className="docs-nav-children">
                  {item.children.map((child) => <a key={child.id} href={`#${child.id}`}>{child.label}</a>)}
                </div>}
              </div>
            ))}
          </nav>
        </aside>

        <main className="docs-main">
          <header className="docs-hero">
            <p className="docs-eyebrow"><BookOpen size={16} /> PROJECT DOCUMENTATION</p>
            <h1>Fin Guru</h1>
          </header>

          <section className="docs-section docs-source-section" id="project-overview">
            <MainTopic>Project Overview</MainTopic>
            <div className="docs-opening-copy">
              {finGuruProjectOverview.opening.map((paragraph, index) => <p key={`opening-${index}`}>{paragraph}</p>)}
            </div>
            <div className="docs-prose">
              {finGuruProjectOverview.paragraphs.map((paragraph, index) => <p key={`overview-${index}`}>{paragraph}</p>)}
            </div>
            <DocumentationFigure {...finGuruProjectOverview.image} />
          </section>

          <section className="docs-section docs-source-section" id="problem-statement">
            <MainTopic>Problem Statement</MainTopic>
            <div className="docs-prose">
              {finGuruProblemStatement.map((paragraph, index) => <p key={`problem-${index}`}>{paragraph}</p>)}
            </div>
            <Subtopic id="proposed-solution">Proposed Solution</Subtopic>
            <div className="docs-prose">
              {finGuruProposedSolution.map((paragraph, index) => <p key={`solution-${index}`}>{paragraph}</p>)}
            </div>
          </section>

          <section className="docs-section docs-source-section" id="user-stories">
            <MainTopic>User Stories</MainTopic>
            <ol className="docs-story-list">
              {finGuruUserStories.map((story, index) => <li key={`story-${index}`}>{story}</li>)}
            </ol>
          </section>

          <section className="docs-section docs-source-section" id="tech-stack">
            <MainTopic>Tech Stack</MainTopic>
            <div className="docs-table-wrap">
              <table>
                <thead><tr>{tableHeading.map((heading, index) => <th key={`heading-${index}`}>{heading}</th>)}</tr></thead>
                <tbody>
                  {technologyRows.map((row, rowIndex) => <tr key={`technology-row-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`technology-cell-${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
          </section>

          <section className="docs-section docs-source-section" id="core-features">
            <MainTopic>Core Features</MainTopic>
            <div className="docs-feature-list">
              {finGuruCoreFeatures.map((feature) => (
                <article className="docs-source-feature" key={feature.id}>
                  <Subtopic id={feature.id}>{feature.title}</Subtopic>
                  <div className="docs-prose">
                    {feature.paragraphs.map((paragraph, index) => <p key={`${feature.id}-paragraph-${index}`}>{paragraph}</p>)}
                  </div>
                  {feature.images.map((image) => <DocumentationFigure key={image.src} {...image} />)}
                </article>
              ))}
            </div>
          </section>

          <section className="docs-section docs-source-section" id="design-decisions">
            <MainTopic>Design Decisions</MainTopic>
            <div className="docs-decision-list">
              {finGuruDesignDecisions.map((decision) => (
                <article className="docs-source-decision" key={decision.id}>
                  <Subtopic id={decision.id}>{decision.title}</Subtopic>
                  <div className="docs-prose">
                    {decision.paragraphs.map((paragraph, index) => <p key={`${decision.id}-paragraph-${index}`}>{paragraph}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="docs-section docs-source-section" id="architecture-diagram">
            <MainTopic>Architecture diagram</MainTopic>
            <DocumentationFigure {...finGuruDiagrams.architecture} />
          </section>

          <section className="docs-section docs-source-section" id="er-diagram">
            <MainTopic>ER Diagram</MainTopic>
            <DocumentationFigure {...finGuruDiagrams.erDiagram} />
          </section>

          <footer className="docs-footer">
            <div><Layers3 size={20} /><span>Fin Guru project documentation</span></div>
            <a href="#top">Back to top <ArrowUpRight size={16} /></a>
          </footer>
        </main>
      </div>
    </div>
  );
}
