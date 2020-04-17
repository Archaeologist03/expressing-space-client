import React from 'react';

import { WelcomeContainer } from './welcome.styles';

const Welcome = () => {
  return (
    <WelcomeContainer>
      <h3 className='text'>
        Welcome to Expressing Space!
        <br />
        We strive to help you form real connection on the internet.
      </h3>
    </WelcomeContainer>
  );
};

export default Welcome;
