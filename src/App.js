import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Profile from './pages/profile/profile'
import EditProfile from './pages/editProfile/editProfile'
import Landing from './pages/landing/landing'
import Feed from './pages/feed/feed'
import Register from './pages/newUser/newUser'
import Login from './pages/login/login'
import TrailSearch from './pages/search/search'
import Achievements from './pages/achievements/achievements'
import CurrentHike from './pages/currentHike/currentHike'
class App extends Component {
  render () {
    return (
      <Router>
        <Fragment>

          <Route exact path='/' component={Landing} />
          <Route exact path='/feed' component={Feed} />
          <Route exact path='/newUser' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/editProfile' component={EditProfile} />
          <Route exact path='/search' component={TrailSearch} />
          <Route exact path='/achievements' component={Achievements} />
          <Route exact path='/currenthike' component={CurrentHike} />

        </Fragment>

      </Router>

    )
  }
}

export default App
