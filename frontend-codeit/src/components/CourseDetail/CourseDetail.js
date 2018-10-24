import React, { Fragment } from 'react';
import './CourseDetail.scss'

const CourseDetail = () => {
    return (
      <Fragment>
        <div className='courseDetail'>
          <div> 제목 : </div>
          <div> 언어 : </div>
          <div> 가격 :</div>
        </div>
        <button>삭제</button>
        <button>수정</button>
      </Fragment>
    )
}

export default CourseDetail;