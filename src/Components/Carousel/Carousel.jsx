import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'nuka-carousel';
import { Wrapper } from '../../Styled/Carousel';

const Carousell = ({ projects, images, toggleModal }) => {
  const onClick = (id) => {
    toggleModal(id);
  };
  return (
    <Wrapper>
      <Carousel autoplay={false} autoGenerateStyleTag transitionMode='scroll'>
        {projects.map((project, index) => {
          return (
            <div key={project._id} className='container'>
              <img onClick={() => console.log('clichked')} src={images[index]} onClick={() => onClick(project._id, project)} />
            </div>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

export default Carousell;
