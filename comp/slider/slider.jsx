import React, { Component }  from "react"
import Hammer from "hammerjs"

require('./slider.styl')

export default function(aC, cC, bC, aT, bT) {
  return React.createClass({
    componentDidMount(){
      var myElement = React.findDOMNode(this.refs.stackSlider),
          current   = React.findDOMNode(this.refs.current),
          before    = React.findDOMNode(this.refs.before),
          mc        = new Hammer(myElement, { domEvents: true })

      var inAngle = function(angle) {
        return angle > -45 && angle < 45 || angle > -180 && angle < -135 || angle > 135 && angle < 180
      }

      mc.get('pan').set({ threshold: 15 })

      mc.on("pan", function(ev) {
        var x       = ev.deltaX,
            windowX = ev.target.clientWidth,
            angle   = ev.angle

        if(ev.isFinal) {
          var transitionTime = 400,
              trigger        = false

          if(x > 0 && bC !== undefined ) {
            // sliding current away
            current.style.transition = `${transitionTime}ms ease 0s`
            if(x > windowX / 2) {
              trigger = true
              current.style.transform = `translateX(${windowX}px)`
            } else {
              current.style.transform = `translateX(${0}px)`
            }
            setTimeout(() => {
              current.style.transition = ''
              trigger && aT()
            }, transitionTime)
          } else if(aC !== undefined){
            // getting the before thing
            before.style.transition = `${transitionTime}ms ease 0s`
            before.style.boxShadow = '2px 10px 20px 10px #373737'
            if((x ^ -1) > windowX / 2) {
              trigger = true
              before.style.transform = `translateX(${-1 * windowX}px)`
            } else {
              before.style.transform = `translateX(${0}px)`
            }
            setTimeout(() => {
              before.style.transition = ''
              before.style.boxShadow = ''
              trigger && bT()
            }, transitionTime)
          }
        } else if(x > 0 && bC !== undefined && inAngle(angle)) {
          before.style.transform = `translateX(0px)`
          if(x > windowX)
            x = windowX
          current.style.transform = `translateX(${x}px)`
        } else if(aC !== undefined && inAngle(angle)){
          current.style.transform = `translateX(0px)`
          if(x < (windowX * -1))
            x = windowX * -1
          before.style.transform = `translateX(${x}px)`
        }
      })
    },
    render: function(){
      return(
        <ul ref="stackSlider" className="stack-slider">
          <li ref="before"  className="stack-slider-before stack-slider-element">{aC}</li>
          <li ref="current" className="stack-slider-current stack-slider-element">{cC}</li>
          <li ref="after"   className="stack-slider-after stack-slider-element">{bC}</li>
        </ul>
      )
    }
  })
}

