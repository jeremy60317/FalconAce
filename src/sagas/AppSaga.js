import { call, put, delay } from 'redux-saga/effects'
import { setLoading, fetchListApiSuccess } from '../actions/AppActions'
import fakeData from '../utils/fakeData2.json'

// const uri =
//   'https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79'

//初始化fetch資料
export function* fetchInitialApiSaga(action) {
  yield put(setLoading(true))
  yield call(fetchListApiSaga, { pathName: action.pathName })
  yield put(setLoading(false))
}

//List資料
export function* fetchListApiSaga(action) {
  // const res = yield call(fetch, uri)
  // const json = yield res.json()

  yield delay(1000)
  // const res = fakeData

  // if (res && res.status === 'ok') {
  //   yield put(fetchListApiSuccess(res))
  // }
  const testRes = fakeDataProcess(action.pathName)
  if (testRes && testRes.status === 'ok') {
    yield put(fetchListApiSuccess(testRes))
  }
}

function fakeDataProcess(pathName) {
  const data = fakeData
  switch (pathName) {
    case 'global':
      return { ...fakeData, articles: data.articles.slice(5) }
    case 'business':
      return { ...fakeData, articles: data.articles.slice(10) }
    case 'entertainment':
      return { ...fakeData, articles: data.articles.slice(15) }
    case 'sport':
      return { ...fakeData, articles: data.articles.slice(20) }
    case 'technology':
      return { ...fakeData, articles: data.articles.slice(25) }
    default:
      return fakeData
  }
}
