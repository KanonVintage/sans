import React, { Component } from "react"
import { nav, Nav, Breadcrumb } from "react-bootstrap"

class Beds extends Component {

  constructor(props) {
    super(props)
    this.loadBeds = this.loadBeds.bind(this)
  }

  loadBeds(){
    //console.log(this.props)
    this.props.fetchEmergencyBeds()
  }

  render() {
    return (
      <div className="container-fluid">
          <button id="loadBeds" onClick={this.loadBeds}>&#9776;</button>
      </div>
    )
  }
}

export default Beds
