import React from 'react';

import profilePicture from '../../assets/images/profile-picture.jpeg';

import {
  SummaryContainer,
  SummaryTitle,
  SummaryBox,
  ImageContainer,
  SelfSummaryContainer,
} from './summary.styles';

const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryTitle>About - Summary</SummaryTitle>
      <SummaryBox>
        <ImageContainer>
          <img src={profilePicture} alt='profile' />
        </ImageContainer>
        <SelfSummaryContainer>
          {/* If user click enter insert next row/new p tag to typed text */}
          {/* also turn into intpu if needed to open modal to update text */}
          <p>
            Stuff about myself... I am currently reading this very profound book
            from one Russian author. One of characters name is Margarita, she
            became a witch..big times woah!
          </p>
        </SelfSummaryContainer>
      </SummaryBox>
    </SummaryContainer>
  );
};

export default Summary;
