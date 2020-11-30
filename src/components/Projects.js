import React, { Component, Fragment } from 'react'
import { Header, Image, Container, List, Grid, Icon } from 'semantic-ui-react'

class Projects extends Component {

  componentDidMount() {
    console.log("projects!")
  }

  render() {
    return(
      <div>
      <Container style={{ marginTop: '6em' }}>
        <Header as='h1' size='massive' color="blue">
          <Icon name='folder open' />
          <Header.Content>
            Projects
            <Header.Subheader>Individual projects and collaborative creations.</Header.Subheader>
          </Header.Content>
        </Header>
        <Header as='h2' dividing>
        </Header>
        <Grid columns={3} stackable centered>
          <Grid.Column>
            <List>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>skills</List.Header>
                  <List.Description>Techincal Skills</List.Description>
                  <List.List>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>ruby</List.Header>
                        <List.Description>Proficient in vanilla Ruby and Sinatra, as well as Ruby on Rails using ActiveRecord ORM</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>javascript</List.Header>
                        <List.Description>Equipped with a strong understanding of object-oriented Javascript </List.Description>
                        <List.List>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>react</List.Header>
                              <List.Description>Fluent in React and Redux</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>additional</List.Header>
                              <List.Description>
                                Knowledge of authorization & authentication using JWT (Javascript Web Token) and interactive mapping using Leaflet
                              </List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>java</List.Header>
                        <List.Description>
                          Experience developing in basic Java
                        </List.Description>
                        <List.List>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>selenium</List.Header>
                              <List.Description>Trained in Selenium utilizing Java, for testing in large-scale applications</List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List.List>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>about me</List.Header>
                  <List.Description>Full stack web developer with a passion for urban exploration, political science and cartography. With thorough experience in Rails and React, and a background in sales and team leadership, I thrive in an environment of collaboration and respect.</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Image src='img.jpg' size='medium' rounded centered style={{ marginTop: '2em' }}/>
          </Grid.Column>
        </Grid>
      </Container>
      </div>
    )
  }
}

export default Projects;
