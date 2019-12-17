import React, { Component } from 'react'
import './App.css';

import emailjs from 'emailjs-com';

class App extends Component {

  sendEmail(e) {
    e.preventDefault();

    console.log('e', e)

    emailjs.sendForm('gmail', 'template_BTGyrWBh', e.target, 'user_kyS15aCe2pPA6hm9Od0N1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  render() {
    return (
      <form className="contact-form" onSubmit={this.sendEmail}>
        {/* hidden means the data will not display to user but still sent to server */}
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default App
