import * as actionTypes from '../constants'

export const fetchInitialApiSaga = () => ({
  type: actionTypes.FETCH_INITIAL_API_SAGA,
})

export const fetchListApiSaga = (page) => ({
  type: actionTypes.FETCH_LIST_API_SAGA,
  page,
})

export const fetchListApiSuccess = (json) => ({
  type: actionTypes.FETCH_LIST_API_SUCCESS,
  json,
})

export const setLoading = (boolean) => ({
  type: actionTypes.SET_LOADING,
  boolean,
})

export const openModal = (modalType) => ({
  type: actionTypes.OPEN_MODAL,
  modalType,
})

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL,
})
