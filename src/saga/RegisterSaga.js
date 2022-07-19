import {
  GET_REGISTER_REQUESTED,
  GET_REGISTER_SUCCESS,
  FAILURE,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_REQUESTED,
  GET_DATA_REQUESTED,
  GET_DATA_SUCCESS,
} from "../constants";
import { call, put, takeEvery } from "redux-saga/effects";

function* fetchRegister(action) {
  try {
    // const response = yield call(action.payload);

    yield put({ type: GET_REGISTER_SUCCESS, user: action.payload });
  } catch (error) {
    yield put({ type: FAILURE, payload: error });
  }
}

function* fetchLogin(action) {
  // console.log(777,action.payload)
  try {
    yield put({ type: GET_LOGIN_SUCCESS, user: action.payload });
  } catch (error) {
    yield put({ type: FAILURE, payload: error });
  }
}
function* fetchNotShowData(action) {
  console.log(action.payload);
    try{
    yield put({type:GET_DATA_SUCCESS, user:action.payload });
    }
    catch(error)
    {
   yield put ({ type:FAILURE,payload:error});
    }
}

function* mySaga() {
  yield takeEvery(GET_REGISTER_REQUESTED, fetchRegister);
  yield takeEvery(GET_LOGIN_REQUESTED, fetchLogin);
  yield takeEvery(GET_DATA_REQUESTED, fetchNotShowData);
}

export default mySaga;
