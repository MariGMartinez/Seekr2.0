import React, { Component, Fragment } from "react"
import { USER } from "../../utils";
import { Link } from "react-router-dom";
import { Row, Col, Input, Button } from 'react-materialize'
import { Helmet } from "react-helmet"
import LoginButton from "../../components/LoginButton"
import LogoutButton from "../../components/LogoutButton"
import MapContainer from "../../components/MapContainer";
import CliffHiker from "../../images/login/cliffHiker.jpg"

class Login extends Component {


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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            const user = {
                username: this.state.username,
                password: this.state.password
            }
            USER.login(user)
                .then((res) => {
                    this.setState({ isLoggedIn: true })
                    sessionStorage.isLoggedIn = true
                    sessionStorage.userId = res.data._id
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let link

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
            // link = <Link to={"/profile"}><strong>{this.state.username} Logged In</strong></Link>
        } else {
            button = <LoginButton
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
                
            />
        }

        const loginCSS = {
            background: {
                backgroundImage: `url(${CliffHiker})`,
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
                        {`
                    html, body {
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
                        color: #F7F9FB; 
                    }
                `}
                    </style>
                </Helmet>
                <div style={loginCSS.background}>



                    <div className="row">
                        <div className="col s2"></div>
                        <div className="col s8">
                            <h3 id="title">Login</h3>
                        </div>
                        <div className="col s2"></div>
                    </div>
                    <Row id="form">

                        <Input
                            label="Username" s={12}
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                        />
                        <Input type="password" label="Password" s={12}
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                        />

                    </Row>
                    <br></br>
                    <div id="submitBtn">
                        {button} {link}
                        
                    </div>

                </div>
            </Fragment>
        )
    }
}



export default Login
