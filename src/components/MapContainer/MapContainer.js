import React, { Component } from "react"
import "./MapContainer.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Row, Col, Input, Button, Card, CardTitle, Icon } from 'react-materialize'
import { API, USER } from "../../utils";
import Pin from '../../images/pin.png';
import SaveButton from "../SaveButton"
import CardList from "../CardList"



export class MapContainer extends Component {
    state = {
        results: [],
        trails: [],
        savedTrails: [],
        userAc: [],
        cardList: false,
        isLoggedIn: sessionStorage.isLoggedIn,
        userId: sessionStorage.userId,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        selectedCard: {},
        lat: 33.87844665140749, 
        lng: -117.80288169790663,
        position: null,
        addressNum: "",
        city:"",
        state: "",
        class1: "far fa-star fa-2x",
        class2: "far fa-star fa-2x",
        class3: "far fa-star fa-2x",
        class4: "far fa-star fa-2x",
        class5: "far fa-star fa-2x",
    }
    componentDidMount() {
        this.showCurrentPos()
        this.loadUser(this.state.userId)
        this.searchTrails(this.state.lat, this.state.lng)
       
    }
    loadUser = (id) => {
        USER.getUser(id)
            .then(res => this.setState({ userAc: res.data, savedTrails: res.data.savedTrails })
            )
            .catch(err => console.log(err));
    };
    saveToUser = (name)=>{
       
        API.findTrailByName(name)
           
            .then(res=>{
                let array = this.state.savedTrails
                array.push(res.data)
                this.setState({savedTrails: array})
                USER.addTrail(this.state.userId, {savedTrails: this.state.savedTrails} )
                    .then(res => console.log(res.data.savedTrails))
                    .catch(err=> console.log(err))
            })
            .catch(err => console.log(err))
            
    }
    loadTrails = () => {
        API.getTrails()
            .then(res => {
                this.setState({ trails: res.data })
            })
            .catch(err => console.log(err));
    };
    showCurrentPos = () => { 
        navigator.geolocation.getCurrentPosition((position) => {
            let lat
            let lng

                lat= position.coords.latitude
                lng= position.coords.longitude
            
            this.setState({ lat: lat, lng: lng })
            this.searchTrails(this.state.lat, this.state.lng)
           
        })

    }
    searchTrails = (lat, lng) => {
        API.searchTrails(lat, lng)
            .then(res => this.setState({ results: res.data.trails })
            )
            .catch(err => console.log(err));
    }
    onInfoWindowClose = () => {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
    }
    mapClicked = (mapProps, map, event) => {
        this.setState({
            lat: event.latLng.lat(), lng: event.latLng.lng()
        })
        this.searchTrails(this.state.lat, this.state.lng)

    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
        this.handleStar(this.state.selectedPlace.stars)
    }
    saveTrail = (trail) => {
        API.saveTrail(trail)
            .then(res => {this.loadTrails()})
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    codeAddress = event => {
        event.preventDefault();
        if (this.state.addressNum) {
            let address = `${this.state.addressNum},+${this.state.city},+${this.state.state}`
            const formattedAddress = address.split(" ").join("+")
            API.searchAddress(formattedAddress)
                .then(res => {this.setState({ lat: res.data.results[0].geometry.location.lat,
                                            lng: res.data.results[0].geometry.location.lng})
                            this.searchTrails(this.state.lat, this.state.lng)
                })
                .catch(err => console.log(err));
        }
    }
    handleStar = (stars)=>{
        this.setState({ class1: `far fa-star fa-2x`,
                        class2: `far fa-star fa-2x`,
                        class3: `far fa-star fa-2x`,
                        class4: `far fa-star fa-2x`,
                        class5: `far fa-star fa-2x` })

        if(stars > 4){
            this.setState({ class1: `far fas fa-star fa-2x`,
                            class2: `far fas fa-star fa-2x`,
                            class3: `far fas fa-star fa-2x`,
                            class4: `far fas fa-star fa-2x`,
                            class5: `far fas fa-star fa-2x`})
        } else if (stars > 3){
            this.setState({
                class1: `far fas fa-star fa-2x`,
                class2: `far fas fa-star fa-2x`,
                class3: `far fas fa-star fa-2x`,
                class4: `far fas fa-star fa-2x`
            })
        } else if (stars > 2) {
            this.setState({
                class1: `far fas fa-star fa-2x`,
                class2: `far fas fa-star fa-2x`,
                class3: `far fas fa-star fa-2x`
            })
        } else if (stars > 1) {
            this.setState({
                class1: `far fas fa-star fa-2x`,
                class2: `far fas fa-star fa-2x`
            })
        }else {
            this.setState({
                class1: `far fa-star fa-2x`,
                class2: `far fa-star fa-2x`,
                class3: `far fa-star fa-2x`,
                class4: `far fa-star fa-2x`,
                class5: `far fa-star fa-2x`
            })

        }
        this.setState({ class1: `far fas fa-star fa-2x`})
    }
    render() {
        const style = {
            width: '95vw',
            height: '100vh'
        }
        let cardList = this.state.cardList
         let card
         let btn
        if(cardList){
            btn = <Button className='yellow' waves='light'
                onClick={() => this.setState({ cardList: false })}
            >Close List<Icon right>cloud</Icon></Button>
            card = <CardList/>
        }else{
            btn = <Button className='blue' waves='light'
                onClick={() => this.setState({ cardList: true })}
            >Open List<Icon right>cloud</Icon></Button>
        }
        return (
            <Row>
                
                <Col s={12}>
                
                <Input 
                
                placeholderTextColor="blue"
                    placeholder="City or Zip Code" 
                    s={12}
                    type="text"
                    value={this.state.addressNum}
                    name = "addressNum"
                    onChange={this.handleInputChange}
                     />
                {/* <Input
                    placeholder="City"
                    s={2}
                    type="text"
                    value={this.state.city}
                    name="city"
                    onChange={this.handleInputChange}
                />
                <Input
                    placeholder="State"
                    s={2}
                    type="text"
                    value={this.state.state}
                    name="state"
                    onChange={this.handleInputChange}
                /> */}
                

                <Button className='red' waves='light' 
                        onClick={this.codeAddress}
                            disabled={!this.state.addressNum}>Search<Icon left>cloud</Icon></Button>
                {btn}
                    <br /><br />
                    {card}
                    {this.state.results.length? (
                        <Map style={style}
                        google={this.props.google} 
                        zoom={8}
                        onClick={this.mapClicked}
                        centerAroundCurrentLocation={true}
                        center ={ {lat:this.state.lat, lng: this.state.lng}}
                        >
                        
                        {this.state.results.map(trail => {
                            
                            return (
                            <Marker 
                                    key={trail.id}
                                    onClick={this.onMarkerClick}
                                    name={trail.name}
                                    id={trail.id}
                                    link={trail.url}
                                    image={trail.imgMedium}
                                    summary={trail.summary}
                                    location={trail.location}
                                    length={trail.length}
                                    stars={trail.stars}
                                    conditionStatus={trail.conditionStatus}
                                    longitude= {trail.longitude}
                                    latitude= {trail.latitude}
                                    saved={this.saveTrail({
                                        name: trail.name,
                                        id: trail.id,
                                        link: trail.url,
                                        image: trail.imgMedium,
                                        summary: trail.summary,
                                        location: trail.location,
                                        length: trail.length,
                                        stars: trail.stars,
                                        conditionStatus: trail.conditionStatus,
                                        longitude: trail.longitude,
                                        latitude: trail.latitude
                                        })}
                                    position={{ lat: trail.latitude, lng: trail.longitude }}>
                                    
                            </Marker>
                            )})}
                        <Marker
                            onClick={this.onMarkerClick}
                            name={'Your current location'}
                            position={{lat:this.state.lat, lng: this.state.lng}} />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <Card header={<CardTitle reveal image={this.state.selectedPlace.image} waves='light'/>}
                                title={this.state.selectedPlace.name}
                                reveal={<p>Sumary: {this.state.selectedPlace.summary}<br /><br />
                                        Location: {this.state.selectedPlace.location}<br /><br />
                                        Length: {this.state.selectedPlace.length}<br /><br />
                                        Condition Status: {this.state.selectedPlace.conditionStatus}<br /><br />
                                    </p>}

                                >
                                <i class={this.state.class1} style={{ color: 'red' }}></i>
                                <i class={this.state.class2} style={{ color: 'red' }}></i>
                                <i class={this.state.class3} style={{ color: 'red' }}></i>
                                <i class={this.state.class4} style={{ color: 'red' }}></i>
                                <i class={this.state.class5} style={{ color: 'red' }}></i>

                                <p><a href={this.state.selectedPlace.link}>View Trail</a></p>
                                


                            </Card>
                        </InfoWindow>
                            
                    </Map>

                ) : (
                    <h3>There is no trails near by your location</h3>
                )}
                </Col>
                
            </Row>
                
    );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)