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
import { Battle } from 'pages/Battle'
import { Leadboard } from 'pages/Leadboard'
import { colors } from 'res/colors'

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
    background: colors.white,
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
    color: colors.black,
    backgroundColor: colors.lightGrey,
  },
  navActive: {
    backgroundColor: colors.green,
    color: colors.white,
  },
}

export default App
