import React, { Component } from 'react'
import CourseView from './CourseView'

const url = "http://localhost:4001/courses";

class Courses extends Component {
  constructor() {
    super()
    this.state = {
      courses: ''
    }
  }

  componentDidMount() {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          courses: data
        })
        // console.log(data)
      })
  }

  render() {
    return (
      <div className='container'>
        <h1>Courses</h1>
        <CourseView coursesdata={this.state.courses} />
      </div>
    )
  }
}

export default Courses