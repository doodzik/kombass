import React, { Component } from "react"
import { Link }             from "react-router"
require('./nav.styl')

var Cuarter = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  handleClick: function(event) {
    event.preventDefault()
    document.getElementsByTagName('nav')[0].style.opacity = 0;
    this.context.router.transitionTo('cuarter', {name: this.props.to});
  },

  render: function () {
    return (
      <li onClick={this.handleClick}>{this.props.to}</li>
    )
  }
})

export default class Nav extends Component {
  render () {
    return (
      <nav>
        <ul>
          <Cuarter to="Pberg" />
          <Cuarter to="Fhain" />
          <Cuarter to="Xberg" />
          <Cuarter to="Neukölln" />
          <Cuarter to="Thof" />
          <Cuarter to="Mitte" />
          <Cuarter to="Schöneberg" />
          <Cuarter to="Wedding" />
        </ul>
      </nav>
    )
  }
}
