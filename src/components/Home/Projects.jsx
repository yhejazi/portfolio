import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectCard from './ProjectCard';
import dogPhoto from '../../assets/project-dog.jpg';
import chronicPhoto from '../../assets/project-chronic.png';
import facesPhoto from '../../assets/project-faces.jpg';
import vgSalesPhoto from '../../assets/project-vg-sales.png';
import tvPhoto from '../../assets/project-tv.jpg';
import lyricPhoto from '../../assets/project-lyric.png';

const Projects = () => (
  <div className="py-5" id="projects">
    <Container>
      <h1 className="mono mb-4">Projects</h1>
    </Container>
    <Container className="bg-white">
        <ProjectCard
          title="Starbucks Cawfee"
          image={dogPhoto}
          description="Cawfee! Green tea! Cawfee! Green tea! Cawfee! Green tea! Cawfee! Green tea! Cawfee! Green tea! Cawfee! Green tea! Cawfee! Green tea!"
          github="https://github.com/yhejazi/deep-learning-nd/tree/master/project-dog-classification"
          blog="https://medium.com"
        />
        <hr />
        <ProjectCard
          title="Dog Classification App"
          image={dogPhoto}
          github="https://github.com/yhejazi/deep-learning-nd/tree/master/project-dog-classification"
        />
        <hr />
        <ProjectCard
          title="TV Script Generation"
          image={tvPhoto}
          github="https://github.com/yhejazi/deep-learning-nd/tree/master/project-tv-script-generation"
        />
        <hr />
        <ProjectCard
          title="Face Generation"
          image={facesPhoto}
          github="https://github.com/yhejazi/deep-learning-nd/tree/master/project-face-generation"
        />
        <hr />
        <ProjectCard
          title="HCA Health Analysis"
          image={chronicPhoto}
          github="https://ischool.uw.edu/capstone/projects/2019/health-equity-home-care-aides-investigating-chronic-disease-prevalence"
        />
        <hr />
        <ProjectCard
          title="Video Game Sales Viz"
          image={vgSalesPhoto}
          github="https://github.com/yhejazi/info474/tree/master/a3"
        />
        <hr />
        <ProjectCard
          title="Song Lyric Web Scraper"
          image={lyricPhoto}
          github="https://github.com/yhejazi/song-lyric-scraper"
        />
    </Container>
  </div>
);

export default Projects;
