import ArticleList    from "../comp/articleList/articleList"
import { Articles }   from "../sets/klass"

export default Articles.Component(class ArtistsNav{
  render(){
    return (<ArticleList articles={this.props.articles} />)
  }
})
