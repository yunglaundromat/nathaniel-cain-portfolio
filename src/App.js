import React, { Component, Fragment } from 'react';
import AppContainer from './containers/AppContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log('App component mounted!')
  }

  render() {

    return (
      <div>
        <AppContainer />
      </div>
    )
  }
}

export default App;
