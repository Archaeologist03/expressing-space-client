import React from 'react';

import { StyledLink } from './navItem.styles';

// COMPONENT LOGIC
const NavItem = ({ linkTo, children }) => {
  return (
    <StyledLink to={linkTo}>
      <span className='nav-text-span'>{children}</span>
    </StyledLink>
  );
};

export default NavItem;
