import React from "react";
import { Link } from "react-router-dom";
// import AudioComp from "../pages/AudioComp";
// import BlogPage from "../pages/BlogPage";
// import VideoComp from "../pages/VideoComp";

const NavigationComp = () => {
  return (
    <>
      {/* <Link to="/">Home</Link> */}
      <div className="primary-links">
        <Link to="/video">Video Tutorials</Link>
        <Link to="/audio">Podcost</Link>
        <Link to="/blog">Learning Blog</Link>
      </div>
    </>
  );
};

export default NavigationComp;
