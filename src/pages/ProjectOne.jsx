// src/pages/ProjectOne.jsx
import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project1-large.jpg'; 
// (Make sure this is your ≤ 200 KB export from Figma/Preview)

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
      {/* ── Top Bar: Back + Share Button ─────────────────────────────────── */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Changed from text-muted → text-light for better contrast */}
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
      <h1 className="text-white mb-3">JavaScript Frameworks</h1>

      {/* ── 2. Project Image & Caption ───────────────────────────────────── */}
      <figure className="mb-4">
        <img
          src={projectImage}
          alt="Screenshot of the React-refactored JS Frameworks assignment"
          className="img-fluid rounded"
          loading="lazy"
        />
        <figcaption className="text-light-muted mt-2">
          Screenshot of the React-refactored JS Frameworks assignment
        </figcaption>
      </figure>

      {/* ── 3. Live Site & GitHub Repo Buttons ───────────────────────────── */}
      <div className="mb-5 d-flex justify-content-center gap-3">
        <a
          href="https://urbannestecom.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent"
          style={{ borderRadius: '0.25rem', minWidth: '120px' }}
        >
          View Live Site
        </a>
        <a
        href="https://github.com/Asora7/course-assignment-ecom?tab=readme-ov-file"
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
          This JavaScript Frameworks assignment is a React-based e-commerce demo.
          It fetches products from the Noroff API (<code>v2.api.noroff.dev/online-shop</code>),
          renders them in a responsive CSS Grid (via styled-components media-queries),
          and lets users search in real time, view product details, add to cart, validate and
          submit a contact form, and complete a checkout flow—all in one SPA.
        </p>
        <p className="text-light">
          Key features include:
          <ul className="list-unstyled text-light">
  <li>
    <strong>Responsive Grid</strong>: CSS Grid auto-fills 200 px cards, wrapping from 4→2→1 columns without any external library.
  </li>
  <li>
    <strong>Data Fetching</strong>: Uses <code>useEffect</code> + <code>fetch</code> with a basic error fallback when the API call fails.
  </li>
  <li>
    <strong>Live Search</strong>: Instant filtering of products by name as you type.
  </li>
  <li>
    <strong>Global Cart</strong>: Managed via React Context—add, remove, update quantity, and clear the cart on checkout.
  </li>
  <li>
    <strong>Routing & Details</strong>: Dynamic React Router routes for individual product pages.
  </li>
  <li>
    <strong>Form Validation</strong>: Inline error messages on the contact form and a success confirmation on valid submit.
  </li>
</ul>

        </p>
      </section>

      {/* ── 5. Self-Assessment & Improvements ─────────────────────────────── */}
      <section>
        <h2 className="h4 text-white mb-3">Self-Assessment & Improvements</h2>
        <ul className="list-unstyled text-light">
          <li className="mb-2">
            <strong>TypeScript Feedback:</strong> I saw “Consider TypeScript” for this project, so rather than retrofit it here, I took that advice to heart in Exam Project 2 and built the entire app with static typing there.
          </li>
          <li className="mb-2">
            <strong>Documentation:</strong> Added JSDoc comments to every component and function. Now anyone reading the code can immediately see each function’s parameters and return type.
          </li>
          <li className="mb-2">
            <strong>Clean Code:</strong> Removed leftover <code>console.log</code> statement in <code>ContactPage.handleSubmit</code> so there’s no debug noise in production code.
          </li>
        </ul>
      </section>


    </main>
  );
}
