import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Row } from 'react-materialize'
import MapContainer from '../../components/MapContainer'

import Navbar from '../../components/navbar'

import '../search/search.css'

class TrailSearch extends Component {
  render () {
    const searchCSS = {
      searchBar: {
        backgroundColor: 'white',
        borderRadius: '10px'
      }
    }
    return (
      <Fragment>
        <Helmet>
          <style>{'body { background-color: #96b5c9; }'}</style>
        </Helmet>
        <Navbar />
        <Row>

          <MapContainer />

        </Row>
      </Fragment>
    )
  }
}

export default TrailSearch
