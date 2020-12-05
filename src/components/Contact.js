import React, { Component } from 'react'
import { Header, Icon, Container } from 'semantic-ui-react'

class Contact extends Component {

  componentDidMount() {
    console.log("contact!")
  }

  render() {
    return (
      <Container style={{ marginTop: '6em' }}>
        <Header as='h2' dividing>
          Contact
        </Header>
      </Container>
    )
  }
}

export default Contact;
