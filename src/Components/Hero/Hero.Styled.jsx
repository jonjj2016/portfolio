import styled from 'styled-components';

export const Wrapped = styled.div`
  height: ${(props) => (props.full ? '100vh' : '60vh')};
  width: 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  background-attachment: fixed;
`;
export const OverLay = styled.div`
  position: absolute;
  opacity: 0.5;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: #111;
  top: 0;
  left: 0;
`;
// export const NewWrapper = styled.div`
//   width: 100%;
//   height: 90vh;
//   display: flex;
//   margin: 2% auto 0;
//   background-color: #fff;
// `;
// export const Red = styled.div`
//   height: 100%;
//   width: 50%;
//   background-color: #ff5851;
// `;
// export const White = styled.div`
//   background-color: #f8f8f8;
//   height: 100%;
//   width: 50%;
// `;
