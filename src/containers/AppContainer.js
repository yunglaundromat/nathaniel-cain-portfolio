import React, { Component } from 'react'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import { Switch, Route } from 'react-router-dom'
import { Container, Divider, List, Segment, Icon, Menu } from 'semantic-ui-react'

class AppContainer extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" render={(routeProps) => {
              return <Home {...routeProps} />
            }} />
            <Route path="/projects" render={(routeProps) => {
              return <Projects {...routeProps} />
            }} />
            <Route path="/resume" render={(routeProps) => {
              return <Resume {...routeProps} />
            }} />
        </Switch>
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
      </div>
    )
  }
}

export default AppContainer;
