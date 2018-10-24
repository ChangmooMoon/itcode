import React, { Fragment } from 'react';

import './CoursesList.scss'
import CourseCell from 'components/CourseCell'

const CoursesList = ({post, getCourseList}) => {
  if(!post) return null
  else {
    return (
      <Fragment>
        <div>강의 리스트</div>
        <button onClick={getCourseList}>새로고침</button>
        {
          post.map(element => (
            <CourseCell
              key={element.id}
              id={element.id}
              title={element.title}
              language={element.language}
              price={element.price}
            />
          ))
        }
      </Fragment>
    )
  }
}

export default CoursesList;