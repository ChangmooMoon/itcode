import axios from 'axios'
import queryString from 'query-string'

export const getCourseList = () => {
  return axios.get('/courses')
}

export const getCourseDetail = (id) => {
  axios.get(`/courses/${id}`)
}

export const createSubject = () => {

}

export const editSubject = () => {

}