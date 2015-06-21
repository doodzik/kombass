import React from "react"
require('./articleElement.styl')

var Cover =  React.createClass({
  render: function () {
    var image = new Image();
    image.onload = () => {
      React.findDOMNode(this.refs.img).style.opacity = 1
    }
    image.src = this.props.cover

    var opacity = (image.complete) ? 1 : 0;
    return (<div>
      <div className="thumb" style={{background: this.props.gardient, position: 'absolute'}} ></div>
      <div className="thumb" ref='img' style={{background: `url(${this.props.cover}) center/cover`, opacity: opacity}} ></div>
    </div>)
  }
})

export default React.createClass({
  propTypes: {
    artist: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="article">
        <Cover cover={this.props.cover} gardient={this.props.gardient} />
        <div className="article-artist">
          {this.props.artist}
        </div>
        <div className="article-content">
          {this.props.content}
        </div>
      </div>
    )
  }
})
