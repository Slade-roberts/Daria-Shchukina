import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <h1>Daria Shchukina</h1>
      <nav aria-label="Main navigation">
        <button onClick={() => scrollToSection('home')} aria-label="Navigate to home section">Home</button>
        <button onClick={() => scrollToSection('portfolio')} aria-label="Navigate to portfolio section">Portfolio</button>
        <button onClick={() => scrollToSection('about')} aria-label="Navigate to about section">About</button>
        <button onClick={() => scrollToSection('contact')} aria-label="Navigate to contact section">Contact</button>
      </nav>
    </header>
  );
};

export default Header;
