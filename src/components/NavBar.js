import React, { Component } from "react";
import { render } from "react-dom";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Segment
} from "semantic-ui-react";

class NavBar extends Component {

  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar.Pushable as={Segment.Group} raised>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              vertical
              visible={this.state.visible}
              width='thin'
            >
              <Menu.Item position="right" onClick={this.props.handleClick} className="home">About Me</Menu.Item>
              <Menu.Item onClick={this.props.handleClick} className="projects">Projects</Menu.Item>
              <Menu.Item href='https://medium.com/@nathanielcain'>Blogs</Menu.Item>
              <Menu.Item onClick={this.props.handleClick} className="resume">Resume</Menu.Item>
            </Sidebar>
            <Sidebar.Pusher
              dimmed={this.state.visible}
              onClick={this.handlePusher}
              style={{ minHeight: "100vh" }}
            >
              <Menu fixed="top" inverted>
              <Menu.Item onClick={this.handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              </Menu>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu fixed="top" inverted icon borderless>
            <Container>
              <Menu.Item onClick={this.props.handleClick} className="home"><Icon name="home" size="large"/></Menu.Item>
              <Menu.Item position="right" onClick={this.props.handleClick} className="home">About Me</Menu.Item>
              <Menu.Item onClick={this.props.handleClick} className="projects">Projects</Menu.Item>
              <Menu.Item href='https://medium.com/@nathanielcain'>Blogs</Menu.Item>
              <Menu.Item onClick={this.props.handleClick} className="resume">Resume</Menu.Item>
            </Container>
          </Menu>
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
