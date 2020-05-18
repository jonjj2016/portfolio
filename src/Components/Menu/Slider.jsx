import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Slider = ({ data, toggleSideBar, sidebar }) => {
  return (
    <React.Fragment>
      <Wrapper sidebar={sidebar}>
        <Bar>
          {data.map((item) => (
            <Link key={item._id} onClick={toggleSideBar} to={item.to} smooth={true} duration={item.duration}>
              {item.title.toUpperCase()}
            </Link>
          ))}
        </Bar>
      </Wrapper>
    </React.Fragment>
  );
};
const Wrapper = styled.div`
  position: fixed;
  top: 4rem;
  right: 0;
  display: flex;
  z-index: 200;
  height: 100vh;
  min-width: 40vw;
  background-color: rgba(0, 0, 0, 0.7);
  transform: ${({ sidebar }) => (!sidebar ? 'translateX(100%)' : 'translateX(0)')};
  transition: 400ms;
  @media only screen and (max-width: 70em) {
    width: 80vw;
  }
`;
const Bar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 3rem;
  line-height: 3;
  cursor: pointer;
  color: red;
`;
// const Background = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
//   position: absolute;
//   z-index: 150;
//   top: 4rem;
//   height: 100vh;
//   width: 100%;
//   transform: ${({ sidebar }) => (!sidebar ? 'translateX(100%)' : 'translateX(0)')};
// `;
// const RF = styled.div`
//   display: flex;
//   z-index: 200;
//   position: fixed;
// `;
export default Slider;
