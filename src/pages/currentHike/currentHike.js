import React, { Component, Fragment } from 'react'
import { USER } from '../../utils'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Button } from 'react-materialize'
import LoginButton from '../../components/LoginButton'
import LogoutButton from '../../components/LogoutButton'
import MapHike from '../../components/MapHike'
import Navbar from '../../components/navbar'
import { Helmet } from 'react-helmet'

class MapHikePage extends Component {
  render () {
    return (
      <Fragment>
        <Helmet>
          <style>{'body { background-color: #96b5c9; }'}</style>
        </Helmet>
        <Navbar />
        <MapHike />
      </Fragment>
    )
  }
}

export default MapHikePage
