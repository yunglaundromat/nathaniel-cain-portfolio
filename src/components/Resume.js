import React, { Component, Fragment } from 'react'
import { Container, Header } from "semantic-ui-react";

class Resume extends Component {

  render() {
    return (
      <Container style={{ marginTop: '6em' }}>
        <Fragment>
          <Header as='h1' color="blue">
            <img src="logo.png"/>
            <Header.Content >
              Resume
            </Header.Content>
          </Header>
        </Fragment>
        <Header as='h2' dividing>
        </Header>
        <Container textAlign="center">
        </Container>
      </Container>
    );
  }
}

export default Resume;
