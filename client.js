import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App'
import Audience from './components/Audience'
import Board from './components/Board'
import Speaker from './components/Speaker'

const routes = (
  <Route component={App}>
    <Route path='/' component={Audience} />
    <Route path='board' component={Board} />
    <Route path='speaker' component={Speaker} />
  </Route>
)

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'))
