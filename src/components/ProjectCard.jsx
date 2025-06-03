// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

function ProjectCard({ title, description, imageSrc, linkTo }) {
  return (
    <Link to={linkTo} className="text-decoration-none">
      <div className="project-card">
        {/* 1) Image Container */}
        <div
          className="project-card-image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          {/* 2) Overlay (initially hidden) */}
          <div className="project-card-overlay">
            <span className="overlay-text">View Project →</span>
          </div>
        </div>

                {/* 3) Card Body */}
                <div className="project-card-body">
          <h5 className="card-title text-white mb-1">{title}</h5>
          {/* Removed “text-muted” here */}
          <p className="card-text mb-0">{description}</p>
        </div>

      </div>
    </Link>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default ProjectCard;
