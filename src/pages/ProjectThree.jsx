import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project3-large.jpg';

/**
 * ProjectThree page presenting Exam Project 2 (Holidaze).
 * Provides detailed information, live links, and reflections.
 *
 * @component
 * @returns {JSX.Element} Project detail view with image, description, and improvements.
 */
export default function ProjectThree() {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the current URL to clipboard.
   */
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/" className="text-light project-article-back-link">
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

      <h1 className="text-white mb-3">Exam Project 2</h1>

      <figure className="mb-4">
        <img
          src={projectImage}
          alt="Screenshot of Holidaze Accommodation Booking front-end"
          className="img-fluid rounded"
          loading="lazy"
        />
        <figcaption className="text-light-muted mt-2">
          Screenshot of Holidaze Accommodation Booking application's responsive front-end.
        </figcaption>
      </figure>

      <div className="mb-5 d-flex justify-content-center gap-3">
        <a
          href="https://holidaze-asora.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent"
          style={{ borderRadius: '0.25rem', minWidth: '120px' }}
        >
          View Live Site
        </a>
        <a
          href="https://github.com/Asora7/holidaze"
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent"
          style={{ borderRadius: '0.25rem', minWidth: '120px' }}
        >
          GitHub Repo
        </a>
      </div>

      <section className="mb-5">
        <h2 className="h4 text-white mb-3">Description</h2>
        <p className="text-light">
          Holidaze is a React/TypeScript-based accommodation booking platform. Users can browse
          venues, log in as Customers or Venue Managers, book available dates, manage bookings, and
          update listings. It integrates with the Noroff API for full CRUD support and real-time
          feedback.
        </p>
      </section>

      <section>
        <h2 className="h4 text-white mb-3">Self‑Assessment & Improvements</h2>
        <ul className="list-unstyled text-light">
          <li>Used React Context for global state, removing prop-drilling.</li>
          <li>Validated accessibility using Lighthouse & WAVE tools.</li>
          <li>Identified Safari logo issue — fix planned post-evaluation.</li>
          <li>Fully built in TypeScript to address earlier feedback.</li>
          <li>Planned JSDoc, testing, and perf improvements after submission.</li>
        </ul>
      </section>
    </main>
  );
}
