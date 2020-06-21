import React from 'react';
import Col from 'react-bootstrap/Col';

const ProjectCard = ({ title, image, link }) => (
  <Col md={4}>
    <div className="project-card">
      <a href={link} className="stretched-link">
        <img src={image} alt="" className="img-fluid w-100" />
      </a>
      <div className="project-title">{title}</div>
    </div>
  </Col>
);

export default ProjectCard;
