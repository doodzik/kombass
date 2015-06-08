import React from "react"

export default React.createClass({
  propTypes: {
    author: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div>
        {this.props.author}
      </div>
    )
  }
})
