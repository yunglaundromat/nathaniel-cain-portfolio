import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Container } from 'semantic-ui-react'

const NavBar = (props) => {

  return (
    <div>
      <Menu fixed='top' inverted icon>
        <Container>
          <Menu.Item onClick={props.handleClick} className="home"><Icon inverted color='teal' name='home' size='large' /></Menu.Item>
          <Menu.Item onClick={props.handleClick} className="projects">Projects</Menu.Item>
          <Menu.Item onClick={props.handleClick} className="blogs">Blogs</Menu.Item>
          <Menu.Item onClick={props.handleClick} className="resume">Resume</Menu.Item>
        </Container>
      </Menu>
    </div>
  )
}

export default NavBar;
