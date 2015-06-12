import React          from "react"
import ArticleList    from "../articleList/articleList.jsx"
import { cuarters }   from "../../sets/klass"

export default cuarters.Component(class {
  render(){
    return (<ArticleList articles={this.props.cuarters} />)
  }
})
