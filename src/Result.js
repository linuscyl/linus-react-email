import React, { Component } from 'react'

class Result extends Component {

  render() {
    console.log('this.props.name', this.props.name)
    console.log('this.props.restaurant', this.props.restaurant)

    return (
      <div>
        <p>Your form is submitted!</p>
        <p>{this.props.name}</p>
        <p><span style={{ color: "orange", fontSize: "20px" }}>目標人物</span>已於{this.props.restaurant}恭侯，請於15mins內到達{this.props.restaurant}</p>
        <hr />
        <h3>溫馨提示: </h3>
        <input type="checkbox" /> 防曬 <br />
        <input type="checkbox" /> 鎖匙 <br />
        <input type="checkbox" /> 身份證 <br />
        <input type="checkbox" /> 錢 <br />
        <input type="checkbox" /> 纸巾 <br />
      </div>
    )
  }
}

export default Result
