import React from 'react';

import logoImg from '../../assets/images/galaxy-logo.svg';

import { LogoContainer, LogoImage } from './logo.styles';

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage>
        <img className='image img-image' src={logoImg} alt='Galaxy logo' />
      </LogoImage>
    </LogoContainer>
  );
};

export default Logo;
