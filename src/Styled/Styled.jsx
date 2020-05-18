import styled from 'styled-components';
export const Wrapper = styled.div`
  height: ${({ min_height }) => (min_height ? '40vh' : '100vh')};
  width: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-attachment: ${({ fixed }) => (fixed ? 'fixed' : 'none')};
  background-position: center;
  position: relative;
  display: flex;
  @media only screen and (max-width: 70em) {
    font-size: 1rem;
    /* padding: 1rem; */
    width: 100vw;
    /* height: 60vh; */
  }
`;
export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  z-index: 1;
  transition: 400ms;
  &:hover {
    opacity: ${(props) => (props.hover ? '0.1' : props.opacity)};
  }
`;
export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  @media only screen and (max-width: 70em) {
    font-size: 1.5rem;
    padding: 1rem;
    width: 100vw;
    /* height: 50vh; */
    /* CSS rules here */
  }
`;
