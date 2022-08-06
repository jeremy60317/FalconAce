import { call, put, select } from 'redux-saga/effects'
import cookie from '../utils/cookie'
import { setLoading, fetchListApiSuccess } from '../actions/AppActions'

const uri =
  'https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79'

//初始化fetch資料
export function* fetchInitialApiSaga(action) {
  const getCookie = cookie.getCookie('access_token')
  yield put(setLoading(true))
  yield call(fetchListApiSaga)
  yield put(setLoading(false))
}

//List資料
export function* fetchListApiSaga(action) {
  // const url = `${uri}/post/analysis?per_page=12&page=1`
  // const res = yield call(fetch, uri)
  // const json = yield res.json()
  const json = {
    status: 'ok',
    totalResults: 34,
    articles: [
      {
        source: { id: null, name: 'xxx' },
        author: '瘋先生',
        title:
          'iPhone 遺失找回捷徑腳本：透過Siri 尋找遺失家中iPhone 手機 - 瘋先生',
        description: '要是 iPhone 遺失弄丟在家裡某個角',
        url: 'https://mrmad.com.tw/shortcut-to-lost-iphone',
        urlToImage:
          'https://mrmad.com.tw/wp-content/uploads/2022/08/shortcut-to-lost-iphone.jpg',
        publishedAt: '2022-08-06T10:10:49Z',
        content:
          'iPhone iPhone iPhone Siri iPhone iPhone iPhone iPhone iPhone Siri Siri iPhone Siri iPhone Siri Siri Siri Siri SiriSiri iPhone Safari iOS App App Store App iPhone Siri iPhone i… [+127 chars]',
      },
      {
        source: { id: null, name: 'xxx' },
        author: '瘋先生',
        title:
          'iPhone 遺失找回捷徑腳本：透過Siri 尋找遺失家中iPhone 手機 - 瘋先生',
        description: '要是 iPhone 遺失弄丟在家裡某個角',
        url: 'https://mrmad.com.tw/shortcut-to-lost-iphone',
        urlToImage:
          'https://mrmad.com.tw/wp-content/uploads/2022/08/shortcut-to-lost-iphone.jpg',
        publishedAt: '2022-08-06T10:10:49Z',
        content:
          'iPhone iPhone iPhone Siri iPhone iPhone iPhone iPhone iPhone Siri Siri iPhone Siri iPhone Siri Siri Siri Siri SiriSiri iPhone Safari iOS App App Store App iPhone Siri iPhone i… [+127 chars]',
      },
      {
        source: { id: null, name: 'xxx' },
        author: '瘋先生',
        title:
          'iPhone 遺失找回捷徑腳本：透過Siri 尋找遺失家中iPhone 手機 - 瘋先生',
        description: '要是 iPhone 遺失弄丟在家裡某個角',
        url: 'https://mrmad.com.tw/shortcut-to-lost-iphone',
        urlToImage:
          'https://mrmad.com.tw/wp-content/uploads/2022/08/shortcut-to-lost-iphone.jpg',
        publishedAt: '2022-08-06T10:10:49Z',
        content:
          'iPhone iPhone iPhone Siri iPhone iPhone iPhone iPhone iPhone Siri Siri iPhone Siri iPhone Siri Siri Siri Siri SiriSiri iPhone Safari iOS App App Store App iPhone Siri iPhone i… [+127 chars]',
      },
      {
        source: { id: null, name: 'xxx' },
        author: '瘋先生',
        title:
          'iPhone 遺失找回捷徑腳本：透過Siri 尋找遺失家中iPhone 手機 - 瘋先生',
        description: '要是 iPhone 遺失弄丟在家裡某個角',
        url: 'https://mrmad.com.tw/shortcut-to-lost-iphone',
        urlToImage:
          'https://mrmad.com.tw/wp-content/uploads/2022/08/shortcut-to-lost-iphone.jpg',
        publishedAt: '2022-08-06T10:10:49Z',
        content:
          'iPhone iPhone iPhone Siri iPhone iPhone iPhone iPhone iPhone Siri Siri iPhone Siri iPhone Siri Siri Siri Siri SiriSiri iPhone Safari iOS App App Store App iPhone Siri iPhone i… [+127 chars]',
      },
      {
        source: { id: null, name: 'xxx' },
        author: '瘋先生',
        title:
          'iPhone 遺失找回捷徑腳本：透過Siri 尋找遺失家中iPhone 手機 - 瘋先生',
        description: '要是 iPhone 遺失弄丟在家裡某個角',
        url: 'https://mrmad.com.tw/shortcut-to-lost-iphone',
        urlToImage:
          'https://mrmad.com.tw/wp-content/uploads/2022/08/shortcut-to-lost-iphone.jpg',
        publishedAt: '2022-08-06T10:10:49Z',
        content:
          'iPhone iPhone iPhone Siri iPhone iPhone iPhone iPhone iPhone Siri Siri iPhone Siri iPhone Siri Siri Siri Siri SiriSiri iPhone Safari iOS App App Store App iPhone Siri iPhone i… [+127 chars]',
      },
    ],
  }

  // if (res && res.status === 200) {
  yield put(fetchListApiSuccess(json))
  // }
}
