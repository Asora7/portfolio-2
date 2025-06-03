// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

function ProjectCard({ title, description, imageSrc, linkTo }) {
  return (
    <Link to={linkTo} className="text-decoration-none">
      <div className="project-card">
        <div
          className="project-card-image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="project-card-overlay">
            <span className="overlay-text">View Project →</span>
          </div>
        </div>

                <div className="project-card-body">
          <h5 className="card-title text-white mb-1">{title}</h5>
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
