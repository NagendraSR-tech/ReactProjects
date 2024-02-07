import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

const AddVideo = () => {
    const [videoSrc, setVideoSrc] = useState([])
  const onChangeHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setVideoSrc(URL.createObjectURL(file));
  };

  const fileInputRef = useRef();
  //   useEffect(() => {
  //     fileInputRef.current?.load();
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Link to="/video">back</Link>
      <div className="secondary-block">
        <h2>Add New Audio Video</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Upload a file:
          <input
            type="file"
            name="file"
            onChange={onChangeHandler}
            accept="video/*,audio/*"
            ref={fileInputRef}
          />
        </label>
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default AddVideo;
