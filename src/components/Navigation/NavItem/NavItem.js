import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { mainText, hoverText } from '../../../styles/-variables';

// STYLING
const activeClassName = 'nav-item-active';
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  border-radius: 3%;
  min-width: 20rem;
  text-decoration: none;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainText};
  transition: border 1s, color 0.5s;

  &.${activeClassName} {
    border: 2px solid rgba(105, 20, 27, 0.02);
    border-radius: 3%;
    box-shadow: 2px 2px 4px rgba(0, 0, 9, 0.3);
    color: rgb(211, 169, 33);
  }

  &:hover {
    color: ${hoverText};
  }
`;

// COMPONENT LOGIC
const NavItem = ({ linkTo, children }) => {
  return (
    <StyledLink to={linkTo}>
      <span className='nav-text-span'>{children}</span>
    </StyledLink>
  );
};

export default NavItem;
