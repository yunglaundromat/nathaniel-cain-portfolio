import React, { Component, Fragment } from 'react'
import { Container, Header, Image, Segment, Divider, Grid } from "semantic-ui-react";

class Resume extends Component {

  render() {
    return (
      <Container style={{ marginTop: '6em' }}>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a>Resume</a>
        </Divider>
        <Grid columns={1} stackable centered="true">
          <Image
            src='resume.png'
            as='a'
            size='large'
            href='http://nathanielcain.com/resume.pdf'
            target='_blank'
          />
        </Grid>
        <Divider hidden />
        <br></br>
        <Grid columns={1} stackable centered="true">
          <Image size='tiny' src='logo.png'/>
        </Grid>
      </Container>
    );
  }
}

export default Resume;
