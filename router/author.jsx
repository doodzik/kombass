import React, { Component } from "react"
import ArticleList          from "../comp/articleList/articleList"
import Author               from "../comp/author/author.jsx"

export default class AuthorNav extends Component {
  render(){
    return (<Author author={this.props.name} />)
  }
})
