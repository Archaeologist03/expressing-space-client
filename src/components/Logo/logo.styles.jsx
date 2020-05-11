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
  }
`;
