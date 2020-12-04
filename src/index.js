import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer'
import './index.css';
import 'semantic-ui-less/semantic.less';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route path="/" component={AppContainer} />
  </Router>, document.getElementById('root'));
