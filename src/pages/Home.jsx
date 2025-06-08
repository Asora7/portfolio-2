import React, { useRef, useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

import thumb1 from '../assets/project1-thumb.jpg';
import thumb2 from '../assets/project2-thumb.jpg';
import thumb3 from '../assets/project3-thumb.jpg';
import myPhoto from '../assets/your-photo.jpg';

import {
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNpm,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase } from 'react-icons/si';

/**
 * Custom hook to check if a referenced element is in view.
 * @param {React.RefObject} ref - The ref of the element to observe.
 * @returns {boolean} Whether the element is in view.
 */
function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

/**
 * Homepage component showing profile, skills, and project cards.
 * Includes scroll-based animation visibility.
 *
 * @component
 * @returns {JSX.Element} The home page layout with sections.
 */
export default function Home() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const footerRef = useRef();

  const heroInView = useInView(heroRef);
  const aboutInView = useInView(aboutRef);
  const skillsInView = useInView(skillsRef);
  const projectsInView = useInView(projectsRef);
  const footerInView = useInView(footerRef);

  return (
    <>
      <section className="container py-5">
        <div ref={heroRef} className={`section-card fade-up ${heroInView ? 'in-view' : ''}`}>
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={myPhoto}
                alt="Veronica Asora"
                className="rounded-circle"
                style={{
                  width: '160px',
                  height: '160px',
                  objectFit: 'cover',
                  border: '3px solid var(--accent)',
                }}
              />
            </div>
            <div className="col-md-8">
              <h1 className="display-4" style={{ color: 'var(--text-light)' }}>
                Hi, I’m Veronica Asora
              </h1>
              <p
                className="lead"
                style={{ fontSize: '1.3rem', marginTop: '0.5rem', color: 'var(--text-light)' }}
              >
                I’m a <span style={{ color: 'var(--accent)' }}>Front-end Developer</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6">
            <div ref={aboutRef} className={`section-card fade-up ${aboutInView ? 'in-view' : ''} h-100`}>
              <h2 className="section-title">About Me</h2>
              <p className="about-text">
                I spent my first two years of front‐end school writing HTML/CSS from scratch, and I’ve been hooked ever since.
                Today, I build responsive, accessible React applications using JavaScript, TypeScript, Bootstrap 5, and Tailwind.
                I deploy every project to Netlify, manage code on GitHub, and always strive for pixel‐perfect design plus rock‐solid functionality.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div ref={skillsRef} className={`section-card fade-up ${skillsInView ? 'in-view' : ''} h-100`}>
              <h2 className="section-title">Skills &amp; Technology</h2>
              <ul className="skills-list">
                <li><FaJsSquare size={20} color="#F7DF1E" /> JavaScript (ES6+)</li>
                <li><SiTypescript size={20} color="#3178C6" /> TypeScript</li>
                <li><FaReact size={20} color="#61DAFB" /> React</li>
                <li><FaBootstrap size={20} color="#7952B3" /> Bootstrap 5</li>
                <li><SiTailwindcss size={20} color="#38B2AC" /> Tailwind CSS</li>
                <li><FaHtml5 size={20} color="#E34F26" /> HTML5</li>
                <li><FaCss3Alt size={20} color="#1572B6" /> CSS3 (Flexbox, Grid)</li>
                <li><FaGitAlt size={20} color="#F05032" /> Git &amp; GitHub</li>
                <li><FaNpm size={20} color="#CB3837" /> Deployment (Netlify)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="container py-5">
        <div ref={projectsRef} className={`section-card fade-up ${projectsInView ? 'in-view' : ''}`}>
          <h2 className="section-title text-center">Recent Projects</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <ProjectCard
                title="JavaScript Frameworks"
                description="A React-powered e-commerce demo showcasing product listings, search/filter functionality, and a fully responsive design."
                imageSrc={thumb1}
                linkTo="/project-one"
              />
            </div>
            <div className="col">
              <ProjectCard
                title="Semester Project 2"
                description="A live auction platform built in React where users can browse items, place bids, and track current highest offers in real time."
                imageSrc={thumb2}
                linkTo="/project-two"
              />
            </div>
            <div className="col">
              <ProjectCard
                title="Exam Project 2"
                description="A vacation-rental booking app featuring searchable listings, interactive calendars, and a streamlined reservation flow."
                imageSrc={thumb3}
                linkTo="/project-three"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
