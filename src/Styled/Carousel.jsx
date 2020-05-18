import styled from 'styled-components';

export const Wrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 70%;
    width: 90%;
    object-fit: cover;
    border-radius: 2rem;
    box-shadow: 9px 5px 13px #333;
    position: relative;
    transition: 300ms;
    &:hover {
      box-shadow: 1px 1px 6px #333;
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    left: 0;
    border: 3px solid red;
    transform: translate(-50% -50%);
    height: 100%;
    width: 100%;
    display: block;
    justify-content: center;
    align-items: center;
    content: '';
    .inner {
      height: 10%;
      width: 30%;
      border: 3px solid black;
    }
  }
`;
