import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Container } from 'semantic-ui-react'

class NavBar extends Component {

  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
              Home
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
          </Container>
        </Menu>
      </div>
      //<Menu pointing vertical>
        //<Menu.Item
          //name='overview'
          //active={this.props.activeItem === "overview" ? this.props.activeItem : null}
          //onClick={this.props.handleItemClick}
        ///>
        //<Menu.Item
          //name='resume'
          //active={this.props.activeItem === "resume" ? this.props.activeItem : null}
          //onClick={this.props.handleItemClick}
        ///>
        //<Menu.Item
          //name='testimonials'
          //active={this.props.activeItem === "testimonials" ? this.props.activeItem : null}
          //onClick={this.props.handleItemClick}
        ///>
      //</Menu>
    )
  }
}

export default NavBar;
