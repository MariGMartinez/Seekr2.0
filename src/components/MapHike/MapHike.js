import React, { Component } from "react"
import "./MapHike.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Row, Col, Input, Button, Card, CardTitle } from 'react-materialize'
import { API, USER } from "../../utils";
import SaveButton from "../SaveButton"
import DeleteButton from "../DeleteButton"

export class MapContainer extends Component {
  state = {
    results: [],
    userAc: [],
    isLoggedIn: sessionStorage.isLoggedIn,
    userId: sessionStorage.userId,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    lat: 38.21814737017803,
    lng: -122.58098059051042,
    position: null,
    addressNum: "",
    city: "",
    state: ""
  }

  startHike = () => {

      var secondsLabel = document.getElementById("time");
      var totalSeconds = 0;
      setInterval(setTime, 1000);
      
      function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
      }
      
      function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }
    }
  


  endHike = () => {
  }

  componentDidMount() {
    this.showCurrentPos()
    //this.loadUser(this.state.userId)
  }
  loadUser = (id) => {
    USER.getUser(id)
      .then(res => this.setState({ userAc: res.data })
      )
      .catch(err => console.log(err));
  };
  showCurrentPos = () => {
    let lat = 33.68517198362942
    let lng = -117.60496744519037
    /* navigator.geolocation.getCurrentPosition((position) => {

            lat= position.coords.latitude
            lng= position.coords.longitude
        
        //return this.setState({ lat: lat, lng: lng })
       
    }) */
    this.setState({ lat: lat, lng: lng })

  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
  mapClicked = (mapProps, map, event) => {
    //this.setState({
    //   lat: event.latLng.lat(), lng: event.latLng.lng()
    //})
    alert(event.latLng.lat() + '/' + event.latLng.lng())

  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    const style = {
      width: '100%',
      height: '100vh'
    }

    return (
      <Row id="pos">
        <Col s={12} id="pos">

          <Map style={style}
            google={this.props.google}
            mapTypeId={this.satellite}
            zoom={17}
            onClick={this.mapClicked}
            //centerAroundCurrentLocation={false}
            center={{ lat: this.state.lat, lng: this.state.lng }}>

            <Marker
              onClick={this.onMarkerClick}
              name={'Your current location'}
              position={{ lat: this.state.lat, lng: this.state.lng }} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>

            </InfoWindow>
          </Map>
          <Row id="pos">
            <Button className='red' waves='light' id='start' onClick={() => this.startHike()}>Start Hike</Button>
          </Row>
          <Row id="pos">
            <Button className='red' waves='light' id='end' onClick={() => this.endHike()} >End Hike</Button>
          </Row>
          <Row id="pos">
            <h6>Distance Traveled: </h6><h6 id='distance'></h6>
            <h6>Time: </h6><h6 id='time'></h6>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)