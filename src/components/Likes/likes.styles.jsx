import styled from 'styled-components';

import { whiteText, elementsBackgroundRed } from '../../styles/-variables';

export const LikesContainer = styled.section`
  border: 2px solid yellow;
  min-height: 30vh;
  width: 20vw;
`;

export const LikesTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: 400;
  color: ${whiteText};
  text-align: center;
`;

export const LikesBox = styled.div`
  border-radius: 24px;
  min-height: 25vh;
  background-color: ${elementsBackgroundRed};
  overflow: hidden;
`;

export const LikeContainer = styled.div`
  border: 2px solid tomato;
  margin: 11px;
`;
