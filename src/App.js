import React, { Component } from 'react'
import './App.css';

import emailjs from 'emailjs-com';
import { Helmet } from "react-helmet";

import Result from './Result/Result';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      formSubmitted: false,
      name: '',
      readyToGo: false,
      restaurant: '',
      hour: new Date().getHours(),
      message: '',
    }

    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {

    if (!this.state.readyToGo) {
      alert("請勾選我已準備出發!")
    } else if (this.state.restaurant === '') {
      alert("請選擇餐廳!")
    }
    else {
      e.preventDefault();

      console.log('e', e)

      emailjs.sendForm('gmail', 'template_5rzzDOq6', e.target, 'user_QRaRBGyPTxoDQjsvjFLWQ')
        .then((result) => {
          console.log(result.text);
          this.setState({ formSubmitted: true })
        }, (error) => {
          console.log(error.text);
          this.setState({ formSubmitted: true })
        });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckboxChange = (e) => {
    this.setState({
      readyToGo: e.target.checked
    })
  }

  render() {

    const { formSubmitted, name, restaurant, hour, message } = this.state

    return (
      <div className="container" id="app">
        <Helmet>
          <title>Laura HBD</title>
          <meta name="Laura HBD" content="This is a webste created for celebrating Laura Birthday." />
        </Helmet>

        {!formSubmitted && <div className="intro" style={{ background: "white", padding: "10px", margin: "20px" }}>
          <p>貼心的逸朗已準備豐盛的{hour < 12 ? "早餐" : "午餐"}，為你在一連串的任務前補充體力。<br />
            <b>梳洗完畢</b>後填妥表格，並即前往所選餐廳尋找<b><span style={{ color: "orange" }}>目標人物</span></b>。</p>
        </div>
        }

        <div className="formBody" style={{ marginTop: "20px", padding: "20px", background: "rgba(255, 255, 255, 0.5)" }}>
          {!formSubmitted &&
            <form className="contact-form" onSubmit={this.sendEmail}>
              <input type="hidden" name="meal" value={hour < 12 ? "早餐" : "午餐"} />
              {/* <label>Name</label>
              <input type="text" id="nameId" name="name" value={name} onChange={this.handleChange} /> */}
              <label>選擇享用{hour < 12 ? "早餐" : "午餐"}的餐廳</label>
              <br />
              <select name="restaurant" onChange={this.handleChange} id="restaurantId">
                <option value=''>請選擇</option>
                <option value="M記">M記</option>
                <option value="太興">太興</option>
                <option value="大快活">大快活</option>
                <option value="譚仔">譚仔</option>
              </select>
              <br />
              <br />
              <label>備註</label>
              <br />
              <textarea name="message" style={{ minWidth: "80%" }} value={message} onChange={this.handleChange} />
              <br />
              <input type="checkbox" name="readyToGo" onClick={this.handleCheckboxChange} />
              <span><b>我已準備出發</b></span>
              <br />
              <br />
              <input type="submit" value="發送" />
            </form>
          }

          {formSubmitted &&
            <div>
              <Result name={name} restaurant={restaurant} message={message} />
              {/* <button onClick={() => { this.setState({ formSubmitted: false }) }}>按此返回</button> */}
            </div>}

          <br />
          <br />
          <h6>求助: 60944209</h6>
        </div>
      </div >
    );
  }
}

export default App
