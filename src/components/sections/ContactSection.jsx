import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/portfolioData";

export function ContactSection() {
  return (
    <section className="section-band contact-band" id="contact">
      <div className="contact-section section-shell reveal">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let's build something useful.</h2>
          <p>Open to backend, full-stack, and applied AI opportunities. Let's connect and build something useful.</p>
        </div>
        <div className="contact-actions">
          <a className="primary-button" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer"><Mail size={18} /> Email Me</a>
          <a className="secondary-button" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a>
          <a className="secondary-button" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
