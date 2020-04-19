import React from "react";
import {Button} from 'react-bootstrap'

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
          <div className="image">
           
          </div>
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
            <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" placeholder="address" />
          </div>
          <div className="form-group">
          <label for="phone">Enter your phone number</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
        </div>
        <div className="form-group">
        <label htmlFor="country">Country</label>
        <div class="datalist-holder">
    <input list="country" name="country" class="datalist-input" placeholder="Country"/>
    <datalist id="country">
        <option value="canada" />
        <option value="us" />
        <option value="India" />
        <option value="Brazil" />
         </datalist>
           </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
        <Button  variant={'primary'} onClick={onclick} confirm>Register</Button>
        </div>
        </div>
      </div>
    );
  }
}
