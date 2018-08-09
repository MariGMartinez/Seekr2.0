import React, { Component, Fragment } from 'react'
import { Row, Input, Button } from 'react-materialize'
import './registerForm.css'

class NewUser extends Component {
  render () {
    return (
      <Fragment>
        <div className='registerPage'>

          <Row>
            <Input s={12} label='First Name' defaultValue={''} />

            <Input s={12} label='Last Name' defaultValue={''} />

            <Input s={12} label='Email' defaultValue={''} />

            <Input s={12} label='Create Password' defaultValue={''} />
          </Row>
        </div>
        <br />
        <br />
        <div id='submitBtn'>
          <Button waves='light'>button</Button>
        </div>

      </Fragment>

    )
  }
}

export default NewUser
