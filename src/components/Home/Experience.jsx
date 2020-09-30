import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UwLogo from '../../assets/uw-logo.svg';
import UdacityLogo from '../../assets/udacity-logo.svg';
import FunkoLogo from '../../assets/funko-logo.svg';
import NikeLogo from '../../assets/nike-logo.svg';
import SeiuLogo from '../../assets/seiu-logo.svg';
import PemcoLogo from '../../assets/pemco-logo.svg';




const Experience = () => (
  <div className="experience py-5" id="experience">
    <Container>
      <h1 className="mono heading">Experience</h1>
      <Row>
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
             <img src={FunkoLogo} alt="Funko logo" />
            </div>
            <div>
              <h4>Funko</h4>
              <div className="gray">Jan. 2020 – Present <br /> Everett, WA</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            Product Development Coordinator
          </h4>
          <ul className="light-gray">
            <li>Managing product development in cross-functional team for 120+ product lines, $16M in revenue</li>
            <li>Determining product and stakeholder requirements between artists, licensors, factories, and retailers</li>
            <li>Heading product with multiple notable licensors: Warner Bros, Sanrio, Nickelodeon, &amp; Sony Pictures</li>
            <li>Driving packaging and costing standardization of Pop! products across all Funko factories</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
             <img src={NikeLogo} alt="Nike logo" />
            </div>
            <div>
              <h4>Nike</h4>
              <div className="gray">June 2019 – Aug. 2019 <br /> Beaverton, OR</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            Software Engineer Intern
          </h4>
          <ul className="light-gray">
            <li>Led feature discovery and data modeling to be used to improve WiFi network for new Nike HQ buildings</li>
            <li>Improved computer jobs efficiency by identifying 60% of cause of failures using machine learning</li>
            <li>1st place Hack72 Hackathon winner, creating innovative RFID fitting room experience using React</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
             <img src={SeiuLogo} alt="SEIU logo" />
            </div>
            <div>
              <h4>SEIU Benefits Group</h4>
              <div className="gray">Jan. 2019 – June 2019 <br /> Seattle, WA</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            Data Analyst Intern
          </h4>
          <ul className="light-gray">
            <li>Lead role in sponsored Capstone project to analyze prevalence of chronic diseases in home care aides</li>
            <li>Identified 5 key demographics for business needs through statistical analysis, validation, &amp; dashboarding</li>
            <li>Developed effective communication strategies to maintain productive collaboration between five teams</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
             <img src={PemcoLogo} alt="PEMCO logo" />
            </div>
            <div>
              <h4>PEMCO Insurance</h4>
              <div className="gray">June. 2018 – Aug. 2018 <br /> Seattle, WA</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            Data Analyst Intern
          </h4>
          <ul className="light-gray">
            <li>Improved Auto Claims program performance by 25% by analyzing areas of inefficiencies</li>
            <li>Introduced automated approach to clean and mine multi-year claims data</li>
            <li>Exceeded project base requirements &amp; presented key outcomes of analysis to company executives</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <Container className="mt-5">
      <h1 className="mono heading">Education</h1>
      <Row>
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
              <img src={UwLogo} alt="UW logo" />
            </div>
            <div>
              <h4>University of Washington</h4>
              <div className="gray">Dec. 2019 <br /> Seattle, WA</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            B.S. Informatics - Data Science option <br />
            B.A. Linguistics
          </h4>
          <p className="gray">
            GPA 3.8 / Dean's List
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
              <img src={UdacityLogo} alt="Udacity logo" />
            </div>
            <div>
              <h4>Udacity</h4>
              <div className="gray">Jan. 2019 – Present</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            Deep Learning Nanodegree <br />
            Data Foundations Nanodegree
          </h4>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Experience;
