import React from 'react';
import { Wrapper, Background } from '../Styled/Styled';
import Bio from '../Components/Bio';
import styled from 'styled-components';

const About = ({ info }) => {
  return (
    <Wrapper image={info.bckImage}>
      <Background hover={0.1} opacity={0.9} color={'#eee'} />
      <Content>
        <div id='about'></div>
        <Bio title={info.title} data={info.info} />
      </Content>
    </Wrapper>
  );
};
const Content = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default About;
