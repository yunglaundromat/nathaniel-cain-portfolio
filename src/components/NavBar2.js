import React, { Component, Fragment } from 'react'
import { Header, Container, Image, Grid, List, Menu, Icon } from 'semantic-ui-react'

class NavBar extends Component {

  render() {
    return (
      <Menu fixed='top' inverted icon borderless stackable>
        <Container>
          <Menu.Item onClick={this.props.handleClick} className="home"><Icon name="home" size="large"/></Menu.Item>
          <Menu.Item position="right" onClick={this.props.handleClick} className="home">About Me</Menu.Item>
          <Menu.Item onClick={this.props.handleClick} className="projects">Projects</Menu.Item>
          <Menu.Item href='https://medium.com/@nathanielcain'>Blogs</Menu.Item>
          <Menu.Item onClick={this.props.handleClick} className="resume">Resume</Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavBar;
