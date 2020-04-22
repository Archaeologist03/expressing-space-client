import styled from 'styled-components';

import {
  elementsBackgroundRed,
  borderRadius,
  imageBorder,
} from '../../styles/-variables';

export const UserContainer = styled.div`
  background-color: ${elementsBackgroundRed};
  border-radius: ${borderRadius};
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  border: ${imageBorder};
`;
