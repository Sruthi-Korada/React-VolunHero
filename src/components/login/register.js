import React from "react";
import { Button } from "react-bootstrap";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="fit">
          <div className="header">Register</div>
          <div className="content">
            <div className="image"></div>
            <div className="form">
              <div className="volunteer">
                <label htmlFor="volunteer">I am Volunteer</label>
                <input type="checkbox" name="volunteer" />
              </div>

              <div className="form-group">
                <label htmlFor="username">name</label>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" />
              </div>
            </div>
            <div className="footer">
              <Button variant={"primary"} onClick={onclick} confirm>
                REGISTER
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
