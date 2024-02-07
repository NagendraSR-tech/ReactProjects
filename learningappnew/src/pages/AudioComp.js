import React from "react";
import { Link } from "react-router-dom";

const audiopodcast = [
    {
        id: 4,
        name: "audio1",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    },
    {
        id: 5,
        name: "audio2",
        url: "https://www.youtube.com/watch?v=J9kqQpZUWt8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    },
    {
        id: 6,
        name: "audio3",
        url: "https://www.youtube.com/watch?v=J9kqQpZUWt8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    },
    {
        id: 7,
        name: "audio4",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    },
    {
        id: 8,
        name: "audio5",
        url: "https://www.youtube.com/watch?v=J9kqQpZUWt8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    },
    {
        id: 9,
        name: "audio6",
        url: "https://www.youtube.com/watch?v=J9kqQpZUWt8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing na aliqua.",
    }
];

const AudioComp = () => {
    return (
        <>
            <div className="secondary-block">
                <h2>Podcost</h2>
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
                        <Link to="/add-video"> + Add New audio</Link>
                    </button>
                </div>

                <div className="media-block">
                    {audiopodcast.map((audio) => (
                        <>
                            <ul>
                                <li key={audio.id}>
                                    <h3>{audio.name}</h3>
                                    <audio
                                        src={audio.url}
                                        contrlis
                                        autoPlay
                                        muted
                                        loop
                                        width="320px"
                                        height="auto"
                                    ></audio>
                                    <p>
                                        <strong>Description:</strong>
                                        {audio.desc}
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

export default AudioComp;
