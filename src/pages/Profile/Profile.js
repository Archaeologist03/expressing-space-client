import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Likes from '../../components/Likes/Likes';

import { ProfileContainer, LikesContainer } from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <Navigation />
      <LikesContainer>
        <Likes />
      </LikesContainer>
    </ProfileContainer>
  );
};

export default Profile;
