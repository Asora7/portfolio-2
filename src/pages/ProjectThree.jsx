// src/pages/ProjectThree.jsx
import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project3-large.jpg';

export default function ProjectThree() {
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
      <h1 className="text-white mb-3">Exam Project 2</h1>

      {/* ── 2. Project Image & Caption ───────────────────────────────────── */}
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

      {/* ── 3. Live Site & GitHub Repo Buttons ───────────────────────────── */}
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

      {/* ── 4. Description ──────────────────────────────────────────────── */}
      <section className="mb-5">
        <h2 className="h4 text-white mb-3">Description</h2>
        <p className="text-light">
          Holidaze is a modern React-based accommodation booking platform. Users can browse venues, register and log in as either Customers or Venue Managers, update profile avatar, book available dates, manage their bookings, and venue managers can handle listings. Built using React, TypeScript, and Bootstrap, it integrates seamlessly with the Noroff API for real-time data interaction.
        </p>
      </section>

      {/* ── 5. Self-Assessment & Improvements ─────────────────────────────── */}
      <section>
        <h2 className="h4 text-white mb-3">Self‑Assessment & Improvements</h2>
        <ul className="list-unstyled text-light">
          <li className="mb-2">
            Implemented comprehensive React Context for efficient global state management, eliminating <code>prop‑drilling</code>.
          </li>
          <li className="mb-2">
            Ensured responsive and accessible design, validated with <strong>Lighthouse</strong> and <strong>WAVE</strong> tools to meet WCAG standards.
          </li>
          <li className="mb-2">
            Identified logo display issues in Safari (works in Chrome & Firefox); planning to fix this post‑evaluation by adjusting CSS/image formats for Safari compatibility.
          </li>
          <li className="mb-2">
  Previously received feedback in JavaScript Frameworks to consider using TypeScript—this time I built the entire project with static typing from the start, which significantly improved both code safety and developer experience.
</li>
          <li className="mb-2">
            Add JSDoc comments in codebase to improve developer documentation—will be included as part of post‑grading improvements.
          </li>
          <li className="mb-2">
            Future plans include implementing automated testing, enhancing performance further, and refining <code>TypeScript</code> type safety post‑evaluation.
          </li>
        </ul>
      </section>
    </main>
  );
}