import React, { Component } from 'react'
import Overview from '../components/Overview'
import Resume from '../components/Resume'
import Testimonials from '../components/Testimonials'
import { Switch, Route } from 'react-router-dom'

class AppContainer extends Component {

  componentDidMount() {
    this.props.history.push(`/${this.props.activeItem}`)
  }

  render() {
    return (
      <div></div>
    )
  }

}

export default AppContainer;
