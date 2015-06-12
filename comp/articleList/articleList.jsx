import React from "react"
import Article from "../articleElement/articleElement.jsx"
require('./articlesList.styl')

export default React.createClass({
  propTypes: {
    articles: React.PropTypes.array.isRequired
  },

  render: function () {
    var articles = this.props.articles.map((article, index) => {
      return(<li key={index}><Article author={article.author} /></li>)
    })
    if(articles.length == 0) {
      articles = <li className="articles-empty">No articles</li>
    }
    return <ul>{articles}</ul>
  }
})
