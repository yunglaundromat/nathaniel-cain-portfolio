import React, { Component } from 'react'
import { Container, Image, Grid, List, Divider } from 'semantic-ui-react'

class About extends Component {

  render() {
    return (
      <Container style={{ marginTop: '6em' }}>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a>About Me</a>
        </Divider>
        <Grid columns={2} stackable centered="true">
          <Grid.Column style={{ marginTop: '1em' }}>
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
                        <List.Header>languages</List.Header>
                        <List.List>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>ruby</List.Header>
                              <List.Description>Proficient in app development using object-oriented Ruby.</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>javascript</List.Header>
                              <List.Description>
                                Expertise with object-oriented Javascript.
                              </List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>java</List.Header>
                              <List.Description>
                                Experience developing in basic Java.
                              </List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>frameworks</List.Header>
                        <List.List>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>react.js & redux</List.Header>
                              <List.Description>
                                Fluent in React.js and Redux, as part of full stack applications using RESTful APIs, utilizing AJAX, and JSX for markup.
                              </List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>ruby on rails</List.Header>
                              <List.Description>Well-versed in creating RESTful APIs using Rails (utilizing ActiveRecord object relational mapping) as well as creating complete, client-facing applications utilizing embedded Ruby.</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>sinatra</List.Header>
                              <List.Description>
                                Practiced in manually creating MVC for smaller applications using Sinatra.
                              </List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>selenium</List.Header>
                              <List.Description>
                                Trained in Selenium utilizing Java for testing in large-scale applications.
                              </List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>databases</List.Header>
                        <List.List>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>SQL</List.Header>
                              <List.Description>
                                Well-experienced manually writing SQL queries and working with table relations.
                              </List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>PostgreSQL & SQLite</List.Header>
                              <List.Description>
                                Utilized Postgres and SQLite for full-stack apps using Rails as a backend.
                              </List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>additional</List.Header>
                        <List.List>
                          <List.Item>
                            <List.Icon name='file' />
                            <List.Content>
                              <List.Header>extracurricular skills</List.Header>
                              <List.Description>Adept in React Native, plus authorization & authentication using BCrypt and JWT (Javascript Web Token) and interactive mapping using Leaflet.</List.Description>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List.List>
                </List.Content>
              </List.Item>
              <br></br>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>more about me</List.Header>
                  <List.Description>Full stack web developer with a passion for urban exploration, political science and cartography. With over 2 years of experience in Ruby on Rails, Javascript and React.js, and a background in sales and team leadership, I thrive in an environment of collaboration and respect.</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Image src='img.jpg' size='large' rounded centered style={{ marginTop: '3em' }}/>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default About;
