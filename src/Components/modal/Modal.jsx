import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Modal = ({ modalOpen, current, closeModal }) => {
  const render = () => {
    if (modalOpen) {
      return (
        <Wrapper modalOpen={modalOpen}>
          <Background modalOpen={modalOpen} onClick={closeModal} />
          <Content modalOpen={modalOpen}>
            <h1>{current.title}</h1>
            <p>{current.description}</p>
            <div className='buttons'>
              <a href={current.githubUrl}>
                Github Repository <Icon name='github' />
              </a>
              {current.siteLink && <a href={current.siteLink}>See More</a>}
              <button onClick={closeModal}>Back</button>
            </div>
          </Content>
        </Wrapper>
      );
    } else {
      return null;
    }
  };
  return <React.Fragment>{render()}</React.Fragment>;
};
const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  /* min-height: 10vh; */
  min-width: 30vw;
  max-width: 60vw;
  background-color: #e8e8ea;
  border-radius: 10px;
  z-index: 2;
  padding: 2rem;
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
  }
  @media only screen and (max-width: 70em) {
    .buttons {
      flex-direction: column;
      justify-content: space-around;
    }
    button,
    a {
      margin-top: 1rem;
    }
  }
  a {
    display: block;
    min-width: 200px;
    height: 30px;
    text-decoration: none;
    background-color: #111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding: 0.8rem;
    border-radius: 5px;
    color: #999;
    cursor: pointer;
    transition: 400ms;
    margin-right: 1rem;
    :hover {
      color: #fff;
    }
  }

  button {
    min-width: 200px;
    height: 30px;
    background-color: #111;
    border: none;
    font-size: 1.2rem;
    border-radius: 5px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
    transition: 400ms;
    margin-right: 1rem;
    :hover {
      color: #fff;
    }
  }
`;
const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* @media only screen and (max-width: 70em) {
    height: 50%;
  } */
`;
export default Modal;
