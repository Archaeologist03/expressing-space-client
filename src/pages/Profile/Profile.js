import React from 'react';

import Likes from '../../components/Likes/Likes';
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';

import {
  ProfileContainer,
  BoxesContainer,
  BoxContainer,
} from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <BoxesContainer>
        <BoxContainer>
          <Likes />
        </BoxContainer>
        <BoxContainer>
          <Likes />
        </BoxContainer>
        <BoxContainer>
          <PersonalInfo />
        </BoxContainer>
      </BoxesContainer>
    </ProfileContainer>
  );
};

export default Profile;
