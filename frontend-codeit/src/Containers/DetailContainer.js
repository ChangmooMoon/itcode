import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as post from 'store/modules/post'
import CourseDetail from 'components/CourseDetail'

class DetailContainer extends Component {

  getCourseDetail = () => {
  }

  componentDidMount(){
  }

  render() {
    return (
      <CourseDetail />
    );
  }
}

let mapStateToProps = state => {
  return {
    getCourseDetail: state.post.post
  }
}

let mapDispatchToProps = dispatch => {
  return {
    post : bindActionCreators(post, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)