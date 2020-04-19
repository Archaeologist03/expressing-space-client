import React from 'react';
import {
  PersonalInfoContainer,
  PersonalInfoTitle,
  PersonalInfoBox,
  FieldContainer,
  FieldLabel,
  Field,
} from './personalInfo.styles';

const PersonalInfo = () => {
  // get value by login info
  const name = 'Ilija';
  const location = 'Serbia';
  const age = '25';
  const gender = 'Male';
  const nickname = 'X';

  return (
    <PersonalInfoContainer>
      <PersonalInfoTitle>Personal Info</PersonalInfoTitle>
      <PersonalInfoBox>
        <FieldContainer>
          <FieldLabel htmlFor='name'>Name: </FieldLabel>
          <Field readOnly type='text' name='name' id='name' value={name} />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel htmlFor='location'>Location: </FieldLabel>
          <Field
            readOnly
            type='text'
            name='location'
            id='location'
            value={location}
          />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel htmlFor='age'>Age: </FieldLabel>
          <Field readOnly type='text' name='age' id='age' value={age} />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel htmlFor='gender'>Gender: </FieldLabel>
          <Field
            readOnly
            type='text'
            name='gender'
            id='gender'
            value={gender}
          />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel htmlFor='nickname'>Nickname: </FieldLabel>
          <Field
            readOnly
            type='text'
            name='nickname'
            id='nickname'
            value={nickname}
          />
        </FieldContainer>
      </PersonalInfoBox>
    </PersonalInfoContainer>
  );
};

export default PersonalInfo;
