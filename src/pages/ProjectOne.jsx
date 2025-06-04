// src/pages/ProjectOne.jsx
import React, { useState } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projectImage from '../assets/project1-large.png'; 
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

      {/* ── 4. Detailed Description (“Overview”) ──────────────────────────── */}
      <section className="mb-5">
        <h2 className="h4 text-white mb-3">Overview</h2>

        {/*  — Paragraph 1: Recap original assignment — */}
        <p className="text-light">
          In my original Portfolio 1 version of “JavaScript Frameworks,” I built a vanilla‐JS web app that fetched a static list of libraries from a small JSON file. There was no loading spinner, no error handling, and the layout was desktop-only (hard-coded widths). If the network request failed, the page simply hung without feedback.  
        </p>

        {/*  — Paragraph 2: “Why rewrite in React?” — */}
        <p className="text-light">
          For Portfolio 2, I chose to rewrite the entire app in React so that I could:  
          <ul className="list-unstyled text-light">
            <li>1. Practice React hooks (<code>useState</code>, <code>useEffect</code>) for fetching data.</li>
            <li>2. Implement a robust loading spinner and a catch-all error message (“Something went wrong—please refresh”).</li>
            <li>3. Use Bootstrap 5’s grid classes to make the card layout fully responsive (4 columns on desktop, 2 on tablet, 1 on mobile).</li>
            <li>4. Add a small search bar to filter libraries by name in real time.</li>
          </ul>
        </p>

        {/*  — Paragraph 3: “What the new version does” — */}
        <p className="text-light">
          In the new React version, a user lands on a clean homepage with a list of framework cards. Each card shows the framework’s logo, name, and a short description. While data is loading, a Bootstrap spinner is displayed; if the API call fails, a red alert appears at the top. Clicking on any card takes you to a detailed page (this article page), which includes a screenshot, live demo link, and a deeper breakdown of how it works. Images are lazy-loaded, and all thumbnails have been compressed to under 200 KB for performance.
        </p>
      </section>

      {/* ── 5. Self-Assessment & Improvements ─────────────────────────────── */}
      <section>
        <h2 className="h4 text-white mb-3">Self-Assessment & Improvements</h2>
        <ul className="list-unstyled text-light">
          <li className="mb-2">
            <strong>Before:</strong> The original version had zero error messaging, no loading indicator, and was completely desktop-only. Mobile users had to pinch-zoom, and if the fetch failed, no fallback was provided.  
          </li>
          <li className="mb-2">
            <strong>After:</strong> I introduced a controlled data‐fetch in <code>useEffect</code> with a built-in loading spinner (Bootstrap’s spinner) and a catch block to show a red alert (“Error: unable to load frameworks”). The redesign uses a 12-column Bootstrap grid so that cards collapse cleanly on smaller screens.  
          </li>
          <li className="mb-2">
            <strong>Accessibility:</strong> Added meaningful <code>alt</code> text on all images (“Logo of React framework,” etc.). Ensured color contrast: all text is either <code>#ffffff</code> or <code>rgba(255,255,255,0.85)</code> on <code>#1e1e1e</code>. Keyboard focus outlines are visible for links and buttons.  
          </li>
          <li className="mb-2">
            <strong>Performance:</strong> All thumbnails compressed to ≤ 200 KB. Images are using <code>loading="lazy"</code>. Removed unused CSS, minified the final bundle (through Create React App’s production build).  
          </li>
          <li className="mb-2">
            <strong>New Skill:</strong> I added React Context to handle a global theme (dark/light toggle). Now, future portfolio pages can reuse a “ThemeContext” to instantly switch the entire site’s color palette without rewriting CSS.  
          </li>
        </ul>
      </section>
    </main>
  );
}
