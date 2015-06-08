import React, { Component } from "react"
import ArticleList          from "../comp/articleList/articleList"
import Cuarter              from "../comp/cuarter/cuarter.jsx"

export default class CuarterNav extends Component {
  render(){
    return (<Cuarter cuarter={this.props.name} />)
  }
})
