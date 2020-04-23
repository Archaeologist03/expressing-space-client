import styled from 'styled-components';

import {
  elementsBackgroundRed,
  borderRadius,
  imageBorder,
  blackText,
  hrBorder,
} from '../../styles/-variables';

export const UserContainer = styled.div`
  background-color: ${elementsBackgroundRed};
  border-radius: ${borderRadius};
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageContainer = styled.div`
  border: ${imageBorder};
  box-shadow: 2px 4px 12px #211111f5;
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
  position: relative;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);

  img {
    width: 150%;
    height: 150%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const NameContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3 {
    font-size: 1.5rem;
    color: ${blackText};
  }

  hr {
    border: ${hrBorder};
  }

  .percentage {
    font-size: 1.5rem;
    text-align: center;
  }
`;
