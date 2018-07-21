import React, { Component, Fragment } from 'react'
import { Col, Card, Row } from 'react-materialize'
import './favHikes.css'

class favHikes extends Component {
  render () {
    return (
      <Fragment>
        <Card>
          <Row className=''>
            <Col s={12} className='center-align ' >
              <div>Favorite Hikes</div>
            </Col>
          </Row>
        </Card>

      </Fragment>

    )
  }
}

export default favHikes
