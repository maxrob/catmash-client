import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import './App.css'
import './Nav.css'
import { Battle } from './pages/Battle'
import { Leadboard } from './pages/Leadboard'

function App() {
  return (
    <Router>
      <div className="App-content">
        <nav className="Nav-header">
          <ul className="Nav-list">
            <NavLink
              to="/battle"
              className="Nav-element"
              activeClassName="Nav-active"
            >
              Battle
            </NavLink>
            <NavLink
              to="/leadboard"
              className="Nav-element"
              activeClassName="Nav-active"
            >
              Leadboard
            </NavLink>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/leadboard" component={Leadboard} />
          <Redirect to="/battle" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
