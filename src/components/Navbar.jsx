import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navbar component that provides site-wide navigation.
 * Contains a brand link that routes back to the homepage.
 *
 * @component
 * @returns {JSX.Element} The navigation bar with a link to the homepage.
 */
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
