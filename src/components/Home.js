import React, { Component } from 'react'
import { Header, Icon, Container, Image, Button, Divider, Grid, Menu, Segment, List } from 'semantic-ui-react'

class Home extends Component {

  componentDidMount() {
    console.log("home!")
  }

  render() {
    return (
      <Container style={{ marginTop: '6em' }}>
        <Header as='h1' size='large'>
          <Icon name='laptop' />
          <Header.Content>
            Nathaniel Cain
            <Header.Subheader>Full Stack Web Developer</Header.Subheader>
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
                              <List.Description>Trained in Selenium utilizing Java, testing large-scale applications</List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List.List>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>

            <Grid.Column>
              <Image src='img.jpg' size='medium' rounded centered/>
            </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Home;
