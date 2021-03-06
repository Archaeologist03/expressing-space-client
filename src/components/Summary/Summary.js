import React from 'react';

import profilePicture from '../../assets/images/profile-picture.jpeg';
import Field from './Field/Field';

import {
  SummaryContainer,
  SummaryTitle,
  SummaryBox,
  ImageContainer,
  FieldContainer,
} from './summary.styles';

const Summary = () => {
  // Should come from server/User input..
  const fieldTitle = 'Self Summary';
  const fieldText = `Stuff about myself... I am currently reading this very profound book
  from one Russian author. One of characters name is Margarita, she
  became a witch..big times woah!`;

  return (
    <SummaryContainer>
      <SummaryTitle>About - Summary</SummaryTitle>
      <SummaryBox>
        <ImageContainer>
          <img src={profilePicture} alt='profile' />
        </ImageContainer>
        <FieldContainer>
          <Field fieldTitle={fieldTitle} fieldText={fieldText} />
        </FieldContainer>
        <FieldContainer>
          <Field fieldTitle={fieldTitle} fieldText={fieldText} />
        </FieldContainer>{' '}
        <FieldContainer>
          <Field fieldTitle={fieldTitle} fieldText={fieldText} />
        </FieldContainer>
      </SummaryBox>
    </SummaryContainer>
  );
};

export default Summary;
