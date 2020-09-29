import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Banner from './Banner';
import Experience from './Experience';
import './Home.scss';
import Projects from './Projects';

const Home = () => (
  <div>
    <Navigation />
    <Banner />
    <About />
    <Experience />
    <Projects />
  </div>
);

export default Home;
