import React from "react";
import { ArrowLeft, ArrowUpRight, BookOpen, Layers3 } from "lucide-react";
import {
  savingsSagaCoreFeatures,
  savingsSagaDesignDecisions,
  savingsSagaDocNavigation,
  savingsSagaProblemStatement,
  savingsSagaProjectOverview,
  savingsSagaProposedSolution,
  savingsSagaTechnology,
  savingsSagaUserStories
} from "../../data/savingsSagaDocumentation";

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

export function SavingsSagaDocs() {
  const [tableHeading, ...technologyRows] = savingsSagaTechnology;

  return (
    <div className="docs-page" id="top">
      <header className="docs-topbar">
        <a className="docs-back-link" href="/#projects" aria-label="Back to projects"><ArrowLeft size={18} /> Projects</a>
        <a className="docs-brand" href="#project-overview"><span>SS</span> Savings Saga</a>
        <a className="docs-top-action" href="#design-decisions">Design decisions <ArrowUpRight size={16} /></a>
      </header>

      <div className="docs-layout">
        <aside className="docs-sidebar" aria-label="Savings Saga documentation navigation">
          <p>DOCUMENTATION</p>
          <nav>
            {savingsSagaDocNavigation.map((item) => (
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
            <h1>Savings Saga</h1>
          </header>

          <section className="docs-section docs-source-section" id="project-overview">
            <MainTopic>Project Overview</MainTopic>
            <div className="docs-opening-copy">
              {savingsSagaProjectOverview.opening.map((paragraph, index) => <p key={`opening-${index}`}>{paragraph}</p>)}
            </div>
            <div className="docs-prose">
              {savingsSagaProjectOverview.paragraphs.map((paragraph, index) => <p key={`overview-${index}`}>{paragraph}</p>)}
            </div>
            <DocumentationFigure {...savingsSagaProjectOverview.image} />
          </section>

          <section className="docs-section docs-source-section" id="problem-statement">
            <MainTopic>Problem Statement</MainTopic>
            <div className="docs-prose">
              {savingsSagaProblemStatement.map((paragraph, index) => <p key={`problem-${index}`}>{paragraph}</p>)}
            </div>
            <Subtopic id="proposed-solution">Proposed Solution</Subtopic>
            <div className="docs-prose">
              {savingsSagaProposedSolution.map((paragraph, index) => <p key={`solution-${index}`}>{paragraph}</p>)}
            </div>
          </section>

          <section className="docs-section docs-source-section" id="user-stories">
            <MainTopic>User Stories</MainTopic>
            <ol className="docs-story-list">
              {savingsSagaUserStories.map((story, index) => <li key={`story-${index}`}>{story}</li>)}
            </ol>
          </section>

          <section className="docs-section docs-source-section" id="tech-stack">
            <MainTopic>Tech stack</MainTopic>
            <div className="docs-table-wrap">
              <table>
                <thead><tr>{tableHeading.map((heading) => <th key={heading}>{heading}</th>)}</tr></thead>
                <tbody>
                  {technologyRows.map((row, index) => <tr key={`${row[0]}-${index}`}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
          </section>

          <section className="docs-section docs-source-section" id="core-features">
            <MainTopic>Core Features</MainTopic>
            <div className="docs-feature-list">
              {savingsSagaCoreFeatures.map((feature) => (
                <article className="docs-source-feature" key={feature.id}>
                  <Subtopic id={feature.id}>{feature.title}</Subtopic>
                  {feature.imagesBeforeContent && feature.images.map((image) => <DocumentationFigure key={image.src} {...image} />)}
                  <div className="docs-prose">
                    {feature.paragraphs.map((paragraph, index) => <p key={`${feature.id}-paragraph-${index}`}>{paragraph}</p>)}
                    {feature.list && <ul className="docs-detail-list">{feature.list.map((item, index) => <li key={`${feature.id}-item-${index}`}>{item}</li>)}</ul>}
                  </div>
                  {!feature.imagesBeforeContent && feature.images.map((image) => <DocumentationFigure key={image.src} {...image} />)}
                </article>
              ))}
            </div>
          </section>

          <section className="docs-section docs-source-section" id="architecture">
            <MainTopic>Architecture</MainTopic>
            <DocumentationFigure src="/projects/savings-saga/image9.png" alt="Savings Saga architecture diagram" />
          </section>

          <section className="docs-section docs-source-section" id="er-diagram">
            <MainTopic>ER Diagram</MainTopic>
            <DocumentationFigure src="/projects/savings-saga/image10.png" alt="Savings Saga entity relationship diagram" />
          </section>

          <section className="docs-section docs-source-section" id="design-decisions">
            <MainTopic>Design decisions++</MainTopic>
            <div className="docs-decision-list">
              {savingsSagaDesignDecisions.map((decision) => (
                <article className="docs-source-decision" key={decision.id}>
                  <Subtopic id={decision.id}>{decision.title}</Subtopic>
                  <div className="docs-prose">
                    {decision.paragraphs.map((paragraph, index) => <p key={`${decision.id}-paragraph-${index}`}>{paragraph}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="docs-footer">
            <div><Layers3 size={20} /><span>Savings Saga project documentation</span></div>
            <a href="#top">Back to top <ArrowUpRight size={16} /></a>
          </footer>
        </main>
      </div>
    </div>
  );
}
