import React  from "react"
import teaser from './imgs/teaser.jpg'
import style  from './style.styl'
import Hammer from 'hammerjs'

import carusel1 from './imgs/HH_Bilder01.jpg'
import carusel2 from './imgs/HH_Bilder02.jpg'
import carusel3 from './imgs/HH_Bilder03.jpg'


var Quote = React.createClass({
  render: function() {
    var Str = this.props.children.split(' ').map((elm, i) => {
      return (<div className="article-quote" key={i}>
                { elm.toUpperCase() + String.fromCharCode(160) }
             </div>)
    })
    return <div style={{paddingLeft: '20px'}}><div className="article-quote">»</div>{Str}<div className="article-quote">«</div></div>
  }
})

var SimpleSlider = React.createClass({
  componentDidMount: function() {
    $(React.findDOMNode(this.refs.slider)).slick()
    var hammertime = new Hammer(React.findDOMNode(this.refs.sliderOuter), { domEvents: true });
    hammertime.on('pan', function(ev) {
      ev.srcEvent.stopPropagation()
        console.log(ev);
    });
  },

  render: function () {
    return (
      <div ref="sliderOuter" className="img-slider">
        <div ref="slider" data-slick='{"dots": true}'>
          <div className="teaser segment" style={{background: `url(/assets${carusel1}) 50% 50% / cover`}}></div>
          <div className="teaser segment" style={{background: `url(/assets${carusel2}) 50% 50% / cover`}}></div>
          <div className="teaser segment" style={{background: `url(/assets${carusel3}) 50% 50% / cover`}}></div>
        </div>
      </div>
    );
  }
});

export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="teaser segment" style={{background: `url(/assets${teaser}) 50% 50% / cover`}}>
          <div className="teaser-header">K HELENA HAUFF</div>
          <div className="teaser-content">
            EINE DER
            AUFREGENDS-
            TEN ERSCHEI-
            NUNGEN
            DIE DIE STADT
            HAMBURG SO
            HERVORGE-
            BRACHT HAT.
          </div>
        </div>
        <div className="segment" style={{height: '100vh'}}>
          <div className="text">
            Nachdem sie ihr großes Talent für energetischen,
            kompromisslosen Techno unter
            Beweis gestellt hat, legt Helena Hauff in
            diesen Tagen mit Discreet Desires ihr erstes
            Künstleralbum vor. Ein Werk, auf dem
            sie mehr Melodie und Pop wagt. Wir besuchten
            die DJ und Produzentin zu Hause
            und begleiteten sie beim Auflegen in Hamburg
            und Berlin. Ein profaner Laptop-DJ
            auf einer nicht weiter erinnerten Hamburger
            Lagerhallenparty war es, der in der bis
          </div>
          <Quote>...Total Verrückt. absurd. wahnsinnig schön.</Quote>
        </div>
        <div className="text">
          dato nicht mit Clubkultur in Berührung gekommenen
          Teenagerin das Feuer der Faszination
          entzündet hat. So ganz ist die damit
          verbundene Irritation immer noch nicht
          überwunden, wie sie bei einer Tasse Pfefferminztee
          erzählt: »Ich finde es manchmal
          so absurd, dass Leute im Club zusammen
        </div>
        <SimpleSlider />
        <div className="text">
          kommen und tanzen. Tanzen. Total verrückt.
          Absurd. Wahnsinnig schön. Wahnsinnig absurd.
          Ein Bild, das sehr schön zu der Legende
          passt, dass Helena Hauff sich all dieses
          Equipment vom Munde abgespart hat. »Ich
          habe mir über Jahre bei Aldi die zwei Cent
        </div>
        <Quote>
          ...ich habe
          mir über
          zwei jahre
          nichts geleistet
        </Quote>
        <div className="text">
          günstigere Sahne gekauft und mir auch
          sonst nichts geleistet«, sagt sie. »Keine Klamotten,
          kein Auto, nichts. Allerdings hab ich
          das keineswegs als Einschränkung empfunden.
        </div>
        <div className="text">
          Ich habe da gar nicht so genau drüber
          nachgedacht, sondern wollte einfach das
          Geld zusammenbekommen, um mir die Maschinen
          kaufen zu können.«
        </div>
      </div>
    )
  }
})
