import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log('App component mounted!')
  }

  state = {
    activeItem: 'overview'
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name})
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
