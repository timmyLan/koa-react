import App from './containers/App'
import Home from './components/Home'
import Picture from './components/Picture'
import Counter from './containers/Counter'
import Button from './components/Button'
import {IndexRoute, Router, Route, browserHistory } from 'react-router'
import React from 'react'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="picture" component={Picture}/>
      <Route path="counter" component={Counter}/>
      <Route path="button" component={Button}/>
    </Route>
  </Router>
)