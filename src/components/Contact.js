import React, { Component, Fragment } from 'react'
import { Header, Icon, Container } from 'semantic-ui-react'

class Contact extends Component {

  componentDidMount() {
    console.log("contact!")
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
      </Container>
    )
  }
}

export default Contact;
