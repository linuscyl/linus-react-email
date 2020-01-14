import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
            <div className="row">
              <div className="col-4">
                <input type="checkbox" /> 防曬 <br />
                <input type="checkbox" /> 鎖匙 <br />
                <input type="checkbox" /> 身份證 <br />
                <input type="checkbox" /> 錢 <br />
                <input type="checkbox" /> 纸巾 <br />
              </div>
              <div className="col-8 Carosel">
                {/* <Loader type="Oval" color="#ffc0cb" width="100%" style={{ align: "center" }} /> */}
              </div>

              <div className="Carosel">
                <Carousel autoPlay={true} infiniteLoop={true} interval={1500} width={"100%"}>
                  <div>
                    <img src={require('./aaaatest.jpg')} alt="error" />
                    <p className="legend">Legend 1</p>
                  </div>
                  <div>
                    <img src={require('./aaaatest.jpg')} alt="error" />
                    <p className="legend">Legend 2</p>
                  </div>
                  <div>
                    <img src={require('./aaaatest.jpg')} alt="error" />
                    <p className="legend">Legend 3</p>
                  </div>
                </Carousel>
              </div>
            </div>

          </div>}
      </div>
    )
  }
}

export default Result
