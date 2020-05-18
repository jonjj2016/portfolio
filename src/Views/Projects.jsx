import React from 'react';
import styled from 'styled-components';
import Carousel from '../Components/Carousel/Carousel';
import ieltsBck from '../utils/images/ielts/1.jpg';
import shopBck from '../utils/images/shop/1.jpg';
import restApiBck from '../utils/images/restApi/3.jpg';
import Spinner from '../Components/Loading/Loading.component';
import Modal from '../Components/modal/Modal';

const ProjectPage = ({ modalOpen, projects, current, toggleModal, closeModal }) => {
  return (
    <Wrapper>
      <Modal modalOpen={modalOpen} closeModal={closeModal} current={current} />
      {projects ? (
        <div id='projects'>
          <Carousel projects={projects} toggleModal={toggleModal} images={[ieltsBck, shopBck, restApiBck]} />
        </div>
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #eee;
  position: relative;
`;
export default ProjectPage;
