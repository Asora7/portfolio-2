import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project2-large.jpg';

/**
 * ProjectTwo page presenting the Semester Project 2.
 * Features auction platform overview with live links and summary.
 *
 * @component
 * @returns {JSX.Element} Project article with description and improvements.
 */
export default function ProjectTwo() {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the current URL to clipboard for sharing.
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

      <h1 className="text-white mb-3">Semester Project 2</h1>

      <figure className="mb-4">
        <img
          src={projectImage}
          alt="Screenshot of Semester Project 2 (BidShare)"
          className="img-fluid rounded"
          loading="lazy"
        />
        <figcaption className="text-light-muted mt-2">
          Screenshot of the BidShare auction platform with responsive layout and enhanced UX.
        </figcaption>
      </figure>

      <div className="mb-5 d-flex justify-content-center gap-3">
        <a
          href="https://asora-auction-site.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent"
          style={{ borderRadius: '0.25rem', minWidth: '120px' }}
        >
          View Live Site
        </a>
        <a
          href="https://github.com/Asora7/semester-project-2"
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
          BidShare is a Vite-based auction platform powered by the Noroff Auction API. Users can
          browse listings, register/login, create auctions, place bids, and view credits—with
          session persistence.
        </p>
      </section>

      <section>
        <h2 className="h4 text-white mb-3">Self-Assessment & Improvements</h2>
        <ul className="list-unstyled text-light">
          <li>
            <strong>Loading States:</strong> Bootstrap spinner added while listings are fetched.
          </li>
          <li>
            <strong>UX Feedback:</strong> Replaced blocking <code>alert()</code> with Toastify
            toasts.
          </li>
          <li>
            <strong>Unit Testing:</strong> Added Vitest tests for core utility functions.
          </li>
          <li>
            <strong>Security Note:</strong> Security improvements (env vars, error handling)
            deferred post‑submission due to time.
          </li>
        </ul>
      </section>
    </main>
  );
}
