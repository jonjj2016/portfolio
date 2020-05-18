import React, { useState, useEffect } from 'react';
import Menu from '../Components/Menu/Menu';
import HomePage from './Home';
import { bio } from '../data/bio';
import { projects } from '../data/projects';
import { menu } from '../data/data';
import Slider from '../Components/Menu/Slider';

const View = () => {
  const [state, setState] = useState({
    projects: [],
    bio: {},
    menu: [],
    current: {},
    modalOpen: false,
    languages: bio.languages,
    sidebar: false,
  });

  const closeModal = () => {
    console.log(state.modalOpen);
    setState({ ...state, modalOpen: false, current: {} });
  };

  useEffect(() => {
    setState({ ...state, projects, bio, menu }, console.log(state));
  }, [state.projects, state.current, setState, state.modalOpen]);
  const toggleSideBar = () => setState({ ...state, sidebar: !state.sidebar });
  const setProject = (projectId) => {
    const current = state.projects.find((item) => item._id === projectId);
    setState({ ...state, current, modalOpen: true });
  };

  return (
    <div>
      <Menu toggleSideBar={toggleSideBar} />
      <Slider data={state.menu} sidebar={state.sidebar} toggleSideBar={toggleSideBar} />
      <HomePage closeModal={closeModal} toggleModal={setProject} state={state} />
    </div>
  );
};

export default View;
