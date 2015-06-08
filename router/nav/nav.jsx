import React from "react"
import { Link } from "react-router"

var Nav = React.createClass({
  render: function () {
    // <li><Link to="artist" params={{name: "123"}}>Artist</Link></li>
    // <li><Link to="artists">Artists</Link></li>
    // <li><Link to="author" params={{name: "123"}}>Artist</Link></li>
    return (
        <ul>
          <li><Link to="cuarter" params={{name: "123"}}>Cuarter</Link></li>
        </ul>
    )
  }
})

export default Nav
