import React from 'react';
import styled from 'styled-components';

import logoImg from '../../assets/images/galaxy-logo.svg';

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage>
        <img className='image img-image' src={logoImg} alt='Galaxy logo' />
      </LogoImage>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: inline-block;
  position: absolute;
  left: 1%;
  top: 2%;
`;

const LogoImage = styled.picture`
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

export default Logo;
