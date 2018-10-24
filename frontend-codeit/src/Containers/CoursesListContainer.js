import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as post from 'store/modules/post'
import CoursesList from 'components/CoursesList'

class CoursesListContainer extends Component {

  getCourseList = () => {
    const { post } = this.props
    post.getCourseList()
  }

  componentDidMount(){
    this.getCourseList()
  }
  render() {
    return (
      <CoursesList
        post={this.props.getCourseList}
        getCourseList={this.props.post.getCourseList}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    getCourseList: state.post.postList
  }
}

let mapDispatchToProps = dispatch => {
  return {
    post : bindActionCreators(post, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListContainer)