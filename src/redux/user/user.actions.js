import UserActionTypes from './user.types';

export const loginUser = (user) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user,
});
