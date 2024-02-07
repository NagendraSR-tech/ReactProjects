import React from "react";
import { Link } from "react-router-dom";

const videostutorials = [
    {
        id: 1,
        name: "video1",
        url: "https://www.youtube.com/watch?v=J9kqQpZUWt8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    },
    {
        id: 2,
        name: "video2",
        url: "https://www.youtube.com/watch?v=J9kqQpZUWt8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    },
    {
        id: 3,
        name: "video3",
        url: "https://www.youtube.com/watch?v=J9kqQpZUWt8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    },
    {
        id: 3,
        name: "video3",
        url: "https://www.youtube.com/watch?v=J9kqQpZUWt8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    }
];

const VideoComp = () => {
    return (
        <>
            <div className="secondary-block">
                <h2>Video Tutorials</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.
                    sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>

                <div className="add-more-container">
                    <button>
                        <Link to="/add-video"> + Add New Video</Link>
                    </button>
                </div>

                <div className="media-block">
                    {videostutorials.map((media) => (
                        <>
                            {/* <MediaComp/> */}
                            <ul >
                                <li key={media.id}>
                                    <h3>{media.name}</h3>
                                    <video
                                        src={media.url}
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        width="320px"
                                        height="auto"
                                    ></video>
                                    <p>
                                        <strong>Description:</strong>
                                        {media.desc}
                                    </p>
                                </li>
                            </ul>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoComp;
