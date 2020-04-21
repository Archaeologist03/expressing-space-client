import styled from 'styled-components';

import { borderRadius } from '../../styles/-variables';

export const UsersPageContainer = styled.div`
  min-width: 100vw;
  position: absolute;
  top: 20%;
  display: flex;
  justify-content: center;
  align-content: flex-start;

  /* border: 1px solid yellow; */
`;

export const UsersContainer = styled.section`
  background-color: rgba(13, 13, 33, 0.95);
  width: 90%;
  min-height: 50vh;
  border-radius: ${borderRadius};
  display: flex;
  flex-wrap: wrap;
`;

export const UserContainer = styled.div`
  border: 1px solid yellow;
  border-radius: ${borderRadius};
  width: 160px;
  height: 140px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 4rem;
`;
