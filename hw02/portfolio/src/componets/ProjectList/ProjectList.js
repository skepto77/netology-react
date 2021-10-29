import React from 'react';
import PropTypes from 'prop-types';
import './ProjectList.css';

const ProjectList = ({ projects }) => {
  return (
    <div className='projects'>
      {projects.map((project, idx) => (
        <div className='projects__item' key={idx}>
          <img src={`${project.img}`} alt={`${project.category}`} />
        </div>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;
