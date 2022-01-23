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
import TmobileLogo from '../../assets/tmobile-logo.svg';
import BerkeleyLogo from '../../assets/berkeley-logo.svg';




const Experience = () => (
  <div className="experience py-5" id="experience">
    <Container>
      <h1 className="mono heading">Experience</h1>

      <Row className="mt-4">
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
             <img src={TmobileLogo} alt="T-mobile logo" />
            </div>
            <div>
              <h4>T-Mobile</h4>
              <div className="gray">Oct. 2021 – Present <br /> Bellevue, WA</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            Data Scientist
          </h4>
          <p className="light-gray">
            I am developing and managing an ML model evaluation tool product 
            to be used across various enterprise projects. Furthermore, I am 
            piloting machine learning projects to predict mobile device purchasing
            and retail promotion impacts to call centers.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
             <img src={TmobileLogo} alt="T-mobile logo" />
            </div>
            <div>
              <h4>T-Mobile</h4>
              <div className="gray">Oct. 2020 – Oct. 2021 <br /> Bellevue, WA</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            Product Manager
          </h4>
          <p className="light-gray">
          I mastered SAFe and Agile/Scrum methodologies to collaborate cross-functionally 
          and deliver new product solutions for the T-Mobile design system. Notably, 
          I drove product telemetry implementation to achieve data-driven platform 
          investments, backlog prioritization, and retail pain-point tracking.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
             <img src={FunkoLogo} alt="Funko logo" />
            </div>
            <div>
              <h4>Funko</h4>
              <div className="gray">Jan. 2020 – June 2020 <br /> Everett, WA</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            Product Development Manager
          </h4>
          <p className="light-gray">
            I managed Pop! product development for 120+ product lines, $16M in 
            revenue. I was in charge of products of multiple notable licensors: 
            Warner Bros, Sanrio, Nickelodeon, &amp; Sony Pictures.
          </p>
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
          <p className="light-gray">
            I improved batch jobs efficiency by identifying 60% of cause of 
            failures and prediction with machine learning. I also won 1st place 
            at Nike's Hack72 Hackathon by creating an innovative RFID fitting room 
            experience using React.
          </p>
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
          <p className="light-gray">
            I improved an auto claims program's performance by 25% by analyzing 
            areas of inefficiencies and introducing automated approaches to 
            cleaning and mining big claims data.
          </p>
        </Col>
      </Row>
    </Container>
    <Container className="mt-5">
      <h1 className="mono heading">Education</h1>
      <Row className="mt-4">
        <Col md={6}>
          <div className="experience-name">
            <div className="experience-logo">
              <img src={BerkeleyLogo} alt="Berkeley logo" />
            </div>
            <div>
              <h4>University of California, Berkeley</h4>
              <div className="gray">Dec. 2022 <br /> Berkeley, CA</div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4>
            Master in Information and Data Science
          </h4>
          <p className="gray">
            GPA 4.0 | Part Time
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
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
              <div className="gray">Jan. 2019 – Apr. 2020</div>
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
