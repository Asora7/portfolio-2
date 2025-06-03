// src/pages/ProjectOne.jsx
import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import projectImage from '../assets/project1-large.png';

function ProjectOne() {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <article className="container py-5 text-light">
      <Link to="/" className="text-muted mb-3 d-inline-block">
        &larr; Back to Home
      </Link>

      <h2 className="mb-3">JavaScript Frameworks</h2>
      <button
        onClick={copyLink}
        className="btn btn-outline-light btn-sm mb-4"
        title="Copy link to clipboard"
      >
        <FiShare2 className="me-1" />
        {copied ? 'Link Copied!' : 'Share'}
      </button>

      <figure className="mb-4">
        <img
          src={projectImage}
          alt="Screenshot of JavaScript Frameworks project"
          className="img-fluid rounded"
          loading="lazy"
        />
        <figcaption className="text-muted mt-2">
          Screenshot of the React-refactored JS Frameworks assignment.
        </figcaption>
      </figure>

      <div className="mb-4">
        <a
          href="https://your-live-site-url.com/js-frameworks"
          target="_blank"
          rel="noreferrer"
          className="btn btn-info me-2"
        >
          View Live Site
        </a>
        <a
          href="https://github.com/Asora7/js-frameworks"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-info"
        >
          GitHub Repo
        </a>
      </div>

      <section className="mb-5">
        <h3>Overview</h3>
        <p>
          In the original JavaScript Frameworks assignment, I built a vanilla-JS app that displayed
          a list of libraries fetched from an API. For Portfolio 2, I rewrote it in React:
          • Converted all logic to React hooks (useEffect/useState)  
          • Added Bootstrap 5 grid for a responsive layout  
          • Implemented error handling (loading, error states)  
        </p>
      </section>

      <section>
        <h3>Self-Assessment & Improvements</h3>
        <ul>
          <li>
            <strong>Before:</strong> Original version had no error messaging or mobile adjustments.
          </li>
          <li>
            <strong>After:</strong> Added <code>useEffect</code> to manage API calls with loading/error
            feedback. Bootstrap grid makes it mobile-friendly.
          </li>
          <li>
            <strong>Accessibility:</strong> Added <code>alt</code> text on all images, ensured color
            contrast (white text on dark background).
          </li>
          <li>
            <strong>Performance:</strong> Optimized thumbnails to &le; 200 KB, lazy-loaded images with{' '}
            <code>loading="lazy"</code>.
          </li>
          <li>
            <strong>New Skill:</strong> Introduced React Context to toggle between dark/light theme.
          </li>
        </ul>
      </section>
    </article>
  );
}

export default ProjectOne;
