// src/pages/ProjectThree.jsx
import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import projectImage from '../assets/project3-large.jpg';

function ProjectThree() {
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

      <h2 className="mb-3">Exam Project 2 (E-Commerce Demo)</h2>
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
          alt="Screenshot of Exam Project 2 (E-Commerce Demo)"
          className="img-fluid rounded"
          loading="lazy"
        />
        <figcaption className="text-muted mt-2">
          Screenshot of the optimized E-Commerce demo from Exam Project 2.
        </figcaption>
      </figure>

      <div className="mb-4">
        <a
          href="https://your-live-site-url.com/ecommerce-demo"
          target="_blank"
          rel="noreferrer"
          className="btn btn-info me-2"
        >
          View Live Site
        </a>
        <a
          href="https://github.com/Asora7/exam-project-2"
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
          Exam Project 2 is an interactive E-Commerce demo where users can browse a catalog of products, add items to a shopping cart, and simulate a checkout flow. For Portfolio 2, I revisited this project to enhance performance, improve responsiveness, and modernize the codebase for better maintainability.
        </p>
      </section>

      <section>
        <h3>Self-Assessment & Improvements</h3>
        <ul>
          <li>
            <strong>Before:</strong> The original demo was built with plain JavaScript and had no responsive design; images and scripts loaded synchronously, causing slow initial load times.
          </li>
          <li>
            <strong>After:</strong> Refactored the entire codebase to React, leveraging code splitting and React Lazy/Suspense to defer non-critical components. Converted CSS to a mobile-first layout using CSS Grid and Flexbox for a fully responsive design on all screen sizes.
          </li>
          <li>
            <strong>Accessibility:</strong> Added semantic HTML elements (e.g., <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, form labels), ensured all interactive elements are keyboard-navigable, and provided descriptive <code>alt</code> text for product images. Verified color contrast ratios meet WCAG 2.1 AA standards.
          </li>
          <li>
            <strong>Performance:</strong> Compressed product images to ≤ 200 KB using TinyPNG, implemented <code>loading="lazy"</code> on all images, and used React memoization (<code>React.memo</code>) to prevent unnecessary re-renders. Gzip compression and tree-shaking further reduced bundle size.
          </li>
          <li>
            <strong>New Skill:</strong> Integrated React Context for global cart state management, replacing prop drilling to streamline data flow. Also added a simple simulated payment form using Stripe’s test API to demonstrate secure checkout interactions.
          </li>
        </ul>
      </section>
    </article>
  );
}

export default ProjectThree;
