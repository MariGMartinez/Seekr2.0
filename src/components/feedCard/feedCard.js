import React, { Fragment } from 'react'
import { Col, Card, CardTitle } from 'react-materialize'
import './feedCard.css'

const feedCard = props => (
  <Fragment>
    <Col m={12} s={12} id='cardCol'>
      <Card className='small'
        header={<CardTitle image={props.image} />}>
        <h5><a id='newsTitle' href={props.link}>{props.title}</a></h5>
        <p id='newsSource'>Source: {props.source}</p>
      </Card>
    </Col>
  </Fragment>
)

export default feedCard
