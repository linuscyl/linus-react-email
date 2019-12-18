import React, { Component } from 'react'
import './App.css';

import emailjs from 'emailjs-com';
import { Helmet } from "react-helmet";

import Result from './Result';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      formSubmitted: false,
      name: '',
      readyToGo: false,
      restaurant: null,
    }

    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {

    if (!this.state.readyToGo) {
      alert("整裝待發好再按發送!")
    } else {
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

    const { formSubmitted, name, restaurant, readyToGo } = this.state
    console.log('name', name)
    console.log('readyToGo', readyToGo)

    return (
      <div className="container" id="app">
        <Helmet>
          <title>Laura HBD</title>
          <meta name="Laura HBD" content="This is a webste created for celebrating Laura Birthday." />
        </Helmet>
        <div className="formBody" style={{ marginTop: "20px", padding: "20px", background: "rgba(255, 255, 255, 0.5)" }}>
          {!formSubmitted && <form className="contact-form" onSubmit={this.sendEmail}>
            <label>Name</label>
            <br />
            <input type="text" name="name" value={name} onChange={this.handleChange} />
            <br />
            <br />
            <label>選擇享用早餐的餐廳</label>
            <br />
            <select name="restaurant">
              <option value="mcdonald">M記</option>
              <option value="taihang">太興</option>
              <option value="restauranta">Restaurant A</option>
              <option value="restaurantb">restaurant B</option>
            </select>
            <br />
            <br />
            <label>備註</label>
            <br />
            <textarea name="message" />
            <br />
            <input type="checkbox" name="readyToGo" onClick={this.handleCheckboxChange} />
            <span><b>我已準備出發</b></span>
            <br />
            <br />
            <input type="submit" value="發送" />
          </form>
          }
          {formSubmitted && <Result name={name} restaurant={restaurant} />}
          <br />
          <br />
          <h6>求助: 60944209</h6>
        </div>
      </div>
    );
  }
}

export default App
