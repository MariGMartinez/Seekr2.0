import React, { Component, Fragment } from 'react'
import NewUser from '../../components/registerForm'
import '../../components/registerForm/registerForm.css'

class Register extends Component {
  render () {
    return (
      <Fragment>

        <div className='row'>
          <div className='col s2' />
          <div className='col s8'>
            <h3 id='title'>Register</h3>
          </div>
          <div className='col s2' />
        </div>
        <NewUser />

      </Fragment>
    )
  }
}

export default Register
