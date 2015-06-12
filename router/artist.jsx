import React, { Component } from "react"
import Artist               from "../comp/artist/artist.jsx"

export default class ArtistNav extends Component {
  render(){
    return (<Artist artist={this.props.name} />)
  }
}
