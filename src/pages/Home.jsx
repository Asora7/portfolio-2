// src/pages/Home.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

import thumb1 from '../assets/project1-thumb.png';
import thumb2 from '../assets/project2-thumb.png';
import thumb3 from '../assets/project3-thumb.png';

function Home() {
  return (
    <main className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 text-white">Your Name</h1>
        <p className="text-muted">Full-Stack Developer | JavaScript Enthusiast</p>
      </header>

      <div className="row">
        <div className="col-md-4">
          <ProjectCard
            title="JavaScript Frameworks"
            description="Refactored my original JS Frameworks assignment using React Hooks…"
            imageSrc={thumb1}
            linkTo="/project-one"
          />
        </div>
        <div className="col-md-4">
          <ProjectCard
            title="Semester Project 2"
            description="Enhanced the Semester Project 2 UI/UX by applying Bootstrap v5 and accessibility fixes…"
            imageSrc={thumb2}
            linkTo="/project-two"
          />
        </div>
        <div className="col-md-4">
          <ProjectCard
            title="Exam Project 2"
            description="Improved performance and responsiveness for my Exam Project 2 (E-commerce demo)…"
            imageSrc={thumb3}
            linkTo="/project-three"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
