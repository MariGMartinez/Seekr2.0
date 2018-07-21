import React, { Component, Fragment } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import LogoutButton from "../../components/LogoutButton"
import './navbar.css'



class Navbars extends Component {
  state = {
    isLoggedIn: sessionStorage.isLoggedIn,
    username: "",
    password: ""
};
handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
    sessionStorage.isLoggedIn = ""
    sessionStorage.userId = ''


}
  render() {
    const navbarCSS = {
      background: {
        backgroundColor: "#203542"
      }
    }
    return (
      <Fragment>
        <Navbar style = {navbarCSS.background} href = "/feed" brand='Seekr' left >
          <NavItem href="/feed">Home</NavItem>
          <NavItem href="/search">Trail Search</NavItem>
          <NavItem href='/profile'>Profile</NavItem>
          <NavItem href='/editProfile'>EditProfile</NavItem>
          <NavItem href='/currenthike'>Current Hike</NavItem>
          <NavItem href='/achievements'>Achievements</NavItem>
          <LogoutButton href="/" onClick={this.handleLogoutClick} />

        </Navbar>
      </Fragment>
    )
  }
}


export default Navbars


