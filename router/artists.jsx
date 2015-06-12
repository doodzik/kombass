import ArticleList from "../comp/articleList/articleList.jsx"
import { artists } from "../sets/klass"

export default artists.Component(class ArtistsNav{
  render(){
    return (<ArticleList articles={this.props.artists} />)
  }
})
