import React from 'react';

import { UserContainer, ImageContainer, NameContainer } from './user.styles';

import profilePicture from '../../assets/images/profile-picture.jpeg';

const User = () => {
  return (
    <UserContainer>
      <ImageContainer>
        <img src={profilePicture} alt='profile' />
      </ImageContainer>
      <NameContainer>
        <h3>Loktar</h3>
        <p className='percentage'>77%</p>
      </NameContainer>
    </UserContainer>
  );
};

export default User;
