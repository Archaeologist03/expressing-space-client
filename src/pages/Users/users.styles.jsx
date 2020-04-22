import styled from 'styled-components';

import { borderRadius } from '../../styles/-variables';

export const UsersPageContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: flex-start;
`;

export const UsersContainer = styled.section`
  max-width: 90%;
  min-height: 50vh;
  background-color: rgba(13, 13, 33, 0.97);
  border-radius: ${borderRadius};
  position: absolute;
  top: 20%;
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
