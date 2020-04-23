import React from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import {
  HeaderContainer,
  LogoContainer,
  NavigationContainer,
} from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
