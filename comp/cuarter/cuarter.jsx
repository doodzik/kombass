import ArticleList    from "../articleList/articleList"
import { Cuarters }   from "../../sets/klass"

export default Cuarters.Component(class {
  render(){
    return (<ArticleList articles={this.props.articles} />)
  }
})
