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
      return {
        ...state,
        list: { ...action.json },
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
