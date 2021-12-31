import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaChevronDown } from 'react-icons/fa';
import { ParallaxBanner } from 'react-scroll-parallax';
import zenscroll from 'zenscroll';
import bannerBg from '../../assets/banner-bg.jpg';

const Banner = () => (
  <div>
    <ParallaxBanner
      className="banner"
      layers={[
        {
          image: bannerBg,
          amount: 0.2
        }
      ]}
    >
      <div className="banner-content">
        <div className="who-am-i">
          <h1 className="display-1">Hi, I'm Yasmine</h1>
          <h2 className="mono">Data Scientist &amp; Product Manager</h2>
        </div>
        <div className="scroll-down">
          <Button onClick={() => zenscroll.center(document.getElementById("about"))}>
            <FaChevronDown />
          </Button>
        </div>
      </div>
    </ParallaxBanner>

  </div>
);

export default Banner;
