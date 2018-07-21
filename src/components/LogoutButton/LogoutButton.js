import React from 'react'
import { Button } from 'react-materialize'

import './LogoutButton.css'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const LogoutButton = props => (
  <Button
    id='logoutBtn'
    waves='light'
    onClick={props.onClick} >
    <strong>Logout</strong>
  </Button>
)

export default LogoutButton
