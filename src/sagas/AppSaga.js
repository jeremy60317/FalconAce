import { call, put, delay } from 'redux-saga/effects'
import { setLoading, fetchListApiSuccess } from '../actions/AppActions'
import fakeData from '../utils/fakeData2.json'

const uri =
  'https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79'

//初始化fetch資料
export function* fetchInitialApiSaga(action) {
  yield put(setLoading(true))
  yield call(fetchListApiSaga)
  yield put(setLoading(false))
}

//List資料
export function* fetchListApiSaga(action) {
  // const res = yield call(fetch, uri)
  // const json = yield res.json()

  yield delay(3000)
  const res = fakeData

  if (res && res.status === 'ok') {
    yield put(fetchListApiSuccess(res))
  }
}
