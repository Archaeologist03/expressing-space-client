import React from 'react';

import User from '../../components/User/User';

import {
  UsersPageContainer,
  UsersContainer,
  UserContainer,
} from './users.styles';

const Users = () => {
  return (
    <UsersPageContainer>
      <UsersContainer>
        <UserContainer>
          <User />
        </UserContainer>
        <UserContainer>
          <User />
        </UserContainer>
        <UserContainer>
          <User />
        </UserContainer>
        <UserContainer>
          <User />
        </UserContainer>
      </UsersContainer>
    </UsersPageContainer>
  );
};

export default Users;
