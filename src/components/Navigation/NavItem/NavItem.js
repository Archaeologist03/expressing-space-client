import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  color: rgb(205, 20, 27);

  transition: border 1s;

  &.${activeClassName} {
    border: 2px solid rgba(105, 20, 27, 0.05);
    box-shadow: 2px 2px 4px gba(105, 20, 27, 0.1);
    color: black;
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
