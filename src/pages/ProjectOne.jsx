import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project1-large.jpg';

/**
 * ProjectOne page showcasing the JavaScript Frameworks assignment.
 * Includes image, description, live demo and GitHub links.
 *
 * @component
 * @returns {JSX.Element} The full project article page.
 */
export default function ProjectOne() {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the current page URL to the clipboard.
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

      <h1 className="text-white mb-3">JavaScript Frameworks</h1>

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

      <section className="mb-5">
        <h2 className="h4 text-white mb-3">Description</h2>
        <p className="text-light">
          This JavaScript Frameworks assignment is a React-based e-commerce demo. It fetches
          products from the Noroff API (<code>v2.api.noroff.dev/online-shop</code>), renders them in
          a responsive CSS Grid, and lets users search, view product details, add to cart, and
          complete a checkout flow—all in one SPA.
        </p>
        <ul className="list-unstyled text-light">
          <li>
            <strong>Responsive Grid:</strong> CSS Grid auto-fills cards for various screen sizes.
          </li>
          <li>
            <strong>Data Fetching:</strong> Uses <code>useEffect</code> and <code>fetch</code> with
            error fallback.
          </li>
          <li>
            <strong>Live Search:</strong> Real-time product filtering.
          </li>
          <li>
            <strong>Global Cart:</strong> Managed via React Context API.
          </li>
          <li>
            <strong>Routing:</strong> Uses dynamic React Router routes.
          </li>
          <li>
            <strong>Form Validation:</strong> Inline errors and success confirmation on submit.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="h4 text-white mb-3">Self-Assessment & Improvements</h2>
        <ul className="list-unstyled text-light">
          <li>
            <strong>TypeScript Feedback:</strong> Acted on TS feedback by using it in Exam Project
            2.
          </li>
          <li>
            <strong>Documentation:</strong> Added JSDoc comments across components.
          </li>
          <li>
            <strong>Clean Code:</strong> Removed leftover debug <code>console.log</code> statements.
          </li>
        </ul>
      </section>
    </main>
  );
}
