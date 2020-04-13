import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Welcome from '../../components/Welcome/Welcome';
import { mainText } from '../../styles/-variables';

const LandingContainer = styled.div`
  border: 2px solid green;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${mainText};
  font-size: 1.7rem;
  border: 2px solid red;
  display: block;
  position: absolute;
  top: 55%;
  left: 50%;
`;

const LinksContainer = styled.div`
  border: 2px solid yellow;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <Welcome />
      <StyledLink to='/tryout'>Tryout</StyledLink>
    </LandingContainer>
  );
};

export default Landing;
