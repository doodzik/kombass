import React from "react"
import { Link } from 'react-router'
require('./articleElement.styl')

var Cover =  React.createClass({
  getInitialState: function(){
    var image = new Image()
    image.src = `/assets${this.props.cover}`
    return (image.complete) ? { opacity: 1 } : { opacity: 0 }
  },

  componentDidMount: function(){
    var image = new Image()
    image.onload = () => this.setState({opacity: 1})
    image.src = `/assets${this.props.cover}`
  },

  render: function () {
    return (<div>
      <div className="thumb" style={{background: this.props.gardient, position: 'absolute'}} ></div>
      <div className="thumb" ref='img' style={{background: `url(/assets${this.props.cover}) center/cover`, opacity: this.state.opacity}} ></div>
    </div>)
  }
})

export default React.createClass({
  propTypes: {
    artist: React.PropTypes.string.isRequired
  },

  render: function () {
    var Content = this.props.content
    return (
      <div className="article">
        <Cover cover={this.props.cover} gardient={this.props.gardient} />
        <div className="article-city">
          <Link to="/">{`K ${this.props.cuarter}`}</Link>
        </div>
        <div className="article-genre">
          {this.props.genre}
        </div>
        <div className="article-artist">
          {this.props.artist}
          </div>
        <img className="article-pfeil" src="/assets/pfeil.svg" />
        <div className="article-content"><Content /></div>
      </div>
    )
  }
})
