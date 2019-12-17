import React, { Component } from 'react'
import './App.css';

import emailjs from 'emailjs-com';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      formSubmitted: false,
      name: ''
    }

    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
    e.preventDefault();

    console.log('e', e)

    emailjs.sendForm('gmail', 'template_BTGyrWBh', e.target, 'user_kyS15aCe2pPA6hm9Od0N1')
      .then((result) => {
        console.log(result.text);
        this.setState({ formSubmitted: true })
      }, (error) => {
        console.log(error.text);
        this.setState({ formSubmitted: true })
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const { formSubmitted, name } = this.state
    console.log('name', name)

    return (
      <div>
        {!formSubmitted && <form className="contact-form" onSubmit={this.sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        }
        {formSubmitted &&
          <div>
            <h1>{name}</h1>
            <h2>Your form is submitted!</h2>
          </div>}
      </div>
    );
  }
}

export default App