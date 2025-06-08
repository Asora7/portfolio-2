import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project2-large.jpg';

export default function ProjectTwo() {
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
      {/* ── Top Bar: Back + Share Button ─────────────────────────────────── */}
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

      {/* ── 1. Project Title ──────────────────────────────────────────────── */}
      <h1 className="text-white mb-3">Semester Project 2</h1>

      {/* ── 2. Project Image & Caption ───────────────────────────────────── */}
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

      {/* ── 3. Live Site & GitHub Repo Buttons ───────────────────────────── */}
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

      {/* ── 4. Description ──────────────────────────────────────────────── */}
      <section className="mb-5">
        <h2 className="h4 text-white mb-3">Description</h2>
        <p className="text-light">
        BidShare is a Vite-based auction platform powered by the Noroff Auction API. Users can browse and search listings, register and log, create new auctions, place bids, and view their credit balance—with session persistence across page reloads.
        </p>
      </section>

      {/* ── 5. Self-Assessment & Improvements ─────────────────────────────── */}
      <section>
        <h2 className="h4 text-white mb-3">Self-Assessment & Improvements</h2>
        <ul className="list-unstyled text-light">
          <li className="mb-2">
            <strong>Loading States:</strong> Added a Bootstrap spinner on the home page while fetching listings to improve user feedback during network delays.
          </li>
          <li className="mb-2">
            <strong>Non-blocking Notifications:</strong> Replaced <code>alert()</code> calls with Toastify toast notifications for login, bidding, and error messages, ensuring a smoother UX.
          </li>
          <li className="mb-2">
            <strong>Unit Testing:</strong> Implemented Vitest unit tests for core logic functions (<code>canPlaceBid</code> and <code>isValidEmail</code>), achieving 4 passing tests locally to ensure code reliability.
          </li>
          <li>
            <strong>Future Enhancements:</strong> Due to time constraints, I prioritized UX and testing improvements over full security hardening. Next: move API keys into environment variables, implement request validation, and standardize error-handling patterns.
          </li>
        </ul>
      </section>
    </main>
  );
}
