import { put, call, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* loginSaga() {
  yield put({type: actionTypes.SET_LOGIN})
}

export function* logOutSaga(actions: any) {
  yield put({type: actionTypes.SET_LOGOUT})
}

export function* initSaga() {
  yield takeLatest(actionTypes.PERFORM_LOGIN, loginSaga);
  yield takeLatest(actionTypes.PERFORM_LOGOUT, logOutSaga);
}
