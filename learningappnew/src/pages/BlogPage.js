import React from "react";
import { Link } from "react-router-dom";

const articledetails = [
  {
    title: "Blog title 1",
    id: 1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "07-02-2024"
  },
  {
    title: "Blog title 2",
    id: 2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "07-02-2024"
  },
  {
    title: "Blog title 3",
    id: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "07-02-2024"
  },
  {
    title: "Blog title 4",
    id: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "07-02-2024"
  },
  {
    title: "Blog title 5",
    id: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "07-02-2024"
  },
]

const BlogPage = () => {
  return (
    <>
      <div className="secondary-block">
        <h2>Learning Blog</h2>
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
      </div>

      <section className="blog-section">
        <article>
          {articledetails.map((note) => (
            <>
              <div className="article-title-date">
                <h3>{note.title}</h3>
                <p>Date: {note.date}</p>
              </div>
              <p>
                {note.desc}
              </p>
            </>
          ))}
        </article>
        <aside>
          <div className="add-more-container">
            <button>
              <Link to="/add-post"> + Add Post</Link>
            </button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default BlogPage;
