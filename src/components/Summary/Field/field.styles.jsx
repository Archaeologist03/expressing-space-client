import styled from 'styled-components';

import { smallTextFont, hrBorder } from '../../../styles/-variables';

export const FieldContainer = styled.div`
  display: inline-block;
  padding: 15px;

  h5 {
    font-size: 1.8rem;
    font-weight: 400;
    display: inline-block;
    padding-left: 5px;
  }

  hr {
    border: 0;
    border-top: ${hrBorder};
  }

  p {
    max-width: 100%;
    max-height: 100%;
    font-size: ${smallTextFont};
    padding: 5px;
  }
`;
