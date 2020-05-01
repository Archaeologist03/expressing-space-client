import UserTypes from './user.types';

export const loginUser = (user) => ({
  type: UserTypes.LOGIN_USER,
  payload: user,
});
