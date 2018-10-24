import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import * as api from 'lib/api'

const GET_COURSE_LIST_PENDING = 'post/GET_COURSE_LIST_PENDING'
const GET_COURSE_LIST_SUCCESS = 'post/GET_COURSE_LIST_SUCCESS'
const GET_COURSE_LIST_FAILURE = 'post/GET_COURSE_LIST_FAILURE'

const GET_COURSE_DETAIL_PENDING = 'post/GET_COURSE_DETAIL_PENDING'
const GET_COURSE_DETAIL_SUCCESS = 'post/GET_COURSE_DETAIL_SUCCESS'
const GET_COURSE_DETAIL_FAILURE = 'post/GET_COURSE_DETAIL_FAILURE'

export const getCourseList = () => dispatch => {
  dispatch({type: GET_COURSE_LIST_PENDING})
  return api.getCourseList()
  .then(
    res => {
      dispatch({
        type: GET_COURSE_LIST_SUCCESS,
        payload: res.data
      })
    })
    .catch(
      err => {
        dispatch({
          type: GET_COURSE_LIST_FAILURE,
          payload: err
        })
        throw(err)
      }
    )
}

export const getCourseDetail = (id) => dispatch => {
  dispatch({type:GET_COURSE_DETAIL_PENDING})
  return api.getCourseDetail(id)
  .then(
    res => {
      dispatch({
        type: GET_COURSE_DETAIL_SUCCESS,
        payload: res.data
      })
    })
    .catch(
      err => {
        dispatch({
          type: GET_COURSE_DETAIL_FAILURE,
          payload: err
        })
        throw(err)
      }
    )
}

const initialState = {
  postList: [],
  post : ''
}

export default handleActions({
  [GET_COURSE_LIST_PENDING] : (state, action) => {
    return {
      ...state,
      postList: action.payload
    }
  },
  [GET_COURSE_LIST_SUCCESS] : (state,action) => {
    return {
      ...state,
      postList: action.payload
    }
  },
  [GET_COURSE_DETAIL_PENDING] : (state, action) => {
    return {
      ...state,
      postList: action.payload
    }
  },
  [GET_COURSE_DETAIL_SUCCESS] : (state, action) => {
    return {
      ...state,
      postList: action.payload
    }
  }
}, initialState)