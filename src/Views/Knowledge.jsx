import React from 'react';
import { Wrapper, Background, Content } from '../Styled/Styled';
import Bar from '../Components/bar';
import styled from 'styled-components';

const Knowledge = ({ info }) => {
  console.log(info);
  return (
    <Wrapper fixed image={'https://images.unsplash.com/photo-1562075950-23ba332df71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}>
      <Background opacity={0.7} color={'#fff'} />
      <InnerWrapper>
        <Languages>
          <div id='more'>{info.languages && info.languages.map((item, index) => <Bar key={index} item={item} />)}</div>
        </Languages>
      </InnerWrapper>
    </Wrapper>
  );
};
const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Languages = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export default Knowledge;
