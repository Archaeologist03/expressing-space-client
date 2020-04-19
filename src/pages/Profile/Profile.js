import React from 'react';

import Likes from '../../components/Likes/Likes';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';

import { ProfileContainer, LikesContainer } from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <LikesContainer>
        <Likes />
        <Likes />
        <PersonalInfo />
      </LikesContainer>
    </ProfileContainer>
  );
};

export default Profile;
