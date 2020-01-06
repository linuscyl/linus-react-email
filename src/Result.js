import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

class Result extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isShowForm: false
    }
  }

  componentDidMount(prevProps) {
    // Typical usage (don't forget to compare props):
    setTimeout(() => {
      this.setState({ isShowForm: true })
    }, 1500);
  }


  render() {
    console.log('this.props.name', this.props.name)
    console.log('this.props.message', this.props.message)
    console.log('this.props.restaurant', this.props.restaurant)

    console.log('this.state', this.state)

    return (
      <div>
        {!this.state.isShowForm && <Loader type="Oval" color="#ffc0cb" width="100%" style={{ align: "center" }} />}
        {this.state.isShowForm &&
          <div>
            <p>Your form is submitted! <br />
              <b><span style={{ color: "orange", fontSize: "20px" }}>目標人物</span></b>已於<strong>{this.props.restaurant}</strong>恭侯，請於15mins內到達{this.props.restaurant}</p>
            <p>備註: <br />{this.props.message}</p>
            <hr />
            <h3>溫馨提示: </h3>
            <input type="checkbox" /> 防曬 <br />
            <input type="checkbox" /> 鎖匙 <br />
            <input type="checkbox" /> 身份證 <br />
            <input type="checkbox" /> 錢 <br />
            <input type="checkbox" /> 纸巾 <br />
          </div>}
      </div>
    )
  }
}

export default Result
