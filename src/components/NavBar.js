import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Container } from 'semantic-ui-react'

const NavBar = (props) => {

  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item onClick={props.handleClick} className="home">Home</Menu.Item>
          <Menu.Item onClick={props.handleClick} className="projects">Projects</Menu.Item>
          <Menu.Item onClick={props.handleClick} className="about">About</Menu.Item>
          <Menu.Item onClick={props.handleClick} className="resume">Resume</Menu.Item>
        </Container>
      </Menu>
    </div>
  )
}

export default NavBar;
