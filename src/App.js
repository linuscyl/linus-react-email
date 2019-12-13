import React, { Component } from 'react'
import './App.css';

import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      readyToSent: false,
      email: '',
      message: '',
    }
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // handleSubmit(e) {
  //   e.preventDefault()

  //   const { name, email, message } = this.state

  //   const form = axios.post('api/form', {
  //     name,
  //     email,
  //     message
  //   })
  // }

  handleEmailJs() {

    const templateParams = {
      name: 'Linus Chan in react app',
      notes: 'Check this out!'
    }

    emailjs.send('gmail', 'template_BTGyrWBh', templateParams, 'user_kyS15aCe2pPA6hm9Od0N1')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }

  render() {
    return (
      <div>
        <div className="App">
          <Form style={{ maxWidth: '400px', marginLeft: '20px' }} onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name='name' onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter message" name='message' onChange={this.handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <button onClick={this.handleEmailJs}>EmailJs</button>


        </div>
      </div>
    )
  }
}

export default App
