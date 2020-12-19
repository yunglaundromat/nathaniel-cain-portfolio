import React, { Component, Fragment } from 'react'
import { Header, Container, List, Grid, Segment, Divider } from 'semantic-ui-react'

class Projects extends Component {

  render() {
    return(
      <Container style={{ marginTop: '6em' }}>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a>Technical Projects</a>
        </Divider>
        <Grid columns={2} stackable centered="true">
          <Grid.Column style={{ marginTop: '2em' }}>
            <List>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>cryptotrader</List.Header>
                  <List.Description>Cryptocurrency purchasing simulator that reflects real-time values of a vast array of cryptocurrencies.</List.Description>
                  <List.List>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>client-side</List.Header>
                        <List.Description>Fetches data to the front-end server using React.js from Coinranking API, which is updated every few minutes to give real-time values of cryptocurrency. Allows the user to sell coins, check their capital gain, coins owned, as well as add cash to, and subtract funds from, their CryptoTrader portfolio.</List.Description>
                        <List.List>
                          <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                              <List.Header><a href="https://github.com/wsaffran/crypto-trader-client">client-side github repository</a></List.Header>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>server-side</List.Header>
                        <List.Description>Persists data of purchased coins to the Rails server, giving the user a portfolio of their purchased coins. Utilizes a PostgreSQL database using ORM with ActiveRecord.</List.Description>
                        <List.List>
                          <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                              <List.Header><a href="https://github.com/wsaffran/crypto-trader-backend">server-side github repository</a></List.Header>
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
          <Grid.Column style={{ marginTop: '2em' }}>
            <div class="container">
              <video src="cryptotraderclientdemo.mov" width="100%" controls></video>
            </div>
          </Grid.Column>
        </Grid>
        <br></br>
        <Header as='h2' dividing>
        </Header>
        <br></br>
        <Grid columns={2} stackable centered="true">
          <Grid.Column style={{ marginTop: '2em' }}>
            <List>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>bike share international</List.Header>
                  <List.Description>Comprehensive app to assist users looking to find bike share systems and stations in cities across the world.</List.Description>
                  <List.List>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>client-side</List.Header>
                        <List.Description>Fetches data to the front-end from City Bikes API, giving information on every bike sharing system across the world. Once the user selects a city, they are able to view all bike share systems within the city limits. From there, they are able to view every bike share station within the selected system, providing information on how many bikes and free slots are at each station. Allows the user to log in (using BCrypt and JWT for authentication & authorization), and subsequently add a network to their favorites list. Client-side is built on React.js.</List.Description>
                        <List.List>
                          <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                              <List.Header><a href="https://github.com/yunglaundromat/mod4-bikeshare-proj-client">client-side github repository</a></List.Header>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>server-side</List.Header>
                        <List.Description>Persists login data and favorites list of each user to the backend using Ruby on Rails. Additionally, allows users to add a new network entry if the network is missing from the data fetched from City Bikes API. Utilizes a PostgreSQL database using ORM with ActiveRecord.</List.Description>
                        <List.List>
                          <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                              <List.Header><a href="https://github.com/whosAle/bikeshare-app-backend">server-side github repository</a></List.Header>
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
          <Grid.Column style={{ marginTop: '2em' }}>
            <div class="container">
              <video src="bikeshareinternationaldemo.mov" width="100%" controls></video>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Projects;
