import React from 'react'
import { Button } from 'react-materialize'

import './SaveButton.css'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveButton = props => (
  <Button
    floating
    large
    className='red'
    waves='light'
    icon='add'
    onClick={props.onClick}
    {...props}>
    <strong>Save</strong>
  </Button>
)

export default SaveButton
