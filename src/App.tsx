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
import { Dashboard } from './pages/Dashboard'

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
              to="/dashboard"
              className="Nav-element"
              activeClassName="Nav-active"
            >
              Dashboard
            </NavLink>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/battle" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
