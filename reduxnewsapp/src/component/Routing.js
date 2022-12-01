import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "../container/Home";
import NewsDetails from "../container/NewsDetails";
import Footer from "./Footer";
import Header from "./Header";

class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <Link to="/"></Link>
          </nav>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:id" element={<NewsDetails />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default Routing