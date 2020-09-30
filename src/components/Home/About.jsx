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
          <p>My name is Yasmine, and I am a product manager, data scientist, and visualization nerd.
            I am a recent University of Washington Informatics &amp; Linguistics graduate with 2+
            years experience in analytics through research and internships.
            <br /> <br />
            <b>I like making things and meeting people!</b> I currently work as a Product Manager, but I'm always thinking about how I can use data
            to make smart business decisions. Outside of work, I am an avid dancer, baker, and Magic:
            The Gathering enthusiast.
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
