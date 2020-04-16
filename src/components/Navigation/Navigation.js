import React, { Fragment } from 'react';
import styled from 'styled-components';

import NavItem from './NavItem/NavItem';

// STYLING
const StyledNav = styled.nav`
  height: 8vh;
  font-size: 2.8rem;
  display: flex;
`;

const RegularNavContainer = styled.div`
  position: fixed;
  top: 0;
  right: 5%;
`;

const AuthProfileNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 8%;
`;

// COMPONENT LOGIC
const Navigation = () => {
  const isAuth = true; // should come from redux

  let navbar = (
    <RegularNavContainer>
      <StyledNav>
        <NavItem linkTo='/login'>Login</NavItem>
        <NavItem linkTo='/register'>Register</NavItem>
        <NavItem linkTo='/tryout'>Tryout</NavItem>
      </StyledNav>
    </RegularNavContainer>
  );
  if (isAuth) {
    navbar = (
      <Fragment>
        <RegularNavContainer>
          <StyledNav>
            <NavItem linkTo='/profile'>Profile</NavItem>
            <NavItem linkTo='/logout'>Logout</NavItem>
          </StyledNav>
        </RegularNavContainer>

        <AuthProfileNavContainer>
          <StyledNav>
            <NavItem linkTo='/messages'>Messages</NavItem>
            <NavItem linkTo='/users'>Explore Users</NavItem>
          </StyledNav>
        </AuthProfileNavContainer>
      </Fragment>
    );
  }

  return navbar;
};

export default Navigation;
