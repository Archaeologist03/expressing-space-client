import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  border-radius: 4px;
  min-height: 10vh;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  z-index: 5;
`;

export const AuthProfileNavContainer = styled.div`
  display: inline-block;
  position: relative;
  left: 8%;
`;

export const RegularNavContainer = styled.div`
  display: inline-block;
  position: absolute;
  right: 5%;
`;

export const StyledNav = styled.nav`
  min-height: 8vh;
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
