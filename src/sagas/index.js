import { all, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../constants'
import * as AppSaga from './AppSaga.js'

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_INITIAL_API_SAGA, AppSaga.fetchInitialApiSaga),
    takeLatest(actionTypes.FETCH_LIST_API_SAGA, AppSaga.fetchListApiSaga),
  ])
}

export default rootSaga
