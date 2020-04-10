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
`;

// COMPONENT LOGIC
const Navigation = () => {
  return (
    <StyledNav>
      <NavItem linkTo='/login'>Log in</NavItem>
      <NavItem linkTo='/register'>Register</NavItem>
      <NavItem linkTo='/tryout'>Tryout</NavItem>
    </StyledNav>
  );
};

export default Navigation;
