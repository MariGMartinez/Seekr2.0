import React, { Component, Fragment } from "react";
import Pin from '../../images/pin.png';
import "./profileCard.css";
import {USER} from "../../utils";
import {Image} from 'cloudinary-react';
import { Link } from "react-router-dom";



class profileCard extends Component {
    state = {
        trails: [],
        isLoggedIn: sessionStorage.isLoggedIn,
        userId: sessionStorage.userId,
        userAc:[]
      }; 
      componentDidMount(){
        this.loadUser(this.state.userId)
      }
    loadUser =(id)=>{
        USER.getUser(id)
            .then(res=>{
                this.setState({userAc: res.data})
                console.log(res.data)
            })
    }
  

    render() {
        var linkStyle = {
            
            color:"white"
        }
       
        return (
        <Fragment>
            <div className="row profileCardCSS">
                <div className="col s3"></div>
                    <div className="col s12 m6">
                        <div className="card  small darken-1 center-align">
                            <Image onError={Pin}cloudName='phamjosi'  publicId={this.state.userAc.profilePic } width='200' crop='scale' radius='max' background='#869383'/>
                            <div className="card-content white-text center-align">
                                {/* data for username goes here */}
                                <span className="card-title">{this.state.userAc.username}</span>
                                {/* data for location goes here */}
                                {/* <p> {this.state.userAc.firstname} {this.state.userAc.lastname} </p> */}
                                {/* <p> {this.state.userAc.age} </p> */}
                                <p>{this.state.userAc.bio} </p>
                                <p><img src={Pin} width={25} height={25} />{this.state.userAc.location} </p>
                               
                                <Link style={linkStyle} to={"/editProfile"} >Edit Profile</Link>
                                
                            </div>
                        </div>
                    </div>
                <div className="col s3"></div>
            </div>
        </Fragment>

        )
    }
}

export default profileCard

