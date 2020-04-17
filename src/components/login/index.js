import React from "react";
import "components/login/styles.scss";
import "components/Application.scss";
import Login from "components/login/login";
import Register from "components/login/register";

import { Navbar, Row, Col } from "react-bootstrap";

import Logo from "../Pages/volun--hero.png";

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div>
        <Navbar bg="primary" variant="dark" className="app__bar">
          <img className="app__logo" src={Logo} />
          {/* <Navbar.Brand href="">@VolunHero</Navbar.Brand>*/}
        </Navbar>
        <div className="hero__bannerlogin"></div>
        <div className="App">
          <div className="login">
            <div className="container" ref={(ref) => (this.container = ref)}>
              {isLogginActive && (
                <Login containerRef={(ref) => (this.current = ref)} />
              )}
              {!isLogginActive && (
                <Register containerRef={(ref) => (this.current = ref)} />
              )}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={(ref) => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
