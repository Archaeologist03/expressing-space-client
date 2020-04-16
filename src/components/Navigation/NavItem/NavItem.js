import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  mainText,
  hoverText,
  elementsBackgroundRed,
} from '../../../styles/-variables';

// STYLING
const activeClassName = 'nav-item-active';
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  border: 2px solid transparent;
  border-radius: 24px;
  padding: 0 3rem;
  text-decoration: none;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainText};
  transition: border 1s, color 0.5s;

  &.${activeClassName} {
    border: 2px solid rgba(105, 20, 27, 0.02);
    border-radius: 24px;
    box-shadow: 2px 2px 4px rgba(0, 0, 9, 0.3);
    color: rgb(211, 169, 33);
  }

  &:hover {
    color: ${hoverText};
    border: 2px solid ${elementsBackgroundRed};
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
