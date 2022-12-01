import React from 'react';
import { Link } from "react-router-dom";

const CourseView = (courseList) => {

  const renderCoursesList = ({ coursesdatalist }) => {
    if (coursesdatalist) {
      return coursesdatalist.map((data) => {
        return (
          <div key={data.id} >
            <div className='card'>
              <img src="https://via.placeholder.com/200x100" className="card-img-top image-fluid" alt="..." />
              <div className="card-body" >
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text"><strong>Price: <span>&#x20B9;</span></strong> {data.price}/-</p>
                <Link to="/form" className="btn btn-primary">Enquire</Link>
              </div>
            </div>
          </div>
        )
      })
    }
  }

  return (
    <div>
      {renderCoursesList(courseList)}
    </div>
  )
}


export default CourseView;