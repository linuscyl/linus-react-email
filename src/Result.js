import React, { Component } from 'react'

class Result extends Component {

  render() {
    console.log('this.props.name', this.props.name)

    return (
      <div>
        <p>Your form is submitted!</p>
        <p>{this.props.name}</p>
        <p><span style={{ color: "orange", fontSize: "20px" }}>神秘人</span>已於{this.props.restaurant}恭侯，請於15mins內到達{this.props.restaurant}</p>
      </div>
    )
  }
}

export default Result