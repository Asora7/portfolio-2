import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

/**
 * A card component that displays a project with image, title, and description.
 * Wrapped in a Link for routing to the project detail page.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - Short description of the project.
 * @param {string} props.imageSrc - URL or path to the project image.
 * @param {string} props.linkTo - Route path to navigate to project detail.
 * @returns {JSX.Element} A styled card linking to a project page.
 */
function ProjectCard({ title, description, imageSrc, linkTo }) {
  return (
    <Link to={linkTo} className="text-decoration-none">
      <div className="project-card">
        <div className="project-card-image" style={{ backgroundImage: `url(${imageSrc})` }}>
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
