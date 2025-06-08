/**
 * Footer component for displaying contact information, copyright,
 * and license details at the bottom of the page.
 *
 * @component
 * @returns {JSX.Element} A styled footer with contact links.
 */
import React from 'react';

export default function Footer() {
  return (
    <footer
      className="fade-up in-view"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: 'var(--border-radius)',
        boxShadow: 'var(--shadow)',
        padding: '1.5rem',
        margin: '2rem auto 0',
        maxWidth: '1000px',
        color: 'var(--text-muted)',
        textAlign: 'center',
      }}
    >
      <p style={{ marginBottom: '0.75rem', fontSize: '1rem', color: 'var(--text-light)' }}>
        <strong>Get in touch:</strong>{' '}
        <a href="mailto:veronica_asora@hotmail.com" style={{ color: 'var(--text-light)' }}>
          veronica_asora@hotmail.com
        </a>{' '}
        •{' '}
        <a
          href="https://github.com/Asora7"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-light)' }}
        >
          GitHub
        </a>
      </p>
      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        &copy; {new Date().getFullYear()} Veronica Asora. Built with React & Bootstrap 5.
      </p>
      <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        Licensed under{' '}
        <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
          MIT
        </a>
      </p>
    </footer>
  );
}
