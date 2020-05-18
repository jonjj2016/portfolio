import React from 'react';
import { Link } from 'react-scroll';
import { MenuWrapper, ContentWrapper } from '../../Styled/Menu';
import { Icon } from 'semantic-ui-react';

const SidebarExampleDimmed = ({ toggleSideBar, data }) => {
  return (
    <MenuWrapper>
      <ContentWrapper>
        <Link to='hero' smooth={true} duration={1000}>
          Jon Martirosyan
        </Link>
        <div onClick={toggleSideBar} style={{ fontSize: '2rem', cursor: 'pointer' }}>
          <Icon name='sidebar' />
        </div>
      </ContentWrapper>
    </MenuWrapper>
  );
};

export default SidebarExampleDimmed;
