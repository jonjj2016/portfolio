import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  color: #eee;
  padding: 1rem;
  a {
    color: #eee;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
export const MenuWrapper = styled.div`
  width: 100%;
  height: 4rem;
  box-shadow: 8px 8px 18px 10px rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
export const Bar = styled.div`
  @media only screen and (min-width: 80em) {
    display: block;
    display: flex;
    flex-direction: column;
  }
`;
export const Logo = styled.div`
  color: #eee;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  @media only screen and (max-width: 80em) {
    display: none;
  }
`;
