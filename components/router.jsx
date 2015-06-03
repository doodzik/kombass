import React from "react"
import { Route, RouteHandler } from "react-router"

var App = React.createClass({
  render: function () {
    return (
      <div>
        hello world

        <RouteHandler {...this.props} />
      </div>
    )
  }
})

export var routes = (
  <Route name="app" path="/" handler={App}>
  </Route>
)
