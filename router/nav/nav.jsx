import React, { Component } from "react"
import { Link }             from "react-router"
import Hammer               from "hammerjs"
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
      <div>
        <div className="city-name" onClick={this.handleClick}>{this.props.to}</div>
        <div className="city-name" >{this.props.direction}</div>
      </div>
    )
  }
})

export default class Nav extends Component {
    componentDidMount() {
      var myElement = React.findDOMNode(this.refs.kompass),
          cities    = React.findDOMNode(this.refs.cities),
          mc        = new Hammer(myElement),
          inital    = this.props.inital || false,
          transitionTime = 400

      if(inital){
        myElement.style.transition = `${transitionTime}ms ease 0s`
        myElement.style.transform  = `rotate(360deg)`
        setTimeout(() => {
          myElement.style.transition = ''
        }, transitionTime)
      }

      mc.get('pan').set({ threshold: 0 })

      mc.on("pan", function(ev) {
            var x       = ev.deltaX % 360,
            windowX = ev.target.clientWidth

        if(ev.isFinal) {
            myElement.style.transition = `${transitionTime}ms ease 0s`
            cities.style.transition = `${transitionTime}ms ease 0s`
            var step =  Math.abs(x) % 45
            if(x > 0) {
              myElement.style.transform = `rotate(${x - step}deg)`
              cities.style.transform    = `rotate(${x - step}deg)`
            } else {
              myElement.style.transform = `rotate(${x + step}deg)`
              cities.style.transform    = `rotate(${x + step}deg)`
            }
            setTimeout(() => {
              myElement.style.transition = ''
              cities.style.transition = ''
            }, transitionTime)
        } else if(x > 0) {
          myElement.style.transform = `rotate(${x}deg)`
          cities.style.transform = `rotate(${x}deg)`
        } else {
          myElement.style.transform = `rotate(${x}deg)`
          cities.style.transform = `rotate(${x}deg)`
        }
      })
    }

  render () {
    return (
      <nav>
        <div ref="cities" className="cities">
          <div id="nord" className="city"><Cuarter direction="N" to="HAMBURG" /></div>
          <div id="nord-ost" className="city"><Cuarter direction="NO" to="ROSTOCK" /></div>
          <div id="ost" className="city"><Cuarter direction="O" to="BERLIN" /></div>
          <div id="sud-ost" className="city"><Cuarter direction="SO" to="LEIPZIG" /></div>
          <div id="sud" className="city"><Cuarter direction="S" to="MÜNCHEN" /></div>
          <div id="sud-west" className="city"><Cuarter direction="SW" to="STUTTGART" /></div>
          <div id="west" className="city"><Cuarter direction="W" to="KÖLN" /></div>
          <div id="nord-west" className="city"><Cuarter direction="NW" to="BREMEN" /></div>
        </div>
        <img id="kompass" ref="kompass" src="/assets/kompass.svg" alt=""/>
      </nav>
    )
  }
}

export class NavStub extends Component {
  render () {
    return (
      <nav>
        <img id="kompass" src="/assets/kompass.svg" alt=""/>
      </nav>
    )
  }
}
// export default class Nav extends Component {
//   render () {
//     return (
//       <nav>
//         <h1>KOMBASS</h1>
//         <ul>
//           <li><Cuarter to="Berlin" /></li>
//           <li><Cuarter to="Hamburg" /></li>
//         </ul>
//       </nav>
//     )
//   }
// }

export class NavEnd extends Component {
  render () {
    return (
      <nav>
        <Link to="/">
          <img id="kompass-end" src="/assets/kompass.svg" alt=""/>
        </Link>
      </nav>
    )
  }
}
