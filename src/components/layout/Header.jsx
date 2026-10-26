import React from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../../data/portfolioData";

export function Header({ isMenuOpen, onMenuToggle, onNavigate }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to home">
        <span>AW</span>
        <strong>{profile.name}</strong>
      </a>
      <button className="menu-button" onClick={onMenuToggle} aria-label="Toggle navigation">
        {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={isMenuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={onNavigate}>{item}</a>
        ))}
      </nav>
    </header>
  );
}
