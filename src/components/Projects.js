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
        <Grid columns={2} stackable centered>
          <Grid.Column style={{ marginTop: '2em' }}>
            <List>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>cryptotrader</List.Header>
                  <List.Description>Cryptocurrency purchasing simulator that reflects real-time values of a vast array of cryptocurrencies.</List.Description><br></br>
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
                    </List.Item><br></br>
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
              <video src="cryptotraderclientdemo.mov" width="600" controls></video>
            </div>
          </Grid.Column>
        </Grid>
        <br></br>
        <Header as='h2' dividing>
        </Header>
        <br></br>
        <Grid columns={2} stackable centered>
          <Grid.Column style={{ marginTop: '2em' }}>
            <List>
              <List.Item>
                <List.Icon name='folder' />
                <List.Content>
                  <List.Header>bike share international</List.Header>
                  <List.Description>Comprehensive app to assist users looking to find bike share systems and stations in cities across the world.</List.Description><br></br>
                  <List.List>
                    <List.Item>
                      <List.Icon name='folder' />
                      <List.Content>
                        <List.Header>client-side</List.Header>
                        <List.Description>Fetches data to the front-end server from City Bikes API, giving information on every bike sharing system across the world. Once the user selects a city, they are able to view all bike share systems within the city limits. From there, they are able to view every bike share station within the selected system, providing information on how many bikes and free slots are at each station. Allows the user to log in using JWT for authentication/authorization, and subsequently add a network to their favorites list.</List.Description>
                        <List.List>
                          <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                              <List.Header><a href="https://github.com/yunglaundromat/mod4-bikeshare-proj-client">client-side github repository</a></List.Header>
                            </List.Content>
                          </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item><br></br>
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
              <video src="bikeshareinternationaldemo.mov" width="600" controls></video>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
      </div>
    )
  }
}

export default Projects;
