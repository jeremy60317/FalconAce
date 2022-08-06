/**
 * 因redux是一個global state 所以每個action命名都應是唯一的
 * 全部acton 集中在這裡，避免檔案分散造成命名衝突
 */

export const FETCH_INITIAL_API_SAGA = 'FETCH_INITIAL_API_SAGA'
export const FETCH_LIST_API_SAGA = 'FETCH_LIST_API_SAGA'
export const FETCH_LIST_API_SUCCESS = 'FETCH_LIST_API_SUCCESS'
export const SET_LOADING = 'SET_LOADING'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
