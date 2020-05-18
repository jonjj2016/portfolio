import React from 'react';
import { Wrapped, OverLay } from './Hero.Styled';
import Title from '../Header';

const Hero = ({ full, image }) => {
  return (
    <Wrapped image={image} full={full}>
      <OverLay />
      <div id='hero'></div>
      <Title />
    </Wrapped>
  );
};

Hero.defaultProps = {
  image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
};

export default Hero;
