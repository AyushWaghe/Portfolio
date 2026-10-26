import React from "react";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { profile } from "../../data/portfolioData";
import { RotatingTagline } from "../ui/RotatingTagline";

export function HeroSection() {
  return (
    <section className="section-band hero-band" id="home">
      <div className="hero section-shell reveal">
        <div className="hero-copy reveal">
          <p className="eyebrow"><Sparkles size={16} /> {profile.subtitle}</p>
          <h1>{profile.name}</h1>
          <RotatingTagline />
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <a className="primary-button" href={profile.resume} download="Ayush_Waghe_Resume.pdf"><Download size={18} /> Download Resume</a>
            <a className="secondary-button" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a>
            <a className="secondary-button" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
          <div className="quick-info">
            <span><MapPin size={16} /> {profile.location}</span>
            <a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone size={16} /> {profile.phone}</a>
          </div>
        </div>
        <div className="profile-panel reveal">
          <div className="profile-photo">
            <img
              src="/profile/ayush-waghe-portrait.png"
              alt="Ayush Waghe wearing a navy blazer"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
          </div>
          <div>
            <strong>Backend + AI systems</strong>
            <p>Designing scalable software with Java, Spring Boot, automation, and applied AI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
