import React, { Component } from 'react';
import NavBar from './components/NavBar'
import TitleCard from './components/TitleCard'
import AppContainer from './containers/AppContainer'
import Resume from './components/Resume'
import Testimonials from './components/Testimonials'
import { Grid } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {

  state = {
    activeItem: 'overview'
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name})
  }

  render() {

    return (
      <div className="App">
        <Grid>
  				<Grid.Row centered>
            <Grid.Column>
    					<Switch>
    						<Route path="/overview" render={(routeProps) => {
    							return <AppContainer {...routeProps}
                    />
    						}} />
    						<Route path="/resume" render={(routeProps) => {
    							return <Resume {...routeProps}
    								/>
    						}} />
                <Route path="/testimonials" render={(routeProps) => {
    							return <Testimonials {...routeProps}
    								/>
    						}} />
    					</Switch>
            </Grid.Column>
  				</Grid.Row>
  			</Grid>
      </div>
    )
  }
}

export default App;
