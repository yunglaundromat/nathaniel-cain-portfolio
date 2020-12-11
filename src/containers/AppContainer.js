import React, { Component } from 'react'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import { Switch, Route } from 'react-router-dom'
import { Container, Divider, List, Segment, Icon, Menu } from 'semantic-ui-react'

class AppContainer extends Component {

  componentDidMount() {
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
        </Switch>
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '3em 0em' }} fluid>
          <Container textAlign='center'>
             <List horizontal inverted divided link size='small'>
               <List.Item as='a' href='https://github.com/yunglaundromat'>
                 GitHub
               </List.Item>
               <List.Item as='a' href='https://www.linkedin.com/in/nathaniel-cain/'>
                 LinkedIn
               </List.Item>
               <List.Item as='a' href='https://angel.co/u/nathaniel-cain'>
                 AngelList
               </List.Item>
               <List.Item as='a' href='https://medium.com/@nathanielcain'>
                 Medium
               </List.Item>
               <Divider inverted section fitted/>
             </List>
            </Container>
            <Container textAlign='center'>
              <List horizontal inverted link size='small' centered>
                <List.Item>
                  Built with Semantic UI React<span> </span>
                  <Icon name='react'/>
                </List.Item>
              </List>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default AppContainer;
