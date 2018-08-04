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
import axios from 'axios'
class App extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount () {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser () {
    axios.get('/api/users/getuser').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user')
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
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
