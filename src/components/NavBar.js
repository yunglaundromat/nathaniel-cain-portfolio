import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {

  render() {
    return (
      <Menu pointing vertical>
        <Menu.Item
          name='overview'
          active={this.props.activeItem === "overview" ? this.props.activeItem : null}
          onClick={this.props.handleItemClick}
        />
        <Menu.Item
          name='resume'
          active={this.props.activeItem === "resume" ? this.props.activeItem : null}
          onClick={this.props.handleItemClick}
        />
        <Menu.Item
          name='testimonials'
          active={this.props.activeItem === "testimonials" ? this.props.activeItem : null}
          onClick={this.props.handleItemClick}
        />
      </Menu>
    )
  }
}

export default NavBar;
