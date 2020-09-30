import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const ProjectCard = ({ title, description, image, github, blog }) => (
    <Card className="mb-4 border-0">
      <Row noGutters>
        <Col md={8}>
          <div className="card-body d-flex flex-column h-100">
            <h3 className="card-title font-weight-bold mt-4">{title}</h3>
            <p className="card-text">{description}</p>
            <div className="mt-auto">
              {github && (
                <Button variant="link" href={github} className="mr-2">View on GitHub</Button>
              )}
              {blog && (
                <Button variant="link" href={blog}>Read more</Button>
              )}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4">
            <img src={image} className="card-img" alt="" />
          </div>
        </Col>
      </Row>
    </Card>
);

export default ProjectCard;
