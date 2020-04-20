import styled from 'styled-components';

import { smallTextFont, borderRadius } from '../../../styles/-variables';

export const FieldContainer = styled.div`
  display: inline-block;
  border: 1px solid #21111130;
  box-shadow: 2px 4px 12px #21111140;
  border-radius: ${borderRadius};
  overflow: hidden;
  position: relative;
  left: 5%;
  margin: 2rem 0;
  padding: 10px;
  min-width: 40%;
  max-width: 90%;

  h5 {
    font-size: 1.8rem;
    font-weight: 400;
    display: inline-block;
    padding-left: 5px;
  }

  hr {
    border: 0;
    border-top: 1px solid #ffffff20;
  }

  p {
    max-width: 100%;
    max-height: 100%;
    font-size: ${smallTextFont};
    padding: 5px;
  }
`;
