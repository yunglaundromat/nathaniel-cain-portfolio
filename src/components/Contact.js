import React, { Component, Fragment } from 'react'
import { Header, Icon, Container, Segment, Form, Button, Input, TextArea } from 'semantic-ui-react'

class Contact extends Component {

  state = {
    email: "",
    name: "",
    subject: "",
    body: ""
  }

  componentDidMount() {
    console.log("contact!")
  }

  handleSubmit = (e) => {
    this.setState({
      email: e.target.email.value,
      name: e.target.name.value,
      subject: e.target.subject.value,
      body: e.target.body.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <Container style={{ marginTop: '6em' }}>
        <Fragment>
          <Header as='h1' color="blue">
            <img src="logo.png"/>
            <Header.Content >
              Contact
            </Header.Content>
          </Header>
        </Fragment>
        <Header as='h2' dividing>
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Email</label>
              <input email="email" placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Name</label>
              <input name="name" placeholder="Name" />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Subject</label>
            <input subject="subject" placeholder="Subject" />
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <input body="body" placeholder="Your email here..." />
          </Form.Field>
          <Button type='submit'>Send Email</Button>
        </Form>
      </Container>
    )
  }
}

export default Contact;
