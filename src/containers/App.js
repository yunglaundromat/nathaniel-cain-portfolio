import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Modal,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    >
      Nathaniel Cain
    </Header>
    <Header
      as='h2'
      content='Full Stack Web Developer'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <br></br>
    <Button
      icon
      inverted
      size="huge"
      color='blue'
      as={ Link }
      to="section1"
      spy={true}
      smooth={true}
      offset={-70}
      duration={750}>
      <Icon name='hand point down' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {

  state = {
    open: false
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  hideModal = () => this.setState({ open: false })
  showModal = () => this.setState({ open: true })

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              position='right'
              borderless
            >
              <Container>
                <Menu.Item onClick={this.scrollToTop}>
                  <Image size='mini' src='logo.png'/>
                </Menu.Item>
                <Menu.Item position='right'
                  as={ Link }
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={750}
                >
                  About Me
                </Menu.Item>
                <Menu.Item
                  as={ Link }
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={750}
                >
                  Projects
                </Menu.Item>
                <Menu.Item
                  as={ Link }
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={750}
                >
                  Resume
                </Menu.Item>
                <Menu.Item as={ Modal }
                  onClose={this.hideModal}
                  onOpen={this.showModal}
                  open={this.state.open}
                  trigger={<Menu.Item>Contact</Menu.Item>}
                >
                  <Modal.Header>Contact Me</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      <Header
                      >Please don't hesitate to send me an email with any inquiries!</Header>
                      Or check out my profiles on GitHub, LinkedIn, AngelList and Medium.
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button circular color='grey' icon='github' href='https://github.com/yunglaundromat'/>
                    <Button circular color='linkedin' icon='linkedin' href='https://www.linkedin.com/in/nathaniel-cain/'/>
                    <Button circular color='teal' icon='angellist' href='https://angel.co/u/nathaniel-cain'/>
                    <Button circular color='black' icon='medium m' href='https://medium.com/@nathanielcain'/>
                    <Button color='google plus' href='https://mail.google.com/mail/?view=cm&fs=1&to=nathaniel2897@gmail.com'>
                      <Icon name="google"/>
                      Send Email
                    </Button>
                  </Modal.Actions>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />

          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            borderless
          >
            <Menu.Item
              onClick={this.handleSidebarHide}
              >
              Home
            </Menu.Item>
            <Menu.Item
              position='right'
              as={ Link }
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
              onClick={this.handleSidebarHide}
            >
              About Me
            </Menu.Item>
            <Menu.Item
              as={ Link }
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
              onClick={this.handleSidebarHide}
            >
              Projects
            </Menu.Item>
            <Menu.Item
              as={ Link }
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={750}
              onClick={this.handleSidebarHide}
            >
              Resume
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const App = () => (
    <ResponsiveContainer>
      <section id="section1">
        <Home />
      </section>
      <section id="section2">
        <Projects/>
      </section>
      <section id="section3">
        <Resume/>
      </section>
      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '3em 0em' }} fluid>
        <Container textAlign='center'>
           <List horizontal inverted divided link size='small'>
             <List.Item as='a' href='https://github.com/yunglaundromat'>
               GitHub
             </List.Item>
             <List.Item as='a' href='https://www.linkedin.com/in/nathaniel-cain/'>
               LinkedIn
             </List.Item>
             <List.Item as='a' href='https://angel.co/u/nathaniel-cain'>
               AngelList
             </List.Item>
             <List.Item as='a' href='https://medium.com/@nathanielcain'>
               Medium
             </List.Item>
             <Divider inverted section fitted/>
           </List>
          </Container>
          <Container textAlign='center'>
            <List horizontal inverted link size='small' centered>
              <List.Item>
                Built with Semantic UI React<span> </span>
                <Icon name='react'/>
              </List.Item>
            </List>
        </Container>
      </Segment>
    </ResponsiveContainer>
)

export default App;
