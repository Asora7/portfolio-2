// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <Link to="/" className="navbar-brand text-white fw-semibold">
          Veronica<span style={{ color: 'var(--accent)' }}>Asora</span>
        </Link>
      </div>
    </nav>
  );
}
