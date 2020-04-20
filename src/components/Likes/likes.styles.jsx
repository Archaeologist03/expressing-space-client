import styled from 'styled-components';

import {
  whiteText,
  elementsBackgroundRed,
  borderRadius,
  smallTextFont,
} from '../../styles/-variables';

export const LikesContainer = styled.section`
  min-height: 30vh;
  width: 20vw;
`;

export const LikesTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: 400;
  color: ${whiteText};
  text-align: center;
  margin-bottom: ${smallTextFont};
`;

export const LikesBox = styled.div`
  border-radius: ${borderRadius};
  min-height: 45vh;
  background-color: ${elementsBackgroundRed};
  overflow: hidden;
  padding-top: 30px;
`;

export const LikeContainer = styled.div`
  margin: 2rem 10px 10px 30px;
`;
