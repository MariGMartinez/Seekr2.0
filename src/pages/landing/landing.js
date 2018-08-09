import React, { Component, Fragment } from 'react'
import { Button } from 'react-materialize'
import Logo from '../../images/seekr-logo.png'
import LandingGif from '../../images/landingPage/landingGif.gif'
import './landing.css'

class Landing extends Component {
  render () {
    const landingCSS = {
      background: {
        backgroundImage: `url(${LandingGif})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      button: {
        backgroundColor: '#4477AA'
      }
    }

    return (
      <Fragment>
        <div id='centerInfo' style={landingCSS.background}>
          <img id='logo' src={Logo} alt='Seekr' />
          <br />
          <br />
          <br />
          <div id='landingBtn'>
            <Button style={landingCSS.button} waves='light' node='a' href='/newuser'> Begin Your Journey </Button>
          </div>
          <p id='accountText'>Already have an account? <a href='/login'>Log In</a></p>
        </div>
      </Fragment>
    )
  }
}

export default Landing
