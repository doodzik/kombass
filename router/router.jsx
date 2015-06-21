import React,  { Component }           from "react"
import Router, { Route, RouteHandler } from "react-router"

//TODO automate adding routes

import Nav     from "./nav/nav.jsx"
import Cuarter from "./cuarter.jsx"
import Artist  from "./artist.jsx"
import Author  from "./author.jsx"

class App extends Component {
  render(){
    return (
      <div>
        { (!this.props.name) ? <Nav /> : <div></div> }
        <RouteHandler {...this.props} />
      </div>
    )
  }
}

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="artist"  path="/artist/:name"  handler={Artist} />
    <Route name="cuarter" path="/cuarter/:name" handler={Cuarter} />
    <Route name="author"  path="/author/:name"  handler={Author} />
  </Route>
)

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler {...this.props} {...state.params}/>, document.getElementById('content'))
})
