import React from 'react'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'

import './LoginButton.css'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const LoginButton = props => (
  <Button
    id='loginBtn'
    waves='light'
    onClick={props.onClick}>
    <Link to={'/feed'} >Login</Link>
  </Button>
)

export default LoginButton
