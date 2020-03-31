import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import './Nav.css'
import { Battle } from './pages/Battle'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <nav className="Nav-header">
          <ul className="Nav-list">
            <li className="Nav-element">
              <NavLink to="/battle" activeClassName="Nav-active">
                Battle
              </NavLink>
            </li>
            <li className="Nav-element">
              <NavLink to={'/dashboard'} activeClassName="Nav-active">
                Dashboard
              </NavLink>
            </li>
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
