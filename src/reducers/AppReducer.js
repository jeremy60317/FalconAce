import * as actionTypes from '../constants'

const INITIAL_STATE = {
  openModal: false,
  modalType: '',
  auth: {},
  loginStatus: false,
  list: { data: [], link: {}, meta: {} },
  favorList: { data: [], link: {}, meta: {} },
  selectedList: 0,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //
    case actionTypes.FETCH_LIST_API_SUCCESS:
      const data = { ...action.json }

      let hotPage
      const hotPageItem = 6
      if (data.articles.length / 6 >= 5) {
        hotPage = 3
      } else if (data.articles.length / 6 >= 4) {
        hotPage = 2
      } else {
        hotPage = 1
      }
      const otherNews = []
      let tempArr = []
      data.articles.forEach((itm, idx, arr) => {
        itm.index = idx
        if (idx + 1 > hotPage * hotPageItem) {
          otherNews.push(itm)
        } else {
          tempArr.push(itm)
        }
      })

      const hotPageNews = []
      for (let k = 0; k < hotPage; k++) {
        hotPageNews[k] = tempArr.splice(0, 6)
      }

      return {
        ...state,
        list: { ...action.json, otherNews, hotPageNews },
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.boolean,
      }
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        openModal: true,
        modalType: action.modalType,
      }
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        modalType: '',
      }
    default:
      return {
        ...state,
      }
  }
}
