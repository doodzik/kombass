import React, { Component }  from "react"
import Slider from "../slider/slider.jsx"
import Article from "../articleElement/articleElement.jsx"
import Nav, { NavEnd } from "../../router/nav/nav.jsx"

require('./articlesList.styl')

export default React.createClass({
  getInitialState: function() {
    return { index: 0 }
  },

  propTypes: {
    articles: React.PropTypes.array.isRequired
  },

  afterTrigger: function(){
    this.setState({ index: this.state.index + 1 })
  },

  beforeTrigger: function(){
    this.setState({ index: this.state.index - 1 })
  },

  render: function(){
    var articles = this.props.articles.map((article, index) => {
      return(
                <Article
                  artist={article.artist}
                  content={article.content}
                  cover={article.cover}
                  gardient={article.gardient} />
            )
     })
    articles.unshift(<div className="article-empty"><Nav /></div>)
    articles.push(<div className="article-empty"><NavEnd /></div>)
    var Test = Slider(articles[this.state.index], articles[this.state.index + 1], articles[this.state.index + 2], this.afterTrigger, this.beforeTrigger)
    return <Test />
  }
})
