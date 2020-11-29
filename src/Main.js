import React, { Component, Fragment } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import DisplayContainer from "./DisplayContainer"
import { Menu, Header, Image } from 'semantic-ui-react'
import pic from './profilepic.jpg'

class Main extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Fragment>
          <Header as='h1'>
            <Image circular src={pic} /> Nathaniel Cain
          </Header>
          <Menu pointing secondary vertical>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='projects'
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Fragment>
        <Fragment>
          <DisplayContainer >
        </Fragment>
      </div>
    )
  }
}

export default Main;
