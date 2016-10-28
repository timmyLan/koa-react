import App from './containers/App'
import Picture from './components/Picture'
import Counter from './containers/Counter'
import Button from './components/Button'
import { Router, Route, browserHistory } from 'react-router'
import React from 'react'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="picture" component={Picture}/>
      <Route path="counter" component={Counter}/>
      <Route path="button" component={Button}/>
    </Route>
  </Router>
)