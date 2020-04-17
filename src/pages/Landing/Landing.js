import React from 'react';

import Welcome from '../../components/Welcome/Welcome';
import Navigation from '../../components/Navigation/Navigation';

import {
  LandingContainer,
  TextsContainer,
  TryTextContainer,
} from './landing.styles';

const Landing = () => {
  return (
    <LandingContainer>
      <Navigation />
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
