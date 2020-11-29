import React, { Component } from 'react'
import { Header, Icon, Container } from 'semantic-ui-react'

class Home extends Component {

  componentDidMount() {
    console.log("home!")
  }

  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1' size="huge">
          <Icon name='laptop' />
          <Header.Content>
            Nathaniel Cain
            <Header.Subheader>Full Stack Web Developer</Header.Subheader>
          </Header.Content>
        </Header>
      </Container>
    )
  }
}

export default Home;
