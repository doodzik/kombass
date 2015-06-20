import React from "react"
import Hammer from "hammerjs"
import Article from "../articleElement/articleElement.jsx"
require('./articlesList.styl')
require('../articleElement/articleElement.styl')

var Slider = function(aC, cC, bC, aT, bT) {
  return React.createClass({
    componentDidMount(){
      var myElement = React.findDOMNode(this.refs.stackSlider),
          current   = React.findDOMNode(this.refs.current),
          before    = React.findDOMNode(this.refs.before),
          mc        = new Hammer(myElement)

      mc.on("pan", function(ev) {
        let x = ev.deltaX
        if(ev.isFinal) {
          var windowX      = ev.target.clientWidth,
              velocity     = ev.velocityX || 1,
              transitionTime = 400, //* velocity ^ -1
              trigger     = false
          if(x > 0) {
            // sliding current away
            current.style.transition = `${transitionTime}ms ease 0s`
            if(x > windowX / 2) {
              trigger = true
              current.style.transform = `translateX(${windowX}px)`
            } else {
              current.style.transform = `translateX(${0}px)`
            }
            setTimeout(() => {
              current.style.transition = ''
              trigger && aT()
            }, transitionTime)
          } else {
            // getting the before thing
            before.style.transition = `${transitionTime}ms ease 0s`
            before.style.boxShadow = '2px 10px 20px 10px #373737'
            if((x ^ -1) > windowX / 2) {
              trigger = true
              before.style.transform = `translateX(${-1 * windowX}px)`
            } else {
              before.style.transform = `translateX(${0}px)`
            }
            setTimeout(() => {
              before.style.transition = ''
              before.style.boxShadow = ''
              trigger && bT()
            }, transitionTime)
          }
        } else if(x > 0) {
          before.style.transform = `translateX(0px)`
          current.style.transform = `translateX(${x}px)`
        } else {
          current.style.transform = `translateX(0px)`
          before.style.transform = `translateX(${x}px)`
        }
      })
    },
    render: function(){
      return(
        <ul ref="stackSlider" className="stack-slider">
          <li ref="before"  className="before">{aC}</li>
          <li ref="current" className="current">{cC}</li>
          <li ref="after"   className="after">{bC}</li>
        </ul>
      )
    }
  })
}

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
                  cover={article.cover} />
            )
     })
    articles.unshift(<div className="article-empty">menu</div>)
    articles.push(<div className="article-empty">no more articles</div>)
    var Test = Slider(articles[this.state.index], articles[this.state.index + 1], articles[this.state.index + 2], this.afterTrigger, this.beforeTrigger)
    return <Test />
  }
})
