import React from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../redux/user/user.actions';

import NavItem from './NavItem/NavItem';

import {
  RegularNavContainer,
  StyledNav,
  AuthProfileNavContainer,
  NavigationContainer,
} from './navigation.styles';

// COMPONENT LOGIC
const Navigation = () => {
  const dispatch = useDispatch();

  // testing redux
  const tryoutSubmit = (e) => {
    e.preventDefault();

    let email = 'x@x.com';
    let password = '12345';

    const data = { email, password };

    dispatch(loginUser(data));
  };

  const isAuth = false; // should come from redux

  let navbar = (
    <NavigationContainer>
      <RegularNavContainer>
        <StyledNav>
          <NavItem linkTo='/login'>Login</NavItem>
          <NavItem linkTo='/signup'>Register</NavItem>
          <NavItem onSubmit={tryoutSubmit} linkTo='/tryout'>
            Tryout
          </NavItem>
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
