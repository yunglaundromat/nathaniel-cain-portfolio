import React, { Component } from 'react'
import { Header, Icon, Container, Image, Button, Divider, Grid, Menu, Segment, List } from 'semantic-ui-react'

class Contact extends Component {

  componentDidMount() {
    console.log("contact!")
  }

  render() {
    return (
      <Container style={{ marginTop: '6em' }}>
        <Header as='h1' size='massive' color="blue">
          <Icon name='edit' />
          <Header.Content>
            Contact Me
          </Header.Content>
        </Header>
        <Header as='h2' dividing>
        </Header>
      </Container>
    )
  }
}

export default Contact;
