import React, { Component } from "react"
import { Link }             from "react-router"
require('./nav.styl')

var Cuarter = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  handleClick: function(event) {
    event.preventDefault()
    // document.getElementsByTagName('nav')[0].style.opacity = 0;
    document.getElementsByTagName('nav')[0].style.display = 'none';
    this.context.router.transitionTo('cuarter', {name: this.props.to});
  },

  render: function () {
    return (
      <div onClick={this.handleClick}>{this.props.to}</div>
    )
  }
})

export default class Nav extends Component {
  render () {
    return (
      <nav>
        <h1>KOMBASS</h1>
        <ul>
          <li><Cuarter to="Berlin" /></li>
          <li><Cuarter to="Hamburg" /></li>
        </ul>
      </nav>
    )
  }
}

export class NavEnd extends Component {
  render () {
    return (
      <nav>
        <h1>No more articles</h1>
        <ul>
          <li><Cuarter to="Berlin" /></li>
          <li><Cuarter to="Hamburg" /></li>
        </ul>
      </nav>
    )
  }
}
