import React from "react"
require('./articleElement.styl')

export default React.createClass({
  propTypes: {
    artist: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="article">
        <div className="thumb">
          <img src={this.props.cover} />
        </div>
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
