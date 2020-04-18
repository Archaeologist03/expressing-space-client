import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  mainText,
  hoverText,
  elementsBackgroundRed,
} from '../../../styles/-variables';

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  min-height: 8vh;
  border: 2px solid transparent;
  border-radius: 24px;
  min-width: 5rem;
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
