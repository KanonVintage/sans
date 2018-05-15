import React, { Component } from "react"
import { nav, Nav, Breadcrumb } from "react-bootstrap"

class Beds extends Component {

  constructor(props) {
    super(props)
    this.loadBeds = this.loadBeds.bind(this)
  }

  loadBeds(){
    console.log("fetching beds")
    this.props.fetchEmergencyBeds()
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav pullRight>
          <span id="loadBeds" onClick={this.loadBeds}>&#9776;</span>
        </Nav>
      </div>
    )
  }
}

export default Beds
