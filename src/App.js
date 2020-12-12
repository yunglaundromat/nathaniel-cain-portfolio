import React, { Component } from "react";
import AppContainer from './containers/AppContainer'
import { Container, Icon, Menu, Sidebar, Responsive, Segment } from "semantic-ui-react";

class App extends Component {

  componentDidMount() {
    this.props.history.push("/home")
  }

  state = {
    selection: "home",
    visible: false
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
      selection: newSelection,
      visible: !this.state.visible
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
              <Menu.Item position="right" onClick={this.handleClick} className="home">About Me</Menu.Item>
              <Menu.Item onClick={this.handleClick} className="projects">Projects</Menu.Item>
              <Menu.Item href='https://medium.com/@nathanielcain'>Blogs</Menu.Item>
              <Menu.Item onClick={this.handleClick} className="resume">Resume</Menu.Item>
            </Sidebar>
            <AppContainer/>
            <Sidebar.Pusher
              dimmed={this.state.visible}
              onClick={this.handlePusher}
            >
              <Menu fixed="top" inverted borderless>
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
              <Menu.Item onClick={this.handleClick} className="home"><Icon name="home" size="large"/></Menu.Item>
              <Menu.Item position="right" onClick={this.handleClick} className="home">About Me</Menu.Item>
              <Menu.Item onClick={this.handleClick} className="projects">Projects</Menu.Item>
              <Menu.Item href='https://medium.com/@nathanielcain'>Blogs</Menu.Item>
              <Menu.Item onClick={this.handleClick} className="resume">Resume</Menu.Item>
            </Container>
          </Menu>
          <AppContainer/>
        </Responsive>
      </div>
    );
  }
}

export default App;
