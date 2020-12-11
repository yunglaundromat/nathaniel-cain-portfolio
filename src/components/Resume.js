import React, { Component, Fragment } from 'react'
import { Container, Header, Image } from "semantic-ui-react";

class Resume extends Component {

  render() {
    return (
      <Container style={{ marginTop: '6em' }}>
        <Fragment>
          <Header as='h1' color="blue">
            <img src="logo.png"/>
            <Header.Content >
              Resume
              <Header.Subheader>Click the image for a downloadable PDF.</Header.Subheader>
            </Header.Content>
          </Header>
        </Fragment>
        <Header as='h2' dividing>
        </Header>
        <Image
          src='resume.png'
          as='a'
          size='100%'
          href='http://nathanielcain.com/resume.pdf'
          target='_blank'
        />
      </Container>
    );
  }
}

export default Resume;
