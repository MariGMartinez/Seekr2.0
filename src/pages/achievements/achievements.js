import {Tabs, Tab, Dropdown, Button, NavItem} from "react-materialize"
import Navbar from "../../components/navbar"
import { Helmet } from "react-helmet"
import {USER} from "../../utils";
import {Image} from 'cloudinary-react';
import React, {Component} from "react"
import bear from '../../images/achievements/Bear.png'
import backpack from '../../images/achievements/Backpack.png'
import bearpaw from '../../images/achievements/BearPaw.png'
import bike from '../../images/achievements/Bike.png'
import binoculars from '../../images/achievements/Binoculars.png'
import compass from '../../images/achievements/compass.png'
import intents from '../../images/achievements/intents.png'
import fire from '../../images/achievements/Fire.png'
import firstaid from '../../images/achievements/FirstAid.png'
import flashlight from '../../images/achievements/Flashlight.png'
import helmetbackpack from '../../images/achievements/Helmet_Backpack.png'
import helmet from '../../images/achievements/Helmet.png'
import hikingboot from '../../images/achievements/HikingBoot.png'
import hotdogstick from '../../images/achievements/Hotdog_Stick.png'
import kayak from '../../images/achievements/Kayak.png'
import map from '../../images/achievements/Map.png'
import plateandfork from '../../images/achievements/PlateandFork.png'
import rope from '../../images/achievements/Rope.png'
import swissarmyknife from '../../images/achievements/SwissArmyKnife.png'
import thermocoffee from '../../images/achievements/ThermoCoffee.png'
import watch from '../../images/achievements/Watch.png'
import "./achievements.css"
import mari from '../../images/achievements/mari.jpg';
class Achievements extends Component{
    //psuedo code//
    //import api from utils folder
    //then the api needs to have a function to call the server to query the data base for badges info related to the currently signed in user (think req.params.id)
    //componentdid(inheriting what the react app has)
    //call the api to get badges data call .then this.set.state update state to badges data
    // after state has been updated from our data base call through api, we will pass in the earned badges via this.state.earnedBadges using a forloop
    //available badges will be handled in a very similiar way 

    //team mates to do's
    //create the model in mongo
    //create controller methods for routers
    //create methods in the front end utils/api to call for badges
    // might want a seperate routers folder to call on controller functions (optional)
    //the mern books activity is a great reference for setting this all up
    
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: sessionStorage.isLoggedIn,
            userId: sessionStorage.userId,
            userAc:[],
            user: "",
            badges: [ 
                { 
                    name: "Moderate Hike",
                    img: hotdogstick,
                    color: "white",
                    points: 15 ,
                    miles: "4-7",
                    earned: true
                
                },
                {  
                    name: "Strenuous Hike-Killing it!", 
                    img: bear,
                    color: "white",
                    points: 20 ,
                    miles: "7-12",
                    earned: false
                }, 
                {
                     name: "Ultra Hike-More than a Conqueror!",
                     img: bearpaw,
                     color: "white",
                     points: 25,
                     miles: "15-25",
                     earned: false
                 },
                 {
                      name: "State Park Beauties",
                      img: map,
                      color:"white",
                      points: 30,
                      miles: "25-40",
                      earned: false
                 },  
                 { 
                     name: "National Park Hike",
                     img:compass,
                     color: "white",
                     points: 20 ,
                     miles: "40-60",
                     earned: false
                },
                { 
                    name: "Bike",
                    img:bike,
                    color: "white",
                    points: 20 ,
                    miles: "40-60",
                    earned: false
               },
               {
                name: "1st Hike-You did it!",
                img: hikingboot,
                color: "white",
                points: 5,
                miles:"1",
                earned: false
            },
            {
                 name: "Easy Hike-Keep it up!",
                 img: backpack,
                 color: "white",
                 points: 10 ,
                 miles: "1-3",
                 earned: false
            }
            
            ]
            
        //     {
        //         name: "Man, that trip was in tents!",
        //         img: intents,
        //         color: "#D79922",
        //         points: 100 ,
        //         miles: "1-3"
                
        //    }],
        //],
        //    toggle: true
        }
        
    }
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
    

   toggle(){
      this.setState({toggle: !this.state.toggle})
   }




    render (){
        return <div style={{ fontFamily: "sans-serif", fontSize: "18px", fontWeight:"600"}}> 
           <Helmet>
                <style>{'body { background-color: #96b5c9; }'}</style>
            </Helmet>
            <Navbar />
    
            {/* <div style={{padding:"20px", height: "300px"}}>
          
            <div style ={{margin: "0 auto", textAlign:"center", borderRadius:"100%", height:"300px", width:"300px", backgroundColor:"#F7F9FB"}}> */}
            {/* <img src={mari} style={{width: "100%", height: "300px", borderRadius: "100%"}}/> */}
           
            <div className="card  small darken-1 center-align">
                            <Image cloudName='phamjosi'  publicId={this.state.userAc.profilePic } width='200' crop='scale' radius='max' background='#869383'/>
                            <div>
                                <span className="card-title">{this.state.userAc.username}</span>
                                </div>
            </div>
            
            
            {/* </div>   
            </div> */}
            <div style={{marginBottom: "50px", marginTop: "50px", textAlign: "center" }}>
                <Dropdown trigger={
                    <Button style={{backgroundColor:"#2E9CCA"}}>Achievements</Button>

                }>
                <NavItem onClick={() => this.toggle()}>Earned Badges</NavItem>
                <NavItem onClick={() => this.toggle()}>Available Badges</NavItem>
                </Dropdown>
            </div>
            <div >
               
                {  <div style={{display: "grid", gridGap: "10px",  gridTemplateColumns: "repeat(3, 3fr)"}}>
                    {this.state.badges.map((badge, index) => {
                        return (
                            <div key={index} style={{
                                alignSelf: "center",
                                justifySelf: "center"}}>
                                <div className="card" style={ badge.earned ? { backgroundImage: "linear-gradient(65deg, #00a8c5, #ffff7e)" , color: '#FcFcFc'} : { backgroundImage: 'white' }}>
                                <div style={{width: "100px", height: "100px", backgroundColor: badge.color, 
     margin:"0 auto", borderRadius:"100%"}}>
                                    <div style={{position: "relative", marginLeft: "10px"}} >
                                        <img  className="size" src={badge.img}/>
                                    </div>
                                </div>
                                <p>Achievement: {badge.name}</p>
                                <p>Points {badge.points}</p>
                                <p>Miles {badge.miles}</p>
                                </div>
                            </div>
                       )
                    })}
                </div> }
            </div>
            {/*
            <img className="size" src={backpack}/>
            <img className="size" src={bear}/>
            <img className= "size" src={bearpaw}/>
            <img className="size" src={bike}/>
            <img className="size" src={binoculars}/>
            <img className= "size" src={compass}/>
            <img className="size" src={fire}/>
            <img className= "size"src={firstaid}/>
            <img className= "size"src={flashlight}/>
            <img className="size"src={helmetbackpack}/>
            <img className="size"src={helmet}/>
            <img className="size"src={hikingboot}/>
            <img className="size"src={hotdogstick}/>
            <img className="size"src={kayak}/>
            <img className="size"src={map}/> 
            <img className="size"src={plateandfork}/>
            <img className="size"src={rope}/>
            <img className="size"src={swissarmyknife}/>
            <img className="size"src={thermocoffee}/>
            <img className="size"src={watch}/>*/}
            </div>
    }
      
    
}


export default Achievements