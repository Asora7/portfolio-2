// src/pages/ProjectOne.jsx
import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project1-large.png';

export default function ProjectOne() {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main
      className="container my-5 p-4"
      style={{ backgroundColor: 'var(--bg-card)', borderRadius: '0.5rem' }}
      role="main"
    >
      {/* Back to Home */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/" className="text-muted">
          ← Back to Home
        </Link>
        <button
          onClick={copyLink}
          className="btn btn-outline-light btn-sm"
          title="Copy link to clipboard"
          aria-label="Copy page link"
        >
          <FiShare2 className="me-1" />
          {copied ? 'Copied!' : 'Share'}
        </button>
      </div>

      {/* Title */}
      <h1 className="text-white mb-3">JavaScript Frameworks</h1>

      {/* Figure */}
      <figure className="mb-4">
        <img
          src={projectImage}
          alt="Screenshot of JavaScript Frameworks project"
          className="img-fluid rounded"
          loading="lazy"
        />
        <figcaption className="text-muted mt-2">
          Screenshot of the React-refactored JS Frameworks assignment
        </figcaption>
      </figure>

      {/* Live / GitHub buttons */}
      <div className="mb-5">
        <a
          href="https://your-live-site-url.com/js-frameworks"
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent me-3"
          style={{ borderRadius: '0.25rem' }}
        >
          View Live Site
        </a>
        <a
          href="https://github.com/Asora7/js-frameworks"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-accent"
          style={{ borderRadius: '0.25rem' }}
        >
          GitHub Repo
        </a>
      </div>

      {/* Overview Section */}
      <section className="mb-5">
        <h2 className="h4 text-white mb-2">Overview</h2>
        <p className="text-light">
          In the original JavaScript Frameworks assignment, I built a vanilla-JS app that displayed
          a list of libraries fetched from an API. For Portfolio 2, I rewrote it in React:  
          • Converted all logic to React hooks (<code>useEffect</code>/<code>useState</code>)  
          • Added Bootstrap 5 grid for a responsive layout  
          • Implemented error handling (loading, error states)  
        </p>
      </section>

      {/* Self-Assessment / Improvements */}
      <section>
        <h2 className="h4 text-white mb-2">Self-Assessment & Improvements</h2>
        <ul className="list-unstyled text-light">
          <li className="mb-2">
            <strong>Before:</strong> Original version had no error messaging or mobile adjustments.
          </li>
          <li className="mb-2">
            <strong>After:</strong> Added <code>useEffect</code> to manage API calls with
            loading/error feedback. Bootstrap grid makes it mobile-friendly.
          </li>
          <li className="mb-2">
            <strong>Accessibility:</strong> Added <code>alt</code> text on all images, ensured
            color contrast (white text on dark background).
          </li>
          <li className="mb-2">
            <strong>Performance:</strong> Optimized thumbnails to ≤ 200 KB, lazy-loaded images with{' '}
            <code>loading="lazy"</code>.
          </li>
          <li className="mb-2">
            <strong>New Skill:</strong> Introduced React Context to toggle between dark/light theme.
          </li>
        </ul>
      </section>
    </main>
  );
}
