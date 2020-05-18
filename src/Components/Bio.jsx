import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const Bio = ({ title, data }) => {
  return (
    <BioSomething>
      <MainBioWrapper>
        <div data-aos='fade-up'>
          <BioTitle>{title}</BioTitle>
        </div>
        <div data-aos='fade-up' data-aos-duration='7200'>
          <Wrapper>{data}</Wrapper>
        </div>
      </MainBioWrapper>
    </BioSomething>
  );
};
const MainBioWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  color: #555;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BioSomething = styled.div`
  @media only screen and (max-width: 70em) {
  }
`;
const BioTitle = styled.h1`
  font-size: 4rem;

  padding: 2rem 0 2rem 1.5rem;
  @media only screen and (max-width: 70em) {
    padding: 2rem 0 2rem 1.5rem;
  }
`;

const Wrapper = styled.div`
  font-size: 2.5rem;
  width: 70vw;
  line-height: 2;
  padding: 1rem;
  @media only screen and (max-width: 80em) {
    width: 100vw;
    font-size: 1.5rem;
    line-height: 2;
    padding: 1.5rem;
  }
  @media only screen and (max-width: 80em) {
  }
`;
export default Bio;
