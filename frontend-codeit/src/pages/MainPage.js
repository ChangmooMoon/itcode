import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
      다양한 강의들을 지금 들어보세요
      <Link to={'/courses'}>click</Link>
    </div>
  )
}

export default MainPage