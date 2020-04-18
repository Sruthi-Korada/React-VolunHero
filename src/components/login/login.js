import React from "react";
//import ButtonOld from 'components/Button';
import { Button } from "react-bootstrap";
import loginImg from "./help.png";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    let userLoggedIn = false;
    let volLoggedIn = false;
    this.state = {
      email: "",
      password: "",
      userLoggedIn,
      volLoggedIn,
    };
    this.onChange = this.onChange.bind(this);

    this.login = this.login.bind(this);
  }
  // login(e) {
  // e.preventDefault()
  // const { username, password } = this.state
  // if(username === "A" && password === "B")
  // this.setState({
  //   loggedIn: true
  // })
  // }
  login(e) {
    e.preventDefault();

    const { email, password } = this.state;
    if (email === "sruthikorada@gmail.com" && password === "password")
      this.setState({
        userLoggedIn: true,
      });
    if (email === "martaluiz@gmail.com" && password === "password")
      this.setState({
        volLoggedIn: true,
      });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    if (this.state.userLoggedIn) {
      return <Redirect to={"/Userpage"} />;
    }
    if (this.state.volLoggedIn) return <Redirect to={"/volunteerpage"} />;
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="fit">
          <div className="header"></div>
          <div className="content">
            <div className="image">
              <img src={loginImg} att="login" />
            </div>

            <div className="form">
              <div className="form-group">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              {/* </div>
              <div className="form-group"> */}
                {/* <label htmlFor="password">Password</label> */}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div>
              <Button
                variant={"primary"}
                type="submit"
                value="login"
                onClick={this.login}
                confirm
              >
                LOGIN
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
