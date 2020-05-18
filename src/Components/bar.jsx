import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';
import styled from 'styled-components';

const ProgBar = ({ item }) => {
  return (
    <Wrapper>
      <div>
        <Title>{item.name}</Title>
      </div>
      <Progress>
        <ProgressBar percent={item.progress} fillBackground='linear-gradient(to right, #fefb72, #f0bb31)' />
      </Progress>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 80vw;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 70em) {
    margin: 1rem auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
  }
`;
const Progress = styled.div`
  padding: 2rem 0;
  width: 60%;
`;
const Title = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 2;
  @media only screen and (max-width: 80em) {
    /* font-size: 1.2rem; */
    line-height: 1;
  }
`;
export default ProgBar;
