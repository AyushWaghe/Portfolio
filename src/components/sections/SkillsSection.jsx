import React from "react";
import {
  Activity, Atom, Brain, BrainCircuit, Blocks, Boxes, Braces, CircleCheck,
  Code, Coffee, Database, Gauge, GitBranch, Leaf, MonitorCog, Network,
  Package, Palette, PanelsTopLeft, Radio, Route, ScanSearch, Search, ShieldCheck, Workflow
} from "lucide-react";
import { skills } from "../../data/portfolioData";
import { SectionHeading } from "../ui/SectionHeading";

const symbolIcons = {
  Activity, Atom, Brain, BrainCircuit, Blocks, Boxes, Braces, CircleCheck,
  Code, Coffee, Database, Gauge, GitBranch, Leaf, MonitorCog, Network,
  Package, Palette, PanelsTopLeft, Radio, Route, ScanSearch, Search, ShieldCheck, Workflow
};

function SkillLogo({ skill }) {
  const [hasImageError, setHasImageError] = React.useState(false);
  const FallbackIcon = symbolIcons[skill.symbol] || Braces;

  return (
    <span className="skill-logo" aria-hidden="true">
      {skill.icon && !hasImageError
        ? <img src={skill.icon} alt="" loading="lazy" onError={() => setHasImageError(true)} />
        : <FallbackIcon size={25} strokeWidth={2.1} />}
    </span>
  );
}

export function SkillsSection({ activeSkill, onSkillChange }) {
  const skillTabs = Object.keys(skills);

  return (
    <section className="section-band skills-band" id="skills">
      <div className="section-shell reveal">
        <SectionHeading kicker="Skills" title="Technologies I work with" split>
          <div className="tabs skill-tabs" role="tablist" aria-label="Skill categories">
            {skillTabs.map((tab) => (
              <button key={tab} className={activeSkill === tab ? "active" : ""} onClick={() => onSkillChange(tab)} type="button">{tab}</button>
            ))}
          </div>
        </SectionHeading>
        <div className="skills-panel reveal tab-content" key={activeSkill}>
          <div className="skills-grid">
            {skills[activeSkill].map((skill) => (
              <article className="skill-card" key={skill.name}>
                <SkillLogo skill={skill} />
                <h3>{skill.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
