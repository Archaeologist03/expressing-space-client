import React from 'react';

import Welcome from '../../components/Welcome/Welcome';

import {
  LandingContainer,
  TextsContainer,
  TryTextContainer,
} from './landing.styles';

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
