import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem/NavItem';

// STYLING
const StyledNav = styled.nav`
  height: 8vh;
  position: fixed;
  right: 0;
  top: 0;
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
  margin-right: 5rem;
`;

// COMPONENT LOGIC
const Navigation = ({ navsData }) => {
  return (
    <StyledNav>
      {navsData.map((navData) => {
        return <NavItem linkTo={navData.linkTo}>{navData.name}</NavItem>;
      })}
    </StyledNav>
  );
};

export default Navigation;
