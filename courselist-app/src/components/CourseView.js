import React from "react";
import { Link } from "react-router-dom";

const CourseView = (props) => {

  const renderCourses = ({ coursesdata }) => {
    if (coursesdata !== "") {
      return coursesdata.map((item) => {
        return (
          <div key={item.id}>
            <div className="card">
              <img src="https://via.placeholder.com/200x100" className="card-img-top image-fluid" alt="..." />
              <div className="card-body" >
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><strong>Price: <span>&#x20B9;</span></strong> {item.price}/-</p>
                <Link to="/form" className="btn btn-primary">Enquire</Link>
              </div>
            </div>
          </div>
        )
      }
      )
    }
  }

  return (
    <div>
      {renderCourses(props)}
    </div>
  )
}

export default CourseView
