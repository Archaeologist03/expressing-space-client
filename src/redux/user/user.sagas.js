import { all, put, call } from 'redux-saga/effects';

import { loginUserService } from '../../services/userService';
import UserActionTypes from './user.types';
// import { signInSuccess } from './user.actions';

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);

    yield [put({ type: UserActionTypes.LOGIN_SUCCESS, response })];
  } catch (err) {
    yield put({ type: UserActionTypes.LOGIN_FAIL, err });
  }
}

export function* userSagas() {
  yield all([call(helloSaga)]);
  yield all([call(loginSaga)]);
}
