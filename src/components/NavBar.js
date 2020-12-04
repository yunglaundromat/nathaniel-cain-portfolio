import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Container } from 'semantic-ui-react'

const NavBar = (props) => {

  return (
    <div>
      <Menu fixed='top' inverted icon borderless>
        <Container>
          <Menu.Item onClick={props.handleClick} className="home"><Icon name='home' size='large' /></Menu.Item>
          <Menu.Item position="right" onClick={props.handleClick} className="home">About Me</Menu.Item>
          <Menu.Item onClick={props.handleClick} className="projects">Projects</Menu.Item>
          <Menu.Item href='https://medium.com/@nathanielcain'>Blogs</Menu.Item>
          <Menu.Item onClick={props.handleClick} className="resume">Resume</Menu.Item>
          <Menu.Item onClick={props.handleClick} className="contact">Contact</Menu.Item>
        </Container>
      </Menu>
    </div>
  )
}

export default NavBar;
