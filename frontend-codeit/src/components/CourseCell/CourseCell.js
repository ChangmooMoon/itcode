import React from 'react';
import { withRouter } from 'react-router-dom'
import './CourseCell.scss'

// const CourseCell = ({title,language,price}) => {
//     return (
//       <div className='courseCell'>
//         <div> 제목 : {title}</div>
//         <div> 언어: {language}</div>
//         <div> 가격 : {price}</div>
//       </div>
//     )
// }

const CourseCell = withRouter(
  ({ history, title, language, price, id }) => (
      <div className='courseCell' onClick={() => {history.push(`/courses/${id}`)}} type='button'>
        <div> 제목 : {title}</div>
        <div> 언어: {language}</div>
        <div> 가격 : {price}</div>
      </div>
))

export default CourseCell;