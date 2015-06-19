import React from "react"
import Hammer from "hammerjs"
import Article from "../articleElement/articleElement.jsx"
require('./articlesList.styl')

export default React.createClass({
  propTypes: {
    articles: React.PropTypes.array.isRequired
  },

  componentDidMount(){
    var myElement = React.findDOMNode(this.refs.myInput),
        mc        = new Hammer(myElement);

    mc.get('pan').set({ threshold: 50 })

    // listen to events...
    mc.on("pan", function(ev) {
      // isFinal: false
      // isFirst: false
      // window.scrollTo(0, ev.deltaX)
    })
  },

render: function () {
    var articles = this.props.articles.map((article, index) => {
      return(
                <Article 
                  artist={article.artist} 
                  content={article.content} 
                  cover={article.cover} />
            )
     })
    return (
            <div  ref="myInput" className="articles">
              {articles[0]}
            </div>
           )
}

  // render: function () {
  //   var articles = this.props.articles.map((article, index) => {
  //     return(<li className="article" key={index}>
  //               <Article 
  //                 artist={article.artist} 
  //                 content={article.content} 
  //                 cover={article.cover} />
  //           </li>)
  //    })
  //   return (
  //           <ul  ref="myInput" className="articles">
  //             {articles}
  //             <li className="article article-empty">No articles</li>
  //           </ul>
  //          )
  // }
})
