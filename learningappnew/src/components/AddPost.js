import { Link } from "react-router-dom";
import React, { useState } from "react";

const AddPost = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [details, setDetails] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log()
    };
    return (
        <>
            <Link to="/blog">back</Link>
            <div className="secondary-block">
                <h2>Add New Audio Video</h2>
            </div>
            <form onSubmit={handleSubmit} className="blog-form">
                <input type="text" placeholder="Blog title" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
                <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} /><br /><br />
                <textarea type="text" placeholder="Description" value={details} onChange={(e) => setDetails(e.target.value)} /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default AddPost;
