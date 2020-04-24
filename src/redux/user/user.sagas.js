import { all, call } from 'redux-saga/effects';

// import UserActionTypes from './user.types';
// import { signInSuccess } from './user.actions';

export function* helloSaga() {
  yield console.log('Hello Sagas!');
}

export function* userSagas() {
  yield all([call(helloSaga)]);
}
