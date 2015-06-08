import React                           from "react"
import { Route, Router, RouteHandler } from "react-router"

import Nav     from "./nav/nav.jsx"
import Cuarter from "./cuarter.jsx"
import Artist  from "./artist.jsx"
import Artists from "./artists.jsx"
import Author  from "./author.jsx"

class App extends Component {
  render(){
    return (
      <div>
        <Nav />
        <RouteHandler {...this.props} />
      </div>
    )
  }
})

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="artists" path="/artists"       handler={Artists} />
    <Route name="artist"  path="/artist/:name"  handler={Artist} />
    <Route name="cuarter" path="/cuarter/:name" handler={Cuarter} />
    <Route name="author" path="/author/:name"   handler={Author} />
  </Route>
)

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  var params = state.params
  React.render(<Handler {...this.props}/>, document.getElementById('content'))
})
