import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaGithub, FaRegFileAlt, FaLinkedin, FaMedium } from 'react-icons/fa';
import profileImg from '../../assets/profile.jpg';
import resume from '../../assets/yasmine-hejazi-resume.pdf';

const About = () => (
  <div className="about" id="about">
    <Container>
      <Row className="about-row">
        <Col lg>
          <h1 className="mono">About Me</h1>
          <p>
          I'm an industry professional and student in the fields of data science and product management.
          I have a dual degree in Informatics &amp; Linguistics from the University of Washington and 
          I'm completing my Data Science Masters at UC Berkeley.
          <br /> <br />
          Outside of work, I volunteer to develop video games for charity and I write articles 
          for publications like Towards Data Science &amp; The Startup. You can frequently find me 
          at the tennis courts or board game cafes. :)
          </p>
        </Col>
        <Col xs>
        <div className="profile-photo">
          <img src={profileImg} alt="Yasmine" className="img-fluid rounded-circle" />
        </div>
        </Col>
        <Col xs className="external-links">
          <div>
            <a href={resume} className="external-link">
              <FaRegFileAlt />
              <div>Resume</div>
            </a>
            <a href="https://linkedin.com/in/yasmine-hejazi/" className="external-link">
              <FaLinkedin />
              <div>LinkedIn</div>
            </a>
            <a href="https://github.com/yhejazi" className="external-link">
              <FaGithub />
              <div>GitHub</div>
            </a>
            <a href="https://medium.com/@yazihejazi" className="external-link">
              <FaMedium />
              <div>Medium</div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
