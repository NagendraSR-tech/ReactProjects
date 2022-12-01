import React from 'react'
import { Link } from "react-router-dom";

const ArticleNews = (props) => {

  const renderArticle = ({ articledata }) => {
    if (articledata) {
      return articledata.map((item) => {
        return (
          <Link to="" className="item">
            <div className='left'>
              {/* {item.img} */}
            </div>
            <div className='right'>
              {/* {item.title} */}
            </div>
          </Link>
        )
      })
    }
  }

  return (
    <div className='other-news'>
      <h1>ArticleNews</h1>
      <div className='other-news-items'>
        {renderArticle(props)}
      </div>
    </div>
  )
}

export default ArticleNews