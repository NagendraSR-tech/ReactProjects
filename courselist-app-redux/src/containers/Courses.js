import React, { Component } from 'react'
import { connect } from 'react-redux'
import { courseList } from '../actions';
import { bindActionCreators } from 'redux';

import CourseView from '../components/CourseView';

class Courses extends Component {
  componentDidMount() {
    this.props.courseList();
  }

  render() {
    return (
      <CourseView coursesdatalist={this.props.finalcoursesState.courselist} />
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return ({
    finalcoursesState: state.courses
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ courseList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses)