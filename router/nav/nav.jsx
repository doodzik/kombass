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
      <div onClick={this.handleClick}>{this.props.to}</div>
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
          <div id="nord" className="city"><Cuarter to="Berlin" /></div>
          <div id="nord-ost" className="city">NordOst</div>
          <div id="ost" className="city">Ost</div>
          <div id="sud-ost" className="city">SudOst</div>
          <div id="sud" className="city">Sud</div>
          <div id="sud-west" className="city">SudWest</div>
          <div id="west" className="city">West</div>
          <div id="nord-west" className="city">NordWest</div>
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
        <div className="city-stub">
          Kombass
        </div>
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
        <h1>No more articles</h1>
        <ul>
          <li><Cuarter to="Berlin" /></li>
          <li><Cuarter to="Hamburg" /></li>
        </ul>
      </nav>
    )
  }
}
