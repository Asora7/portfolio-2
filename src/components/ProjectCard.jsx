// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, imageSrc, linkTo }) {
  return (
    <Link to={linkTo} className="text-decoration-none">
      <div
        className="card bg-dark text-light shadow-sm mb-4"
        style={{
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        <img
          src={imageSrc}
          className="card-img-top"
          alt={`${title} thumbnail`}
          style={{ objectFit: 'cover', maxHeight: '150px' }}
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{description}</p>
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
