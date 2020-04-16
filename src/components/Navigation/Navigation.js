import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem/NavItem';

// STYLING
const StyledNav = styled.nav`
  height: 8vh;
  font-size: 2.8rem;
  display: flex;
`;

// COMPONENT LOGIC
const Navigation = ({ navsData }) => {
  return (
    <StyledNav>
      {navsData.map((navData) => {
        return (
          <NavItem key={navData.name} linkTo={navData.linkTo}>
            {navData.name}
          </NavItem>
        );
      })}
    </StyledNav>
  );
};

export default Navigation;
