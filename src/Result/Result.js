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
              大廚們正落力買菜為你下廚，請<span style={{ color: "orange", fontSize: "20px" }}>耐心等候</span> =] </p>

            {/* <p><b><span style={{ color: "orange", fontSize: "20px" }}>目標人物</span></b>已於<strong>{this.props.restaurant}</strong>恭侯，請於15mins內到達{this.props.restaurant}</p> */}

            <p>你的備註: <br />{this.props.message}</p>
            <hr />

            {/* <h3>溫馨提示: </h3> */}
            {/* <div className="col-4">
                <input type="checkbox" /> 防曬 <br />
                <input type="checkbox" /> 鎖匙 <br />
                <input type="checkbox" /> 身份證 <br />
                <input type="checkbox" /> 錢 <br />
                <input type="checkbox" /> 纸巾 <br />
              </div> */}


            <div className="row">
              <div className="Carosel">
                <Carousel autoPlay={true} infiniteLoop={true} interval={1500} width={"100%"}>
                  {/* {this.loopCarosel()} */}
                  <div>
                    <img src={require('./photo1.jpg')} alt="error" />
                    <p className="legend">因為Yuna仲未比相我，只好ig偷圖... </p>
                  </div>
                  <div>
                    <img src={require('./photo2.jpg')} alt="error" />
                  </div>
                  <div>
                    <img src={require('./photo3.jpg')} alt="error" />
                  </div>
                  {/* <div>
                    <img src={require('./photo4.jpg')} alt="error" />
                  </div> */}
                  {/* <div>
                    <img src={require('./photo5.jpg')} alt="error" />
                  </div> */}
                  <div>
                    <img src={require('./photo6.jpg')} alt="error" />
                  </div>
                  <div>
                    <img src={require('./photo7.jpg')} alt="error" />
                  </div>
                  {/* <div>
                    <img src={require('./photo8.jpg')} alt="error" />
                  </div> */}
                  <div>
                    <img src={require('./photo9.jpg')} alt="error" />
                  </div>
                  <div>
                    <img src={require('./photo10.jpg')} alt="error" />
                  </div>
                  <div>
                    <img src={require('./photo11.jpg')} alt="error" />
                  </div>
                  <div>
                    <img src={require('./photo12.jpg')} alt="error" />
                  </div>
                  <div>
                    <img src={require('./photo13.jpg')} alt="error" />
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
