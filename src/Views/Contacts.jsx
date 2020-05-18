import React from 'react';
import { Wrapper, Background } from '../Styled/Styled';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Knowledge = ({ info }) => {
  const { first_name, last_name, address, github, linkedin, phone, email } = info;
  return (
    <Wrapper min_height fixed image={'https://images.unsplash.com/photo-1557075877-bf592ed513a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'} fixed>
      <Background hover opacity={0.7} color={'#000'} />
      <Content>
        <div id='contacts'></div>
        <Links>
          <a href={linkedin}>
            <Icon name='linkedin square' />
          </a>
          <a href={github}>
            <Icon name='github square' />
          </a>
        </Links>
        <Bio>
          <div>
            <Icon name='male' /> {first_name} {last_name}
          </div>
          <div>
            <Icon name='phone' /> {phone}
          </div>
          <div>
            <Icon name='mail' /> {email}
          </div>
          <div>
            <Icon name='address card' /> {address}
          </div>
        </Bio>
      </Content>
    </Wrapper>
  );
};
const Content = styled.div`
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Bio = styled.div`
  display: flex;
  flex-direction: column;
  color: #eee;
  z-index: 2;
  font-size: 1.3rem;
  padding: 1rem;
  line-height: 2;
  div {
    cursor: pointer;
    transition: 300ms;
    &:hover {
      color: #1683e3;
    }
  }
`;
const Links = styled.div`
  display: flex;
  a {
    color: #eee;
    display: inline-block;
    font-size: 3rem;
    transition: 300ms;
    &:hover {
      color: #1683e3;
    }
  }
`;
export default Knowledge;
