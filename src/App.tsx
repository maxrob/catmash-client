// eslint-disable-next-line
import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Battle } from './pages/Battle'
import { Leadboard } from './pages/Leadboard'

function App() {
  return (
    <Router>
      <div css={styles.app}>
        <nav css={styles.nav}>
          <NavLink
            to="/battle"
            css={styles.navElement}
            activeStyle={styles.navActive}
          >
            Battle
          </NavLink>
          <NavLink
            to="/leadboard"
            css={styles.navElement}
            activeStyle={styles.navActive}
          >
            Leadboard
          </NavLink>
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

const styles = {
  app: {
    height: '100%',
  },
  nav: {
    position: 'absolute' as 'absolute',
    top: '0',
    display: 'flex',
    background: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
    width: '100%',
    fontSize: 'large',
    fontWeight: 'bold' as 'bold',
    textTransform: 'uppercase' as 'uppercase',
    flexDirection: 'row' as 'row',
    margin: '0px',
    padding: '0px',
    listStyle: 'none',
  },
  navElement: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
    textDecoration: 'none',
    color: '#313947',
    backgroundColor: '#ECEDF2',
    borderBottom: '1px solid #babdd0',
    borderLeft: '1px solid #babdd0',
    borderRight: '1px solid #babdd0',
  },
  navActive: {
    backgroundColor: '#1BBC9B',
    color: 'white',
    borderBottom: '1px solid transparent',
    borderLeft: '1px solid transparent',
    borderRight: '1px solid transparent',
  },
}

export default App
