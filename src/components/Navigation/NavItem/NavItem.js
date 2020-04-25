import React from 'react';

import { StyledLink } from './navItem.styles';

// COMPONENT LOGIC
const NavItem = ({ linkTo, children, onSubmit }) => {
  return (
    <StyledLink onClick={onSubmit} to={linkTo}>
      <span className='nav-text-span'>{children}</span>
    </StyledLink>
  );
};

export default NavItem;
