import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaGithub, FaRegFileAlt, FaLinkedin } from 'react-icons/fa';
import profileImg from '../../assets/profile.jpg';
import resume from '../../assets/yasmine-hejazi-resume.pdf';

const About = () => (
  <div className="about">
    <Container>
      <Row className="about-row">
        <Col lg>
          <h1 className="mono">About Me</h1>
          <p>My name is Yasmine, and I am a product manager, data scientist, and visualization nerd. <b>I like making things out of numbers and creating community. </b> <br /> <br />
            I currently work as a Product Manager, but I'm always thinking about how I can use data to make smart business decisions. I am an avid dancer, baker, and Magic: The Gathering fan.
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
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
