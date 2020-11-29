import React, { Component } from 'react';
import { Header, Icon, Image, Menu } from 'semantic-ui-react'

class NavBar extends Component {

  render() {
    return (
      <div>
        <br></br>
        <Image
          centered
          size='small'
          src='/img.jpg'
          circular
        />
        <Header as='h1' textAlign='center'>
          <Icon name='code' />
          <Header.Content>
            Nathaniel Cain
            <Header.Subheader>Full Stack Web Developer</Header.Subheader>
          </Header.Content>
        </Header>
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
