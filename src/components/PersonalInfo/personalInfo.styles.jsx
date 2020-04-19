import styled from 'styled-components';

import {
  whiteText,
  elementsBackgroundRed,
  smallTextFont,
  borderRadius,
} from '../../styles/-variables';

export const PersonalInfoContainer = styled.section`
  min-height: 30vh;
  width: 15vw;
`;

export const PersonalInfoTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: 400;
  color: ${whiteText};
  text-align: center;
  margin-bottom: ${smallTextFont};
`;

export const PersonalInfoBox = styled.div`
  min-height: 45vh;
  border-radius: ${borderRadius};
  background-color: ${elementsBackgroundRed};
  overflow: hidden;
  padding-top: 30px;
`;

export const FieldContainer = styled.div`
  margin: 20px 10px 10px 30px;
`;

export const FieldLabel = styled.label`
  font-size: 1.8rem;
  margin-right: 2px;
`;

export const Field = styled.input`
  font-size: ${smallTextFont};
  width: 50%;
  background-color: transparent;
  border: none;
`;
