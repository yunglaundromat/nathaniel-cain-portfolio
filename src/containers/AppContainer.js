import React, { Component, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Blogs from '../components/Blogs'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import { Switch, Route } from 'react-router-dom'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'

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
    } else if (e.target.className.includes("blogs")) {
      newSelection = "blogs"
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
    } else if (this.state.selection === "blogs") {
      return <Blogs />
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
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Copyright © 2020 Nathaniel Cain
              </List.Item>
              <List.Item as='a' href='#'>
                Built with Semantic UI React
                <Icon name='react' />
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default AppContainer;
