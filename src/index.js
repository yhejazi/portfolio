import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import Home from './components/Home';


ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
