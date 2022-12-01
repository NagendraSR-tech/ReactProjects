import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Courses from '../containers/Courses'
import UserEnquiry from '../containers/UserEnquiry'
import ErrorPage from './ErrorPage';
import Form from '../components/Form'
export class Routing extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" >Online courses</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/courses" className="nav-link" >Courses</Link>
                </li>
                <li className="nav-item">
                  <Link to="/userenquiry" className="nav-link" >User Enquiry</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Courses />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/form/:name" element={<Form />}></Route>
          <Route path="/userenquiry" element={<UserEnquiry />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default Routing