import React from "react";
import Login from "components/login/login"

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }


  render() {  
    return (
        <React.Fragment>
            <Login/>
       </React.Fragment>

    );
  }
}


export default Homepage;