import React from 'react';
import styled from 'styled-components';

import Welcome from '../../components/Welcome/Welcome';

const LandingContainer = styled.div`
  border: 2px solid green;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <Welcome />
    </LandingContainer>
  );
};

export default Landing;
