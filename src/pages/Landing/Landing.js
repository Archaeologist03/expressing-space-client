import React from 'react';
import styled from 'styled-components';

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

const TextsContainer = styled.div``;

const TryTextContainer = styled.div`
  margin-top: 4rem;

  p {
    color: ${mainText};
    font-size: 2.3rem;
    text-align: center;
  }
`;

const Landing = () => {
  return (
    <LandingContainer>
      <TextsContainer>
        <Welcome />
        <TryTextContainer>
          <p>Try ES, no account required! </p>
        </TryTextContainer>
      </TextsContainer>
    </LandingContainer>
  );
};

export default Landing;
