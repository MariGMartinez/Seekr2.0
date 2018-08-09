import React, { Component, Fragment } from "react"
import { USER } from "../../utils";
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom";
import { Row, Input, Button } from 'react-materialize'
import "../../components/registerForm/registerForm.css"
import HikerBeach from "../../images/register/hikerBeach.jpg"

class NewUser extends Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: ""
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            USER.saveUser({
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

    };
    render() {

        const newUserCSS = {
            background: {
                backgroundImage: `url(${HikerBeach})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "700px"
            }
        }
        return (
            <Fragment>
                <Helmet>
                    <style>
                        {`html, body {
                            height: 100%;
                            margin: 0;
                        }

                        #form {
                            background-color: white;
                            padding: 20px 0 20px 0;
                            opacity: 0.758;
                            border-radius: 25px;
                        }
                        #title {
                            font-family: 'Kanit', sans-serif;
                            font-size: 47px;
                            font-weight: bold;
                            color: #687864; 
                        }
                        .newUserBtn {
                            background-color: #31708E;
                        }
                        `}
                    </style>
                </Helmet>

                <div style = {newUserCSS.background} className = "registerBackground">
                <div className="row">
                    <div className="col s2"></div>
                        <div className="col s8">
                            <h3 id="title">Register</h3>
                        </div>
                    <div className="col s2"></div>
                </div>
                <Row id="form">
                    <div className="form">

                    <Input 
                        s={6} 
                        label="First Name"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        name="firstname"
                        />
                    <Input s={6} label="Last Name" 
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                        name="lastname"
                        />
                    <Input 
                        type="email" 
                        label="Email" 
                        s={12}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        />
                    <Input 
                        label="Create Username" s={12} 
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        />
                    <Input type="password" label="Create Password" s={12} 
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        />
                        </div>
                </Row>
                <br></br>
                <div id="submitBtn">
                    <Button 
                        className = "newUserBtn"
                        waves='light'
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                        href="/feed"
                        >
                        <Link  to={"/feed"} >Sign UP</Link> 
                    </Button>
                </div>
                        </div>

            </Fragment>
        )
    }
}
            


export default NewUser