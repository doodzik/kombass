import React, { Component } from "react"
import ArticleList          from "../comp/articleList/articleList.jsx"
import Cuarter              from "../comp/cuarter/cuarter.jsx"

export default class CuarterNav extends Component {
  render(){
    return (<Cuarter cuarter={this.props.name} />)
  }
}
