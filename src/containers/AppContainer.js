import React, { Component, Fragment } from 'react'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import { Switch, Route } from 'react-router-dom'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

class AppContainer extends Component {

  componentDidMount() {
    console.log("App container mounted!")
  }

  state = {
    selection: "home"
  }

  handleClick = (e) => {
    let newSelection;
    if (e.target.className.includes("home")) {
      newSelection = "home"
    } else if (e.target.className.includes("projects")) {
      newSelection = "projects"
    } else if (e.target.className.includes("about")) {
      newSelection = "about"
    } else if (e.target.className.includes("resume")) {
      newSelection = "resume"
    }

    this.setState({
      selection: newSelection
    })
  }

  renderSelection() {
    if (this.state.selection === "home") {
      return <Home />
    } else if (this.state.selection === "projects") {
      return <Projects />
    } else if (this.state.selection === "about") {
      return <About />
    } else if (this.state.selection === "resume") {
      return <Resume />
    }
  }


  render() {
    return (
      <div>
        <Fragment>
          <NavBar handleClick={this.handleClick}/>
        </Fragment>
        {this.renderSelection()}
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Container textAlign='center'>
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 1' />
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 2' />
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 3' />
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as='h4' content='Footer Header' />
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size='mini' src='/logo.png' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default AppContainer;
