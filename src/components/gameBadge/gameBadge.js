import React, { Component, Fragment } from 'react'
import './gameBadge.css'

class gameBadge extends Component {
  render () {
    return (
      <Fragment>
        <div className='row'>
          <div className='col s3' />
          <div className='col s12 m6'>
            <div className='card blue-grey darken-1'>
              <div className='badgeContainer card-content white-text center-align'>
                {/* Badge title goes here */}
                <span className='gameBadge card-title'>game badge 1</span>
                {/* badge description */}
                <p> badge description</p>
              </div>
            </div>
          </div>
          <div className='col s3' />
        </div>
      </Fragment>

    )
  }
}

export default gameBadge
