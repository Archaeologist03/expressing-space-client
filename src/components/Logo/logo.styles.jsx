import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  display: inline-block;
  position: fixed;
  left: 1%;
  top: 2%;
`;

export const LogoImage = styled.picture`
  .image {
    width: 5rem;
    transition: transform 1s, background-color 1s, opacity 0.5s,
      border-radius 0.1s;
    transition-timing-function: ease-out;

    &:hover {
      transform: rotateZ(-360deg) scale(1);
      background-color: rgba(255, 111, 33, 0.05);
      border-radius: 33%;
    }
  }
`;
