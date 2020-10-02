import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectCard from './ProjectCard';
import dogPhoto from '../../assets/project-dog.jpg';
import chronicPhoto from '../../assets/project-chronic.png';
import facesPhoto from '../../assets/project-faces.jpg';
import vgSalesPhoto from '../../assets/project-vg-sales.png';
import tvPhoto from '../../assets/project-tv.jpg';
import sbuxPhoto from '../../assets/project-sbux.jpeg';
import magicPhoto from '../../assets/project-magic.jpeg';

const Projects = () => (
  <div className="py-5" id="projects">
    <Container>
      <h1 className="mono mb-4">Projects</h1>
    </Container>
    <Container className="bg-white">
        <ProjectCard
          title="Starbucks Nutrition Scrape &amp; EDA"
          image={sbuxPhoto}
          description="I built a web scraper for Starbucks drinks nutrition data from its latest 
          menu. I used this data to generate an EDA notebook and compare nutrition findings to FDA 
          suggested DVs to determine general health guidelines for your Starbucks drink."
          publication="Publication: The Startup"
          github="https://github.com/yhejazi/starbucks-nutrition"
          blog="https://medium.com/swlh/how-unhealthy-is-your-starbucks-drink-55b23ae371d6"
        />
        <hr />
        <ProjectCard
          title="Magic: The Gathering Card Web Scraper"
          image={magicPhoto}
          description="This is a web scraper that collects data of all Magic: The Gathering cards on 
          Wizards of the Coast's Gatherer website."
          github="https://github.com/yhejazi/mtg-web-scraper"
        />
        <hr />
        <ProjectCard
          title="Dog Classification App"
          image={dogPhoto}
          description="I built a pipeline that includes pre-prossessing user-supplied images and 
          using a CNN to classify dog breeds. Given an image of a dog, the algorithm will identify 
          an estimate of the canine’s breed. If supplied an image of a human, the code will identify 
          the resembling dog breed."
          github="https://github.com/yhejazi/deep-learning-nd/tree/master/project-dog-classification"
        />
        <hr />
        <ProjectCard
          title="TV Script Generation"
          image={tvPhoto}
          description="I generated my own Seinfeld TV scripts using RNNs. I used a Seinfeld dataset 
          of scripts from 9 seasons to train the network to generate a new, 
          &quot;fake&quot; TV script."
          github="https://github.com/yhejazi/deep-learning-nd/tree/master/project-tv-script-generation"
        />
        <hr />
        <ProjectCard
          title="Face Generation"
          image={facesPhoto}
          description="I defined and trained a DCGAN on a dataset of faces. I created a generator 
          network to generate new images of faces that look as realistic as possible. When 
          visualizing results, my generated samples look like fairly realistic faces with little noise."
          github="https://github.com/yhejazi/deep-learning-nd/tree/master/project-face-generation"
        />
        <hr />
        <ProjectCard
          title="Video Game Sales Interactive Viz"
          image={vgSalesPhoto}
          description="My team implemented the interactive technique of a bubble chart using Javascript 
          and D3 in order to allow user exploration of video game sales. The goal of this project was 
          to document and iterate the effectiveness of specific visualization techniques re-implemented in 
          the context of the data domain."
          github="https://github.com/yhejazi/info474/tree/master/a3"
        />
    </Container>
  </div>
);

export default Projects;
