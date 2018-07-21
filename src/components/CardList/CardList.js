import React, { Component } from "react"
//import "./CardList.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Row, Col, Input, Button, Card, CardTitle, Collapsible, CollapsibleItem } from 'react-materialize'
import { API, USER } from "../../utils";
import SaveButton from "../SaveButton"



export class MapContainer extends Component {
    state = {
        trails: [],
        savedTrails: [],
        userAc: [],
        isLoggedIn: sessionStorage.isLoggedIn,
        userId: sessionStorage.userId,
       
    }
    componentDidMount() {
        this.loadUser(this.state.userId)
        this.loadTrails()

    }
    loadUser = (id) => {
        USER.getUser(id)
            .then(res => this.setState({ userAc: res.data, savedTrails: res.data.savedTrails })
            )
            .catch(err => console.log(err));
    };
    saveToUser = (name) => {

        API.findTrailByName(name)

            .then(res => {
                let array = this.state.savedTrails
                array.push(res.data)
                this.setState({ savedTrails: array })
                USER.addTrail(this.state.userId, { savedTrails: this.state.savedTrails })
                    .then(res => console.log(res.data.savedTrails))
                    .catch(err => console.log(err))
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
   
    render() {
        
        return (
            <Row >

                <Col s={9}>
                    {this.state.trails.length ? (
                        <Collapsible popout >

                            {this.state.trails.map(trail => {
                                return (
                                    <CollapsibleItem header={trail.name} icon='place'>

                                        <Card
                                            key={trail._id}
                                            header={<CardTitle reveal image={trail.image} waves='light' />}
                                            title={trail.name}
                                            reveal={<p>Sumary: {trail.summary}<br /><br />
                                                Location: {trail.location}<br /><br />
                                                Length: {trail.length}<br /><br />
                                                Condition Status: {trail.conditionStatus}<br /><br />
                                            </p>}
                                            actions={<SaveButton onClick={() => { this.saveToUser(trail.id) }}></SaveButton>}>

                                            <p><a href={trail.url}>Go</a></p>

                                        </Card>
                                    </CollapsibleItem>
                                )
                            }
                            )}
                        </Collapsible>
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