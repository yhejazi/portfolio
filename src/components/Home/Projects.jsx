import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectCard from './ProjectCard';
import dogPhoto from '../../assets/project-dog.jpg';
import chronicPhoto from '../../assets/project-chronic.png';
import facesPhoto from '../../assets/project-faces.jpg';
import vgSalesPhoto from '../../assets/project-vg-sales.png';
import tvPhoto from '../../assets/project-tv.jpg';
import lyricPhoto from '../../assets/project-lyric.png';

const Projects = () => (
  <div className="py-5">
    <Container>
      <h1 className="mono">Projects</h1>
      <Row>
        <ProjectCard
          title="Dog Classification App"
          image={dogPhoto}
          link="https://github.com/yhejazi/deep-learning-nd/tree/master/project-dog-classification"
        />
        <ProjectCard
          title="TV Script Generation"
          image={tvPhoto}
          link="https://github.com/yhejazi/deep-learning-nd/tree/master/project-tv-script-generation"
        />
        <ProjectCard
          title="Face Generation"
          image={facesPhoto}
          link="https://github.com/yhejazi/deep-learning-nd/tree/master/project-face-generation"
        />
        <ProjectCard
          title="HCA Health Analysis"
          image={chronicPhoto}
          link="https://ischool.uw.edu/capstone/projects/2019/health-equity-home-care-aides-investigating-chronic-disease-prevalence"
        />
        <ProjectCard
          title="Video Game Sales Viz"
          image={vgSalesPhoto}
          link="https://github.com/yhejazi/info474/tree/master/a3"
        />
        <ProjectCard
          title="Song Lyric Web Scraper"
          image={lyricPhoto}
          link="https://github.com/yhejazi/song-lyric-scraper"
        />
      </Row>
    </Container>
  </div>
);

export default Projects;
