import React from 'react';
import Hero from '../Components/Hero/Hero';
import About from './About';
import Knowledge from './Knowledge';
import Projects from './Projects';
import Contacts from './Contacts';

const HomePage = ({ state, setState, toggleModal, closeModal }) => {
  console.log(state);
  return (
    <React.Fragment>
      <Hero full />
      <About info={state.bio} />
      <Projects toggleModal={toggleModal} closeModal={closeModal} current={state.current} modalOpen={state.modalOpen} setState={setState} projects={state.projects} />
      <Knowledge info={state.bio} />
      <Contacts info={state.bio} />
    </React.Fragment>
  );
};

export default HomePage;
