import styled from 'styled-components';

import { blackText } from '../../../styles/-variables';

export const LikeContainer = styled.div`
  border: 2px solid green;
  color: ${blackText};
  display: inline-block;
`;

export const LikeTitle = styled.h5`
  font-size: 1.8rem;
  font-weight: 400;
  display: inline-block;
  margin-right: 6px;
`;

export const LikeList = styled.ul`
  display: inline;
  margin: 0;
`;

export const LikeItem = styled.li`
  font-size: 1.5rem;
  display: inline-block;
  margin-right: 2px;
`;
