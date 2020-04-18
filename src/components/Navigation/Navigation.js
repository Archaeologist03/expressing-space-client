import React from 'react';

import NavItem from './NavItem/NavItem';

import {
  RegularNavContainer,
  StyledNav,
  AuthProfileNavContainer,
  NavigationContainer,
} from './navigation.styles';

// COMPONENT LOGIC
const Navigation = () => {
  const isAuth = true; // should come from redux

  let navbar = (
    <NavigationContainer>
      <RegularNavContainer>
        <StyledNav>
          <NavItem linkTo='/login'>Login</NavItem>
          <NavItem linkTo='/register'>Register</NavItem>
          <NavItem linkTo='/tryout'>Tryout</NavItem>
        </StyledNav>
      </RegularNavContainer>
    </NavigationContainer>
  );
  if (isAuth) {
    navbar = (
      <NavigationContainer>
        <AuthProfileNavContainer>
          <StyledNav>
            <NavItem linkTo='/messages'>Messages</NavItem>
            <NavItem linkTo='/users'>Explore Users</NavItem>
          </StyledNav>
        </AuthProfileNavContainer>

        <RegularNavContainer>
          <StyledNav>
            <NavItem linkTo='/profile'>Profile</NavItem>
            <NavItem linkTo='/logout'>Logout</NavItem>
          </StyledNav>
        </RegularNavContainer>
      </NavigationContainer>
    );
  }

  return navbar;
};

export default Navigation;
