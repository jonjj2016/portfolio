import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
const configure = { hideWhenDone: true, hideWhenDoneDelay: 3000 };
const Header = () => {
  return (
    <Wrapper>
      <Title>
        <Typist stdTypingDelay={50} startDelay={1500} cursor={configure}>
          <Typist.Delay ms={500} />
          <Typist.Backspace count={8} delay={200} />
          I'm <span>JON</span>
        </Typist>
      </Title>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;
const Title = styled.div`
  font-size: 9rem;
  font-weight: 900;
  line-height: 1.3;
  color: #eee;
  span {
    color: orange;
  }
`;
export default Header;
