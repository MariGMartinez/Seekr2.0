import React from 'react'
import { Button } from 'react-materialize'

import './DeleteButton.css'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteButton = props => (
  <Button
    className='red'
    waves='light'
    onClick={props.onClick}>
    <strong>Delete</strong>
  </Button>
)

export default DeleteButton
