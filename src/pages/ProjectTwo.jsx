// src/pages/ProjectTwo.jsx
import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import projectImage from '../assets/project2-large.png';

function ProjectTwo() {
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

      <h2 className="mb-3">Semester Project 2 (BidShare)</h2>
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
          alt="Screenshot of Semester Project 2 (BidShare)"
          className="img-fluid rounded"
          loading="lazy"
        />
        <figcaption className="text-muted mt-2">
          Screenshot of my improved Semester Project 2 (BidShare auction site).
        </figcaption>
      </figure>

      <div className="mb-4">
        <a
          href="https://asora-auction-site.netlify.app/?classId=bbc516b1-3b66-40d2-beb1-b696fd0c5230&assignmentId=c181e851-cc93-4473-8eaf-98528a341b16&submissionId=2d501d00-87cb-4746-a675-67e2047475f4"
          target="_blank"
          rel="noreferrer"
          className="btn btn-info me-2"
        >
          View Live Site
        </a>
        <a
          href="https://github.com/Asora7/semester-project-2"
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
          Semester Project 2 (“BidShare”) is a React + Firebase–based auction platform where users can
          browse listings, place bids, and manage their own auctions. For Portfolio 2, I revisited
          this project to improve UX, accessibility, and code structure.
        </p>
      </section>

      <section>
        <h3>Self-Assessment & Improvements</h3>
        <ul>
          <li>
            <strong>Before:</strong> The original version lacked responsive behavior on mobile and did
            not display clear “active” badges or bid history.
          </li>
          <li>
            <strong>After:</strong> Added Bootstrap 5 grid/components to ensure a fully responsive
            layout on both desktop and mobile breakpoints. Listings now stack gracefully and register
            buttons resize correctly.
          </li>
          <li>
            <strong>Accessibility:</strong> Implemented ARIA labels on form inputs and buttons,
            ensured color contrast ratios exceed WCAG 2.1 AA standards, and added keyboard‐focus
            outlines for all interactive elements.
          </li>
          <li>
            <strong>Performance:</strong> Optimized all listing images via TinyPNG to be ≤ 200 KB and
            installed React Lazy & Suspense to defer loading of non-critical components until
            needed.
          </li>
          <li>
            <strong>New Skill:</strong> Integrated Firebase Authentication (Email/Password) so users
            can securely log in/register and their sessions persist across reloads.
          </li>
        </ul>
      </section>
    </article>
  );
}

export default ProjectTwo;
