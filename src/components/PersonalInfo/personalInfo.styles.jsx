import styled from 'styled-components';

import { whiteText, elementsBackgroundRed } from '../../styles/-variables';

export const PersonalInfoContainer = styled.section`
  border: 2px solid yellow;
  min-height: 30vh;
  width: 20vw;
`;

export const PersonalInfoTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: 400;
  color: ${whiteText};
  text-align: center;
`;

export const PersonalInfoBox = styled.div`
  border-radius: 24px;
  min-height: 25vh;
  background-color: ${elementsBackgroundRed};
  overflow: hidden;
`;
