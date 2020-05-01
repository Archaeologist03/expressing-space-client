import UserTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOGIN_SUCCESS:
      console.log(action.payload, 121);

      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserTypes.LOGIN_FAIL:
      console.log(action.payload, 33);
      return state;
    default:
      return state;
  }
};

export default userReducer;
