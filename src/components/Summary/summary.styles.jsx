import styled from 'styled-components';

import {
  whiteText,
  elementsBackgroundRed,
  smallTextFont,
  borderRadius,
} from '../../styles/-variables';

export const SummaryContainer = styled.section`
  min-height: 30vh;
  min-width: 40vw;
  max-width: 45vw;
`;

export const SummaryTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: 400;
  color: ${whiteText};
  text-align: center;
  margin-bottom: ${smallTextFont};
`;

export const SummaryBox = styled.div`
  min-height: 45vh;
  border-radius: ${borderRadius};
  background-color: ${elementsBackgroundRed};
  overflow: hidden;
  padding-top: 30px;
`;

export const ImageContainer = styled.div`
  border: 1px solid #211111;
  box-shadow: 2px 4px 12px #211111f5;
  border-radius: 50%;
  overflow: hidden;
  width: 65px;
  height: 65px;
  position: relative;
  left: 5%;

  img {
    width: 150%;
    height: 150%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
