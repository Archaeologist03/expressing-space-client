import styled from 'styled-components';

import { mainText } from '../../styles/-variables';

export const LandingContainer = styled.div`
  border: 2px solid green;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextsContainer = styled.div``;

export const TryTextContainer = styled.div`
  margin-top: 4rem;

  p {
    color: ${mainText};
    font-size: 2.3rem;
    text-align: center;
  }
`;
