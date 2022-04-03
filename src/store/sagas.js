import { put, call, takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import { getUserDetailsApi } from '../utils/apis';
import * as constants from '../utils/constants';

// on initial load, if token exist, then reload the user information from server.
export function* restoreUserSaga () {
  try{
    const token = localStorage.getItem(constants.authToken);
    if (token){
      yield put({type: actionTypes.SET_LOADING, loading: true});
      const res = yield call(getUserDetailsApi);
      
      if(res){
        yield put({type: actionTypes.SET_LOGIN});
        yield put({type: actionTypes.SET_USER, ...res.data});
      }
    }
  }catch(err){
    console.log('failed to restore user session.')
  }

  yield put({type: actionTypes.SET_LOADING, loading: false});
}

export function* loginSaga(data) {
  localStorage.setItem(constants.authToken, data.data.token)
  yield put({type: actionTypes.SET_LOGIN});
  yield put({type: actionTypes.SET_USER, ...data.data});
}

export function* logOutSaga() {
  localStorage.removeItem(constants.authToken)
  yield put({type: actionTypes.SET_LOGOUT})
}

export function* initSaga() {
  yield takeLatest(actionTypes.PERFORM_LOGIN, loginSaga);
  yield takeLatest(actionTypes.PERFORM_LOGOUT, logOutSaga);

  // Restore user session on load.
  yield restoreUserSaga();
}
