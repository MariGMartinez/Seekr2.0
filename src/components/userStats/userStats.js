import React, { Component, Fragment } from 'react'
import { Col, Card, Row } from 'react-materialize'
import Hiked from '../../images/hiked.png'
import Badge from '../../images/badge.png'
import Trek from '../../images/trek.png'
import './userStats.css'

class userStats extends Component {
  render () {
    return (
      <Fragment>
        <Card className='small'>
          <Row className=''>
            <Col s={4} className='center-align ' >
              <img src={Trek}width={50} height={50} />
              <div>7</div>
              <div>treks</div>
            </Col>
            <Col s={4} className='center-align ' >
              <img src={Hiked}width={50} height={50} />
              <div>615</div>
              <div>miles hiked</div>
            </Col>
            <Col s={4} className=' center-align ' >
              <img src={Badge}width={50} height={50} />
              <div>3</div>
              <div>badges</div>
            </Col>
          </Row>
        </Card>

      </Fragment>

    )
  }
}

export default userStats
