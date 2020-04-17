import styled from 'styled-components';

import { whiteText, elementsBackgroundRed } from '../../styles/-variables';

export const WelcomeContainer = styled.section`
  border-radius: 24px;
  box-shadow: 2px 2px 16px ${elementsBackgroundRed};
  min-width: 40%;
  min-height: 25vh;
  background-color: ${elementsBackgroundRed};
  color: ${whiteText};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  line-height: 3rem;

  .text {
    padding: 3rem;
    text-align: center;
  }
`;
