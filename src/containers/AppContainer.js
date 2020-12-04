import React, { Component, Fragment } from 'react'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import { Switch, Route } from 'react-router-dom'
import { Container, Divider, Grid, List, Segment, Icon, Button, Menu, Image } from 'semantic-ui-react'

class AppContainer extends Component {

  componentDidMount() {
    console.log("App container mounted!")
    this.props.history.push("/home")
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
    } else if (e.target.className.includes("resume")) {
      newSelection = "resume"
    } else if (e.target.className.includes("contact")) {
      newSelection = "contact"
    }

    this.setState({
      selection: newSelection
    }, () => this.renderSelection())
  }

  renderSelection() {
    if (this.state.selection === "home") {
      this.props.history.push("/home")
    } else if (this.state.selection === "projects") {
      this.props.history.push("/projects")
    } else if (this.state.selection === "resume") {
      this.props.history.push("/resume")
    } else if (this.state.selection === "contact") {
      this.props.history.push("contact")
    }
  }


  render() {
    return (
      <div>
        <Container>
          <Menu fixed='top' inverted icon borderless>
            <Container>
              <Menu.Item onClick={this.handleClick} className="home"><Icon name="home" size="large"/></Menu.Item>
              <Menu.Item position="right" onClick={this.handleClick} className="home">About Me</Menu.Item>
              <Menu.Item onClick={this.handleClick} className="projects">Projects</Menu.Item>
              <Menu.Item href='https://medium.com/@nathanielcain'>Blogs</Menu.Item>
              <Menu.Item onClick={this.handleClick} className="resume">Resume</Menu.Item>
              <Menu.Item onClick={this.handleClick} className="contact">Contact</Menu.Item>
            </Container>
          </Menu>
        </Container>
        <Switch>
          <Route path="/home" render={(routeProps) => {
              return <Home {...routeProps} />
            }} />
            <Route path="/projects" render={(routeProps) => {
              return <Projects {...routeProps} />
            }} />
            <Route path="/resume" render={(routeProps) => {
              return <Resume {...routeProps} />
            }} />
            <Route path="/contact" render={(routeProps) => {
              return <Contact {...routeProps}/>
            }} />
        </Switch>
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Container textAlign='center'>
            <Grid inverted stackable columns={4} centered>
              <Grid.Column width={1} textAlign="center">
                <Button circular icon='github' href="https://github.com/yunglaundromat"/>
              </Grid.Column>
              <Grid.Column width={1} textAlign="center">
                <Button circular icon='linkedin' href="https://www.linkedin.com/in/nathaniel-cain-6b7703176/"/>
              </Grid.Column>
              <Grid.Column width={1} textAlign="center">
                <Button circular icon='angellist' href="https://angel.co/u/nathaniel-cain"/>
              </Grid.Column>
              <Grid.Column width={1} textAlign="center">
                <Button circular icon='medium m' href="https://medium.com/@nathanielcain"/>
              </Grid.Column>
            </Grid>
            <Divider inverted section />
            <List horizontal inverted link size='small'>
              <List.Item>
                Copyright © 2020 Nathaniel Cain
              </List.Item>
              <br></br>
              <List.Item>
                Built with Semantic UI React<span> </span>
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
