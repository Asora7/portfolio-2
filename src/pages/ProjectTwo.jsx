import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project2-large.png';

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
      <h1 className="text-white mb-3">
        {/* TODO: Add Project Two Title */}
      </h1>

      {/* ── 2. Project Image & Caption ───────────────────────────────────── */}
      <figure className="mb-4">
        <img
          src={projectImage}
          alt="Screenshot of Project Two"
          className="img-fluid rounded"
          loading="lazy"
        />
        <figcaption className="text-light-muted mt-2">
          {/* TODO: Add image caption */}
        </figcaption>
      </figure>

      {/* ── 3. Live Site & GitHub Repo Buttons ───────────────────────────── */}
      <div className="mb-5 d-flex justify-content-center gap-3">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent"
          style={{ borderRadius: '0.25rem', minWidth: '120px' }}
        >
          {/* TODO: Live Site Button Text */}
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent"
          style={{ borderRadius: '0.25rem', minWidth: '120px' }}
        >
          {/* TODO: GitHub Repo Button Text */}
        </a>
      </div>

      {/* ── 4. Description ──────────────────────────────────────────────── */}
      <section className="mb-5">
        <h2 className="h4 text-white mb-3">Description</h2>
        <p className="text-light">
          {/* TODO: Add project description */}
        </p>
      </section>

      {/* ── 5. Self-Assessment & Improvements ─────────────────────────────── */}
      <section>
        <h2 className="h4 text-white mb-3">Self-Assessment & Improvements</h2>
        <ul className="list-unstyled text-light">
          {/* TODO: List key improvements and reflections */}
        </ul>
      </section>
    </main>
  );
}
