import React from 'react';

import Likes from '../../components/Likes/Likes';

import { ProfileContainer, LikesContainer } from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <LikesContainer>
        <Likes />
        <Likes />
        <Likes />
      </LikesContainer>
    </ProfileContainer>
  );
};

export default Profile;
