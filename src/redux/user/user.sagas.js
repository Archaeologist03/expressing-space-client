import { takeLatest, put, call } from 'redux-saga/effects';

import { loginUserService } from '../../services/userService';
import UserTypes from './user.types';

export function* loginSaga(payload) {
  try {
    const { data } = yield call(loginUserService, payload);
    console.log(data);

    yield [put({ type: UserTypes.LOGIN_SUCCESS, data })];
  } catch (err) {
    yield put({ type: UserTypes.LOGIN_FAIL, err });
  }
}

export function* userSagas() {
  yield takeLatest(UserTypes.LOGIN_USER, loginSaga);
}
