import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectCard from './ProjectCard';
import dogPhoto from '../../assets/project-dog.jpg';
import chronicPhoto from '../../assets/project-chronic.png';
import facesPhoto from '../../assets/project-faces.jpg';
import vgSalesPhoto from '../../assets/project-vg-sales.png';

const Projects = () => (
  <div className="py-5">
    <Container>
      <h1 className="mono">Projects</h1>
      <Row>
        <ProjectCard
          title="Dog Breed Classifier"
          image={dogPhoto}
          link="https://github.com/yhejazi/deep-learning-nd/tree/master/project-dog-classification"
        />
        <ProjectCard
          title="HCA Health Analysis"
          image={chronicPhoto}
          link="https://github.com/capstone2019/Capstone2019"
        />
        <ProjectCard
          title="Face Generation"
          image={facesPhoto}
          link="https://github.com/yhejazi/deep-learning-nd/tree/master/project-face-generation"
        />
      </Row>
      <Row className="mt-4">
        <ProjectCard
          title="Video Game Sales Viz"
          image={vgSalesPhoto}
          link="https://github.com/yhejazi/info474/tree/master/a3"
        />
      </Row>
    </Container>
  </div>
);

export default Projects;
