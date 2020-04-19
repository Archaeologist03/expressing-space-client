import React from 'react';
import {
  PersonalInfoContainer,
  PersonalInfoTitle,
  PersonalInfoBox,
} from './personalInfo.styles';

const PersonalInfo = () => {
  return (
    <PersonalInfoContainer>
      <PersonalInfoTitle>Personal Info</PersonalInfoTitle>
      <PersonalInfoBox></PersonalInfoBox>
    </PersonalInfoContainer>
  );
};

export default PersonalInfo;
