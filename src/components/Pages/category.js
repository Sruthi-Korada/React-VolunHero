import React from 'react';
import "components/Application.scss";
import Form from 'components/Pages/form'
import List from 'components/Pages/List'
import picone from './image.png'
import pictwo from './s2.png'
import picthree from './s3.png'
import picfour from './s4.png'
import Popup from "reactjs-popup";

class Category extends React.Component{
  
    constructor(props) {
      super(props);
    }
    render(){
        return(
            <div>
            <div className="banner">
            <header className="logo">
            <h1>@VolunHero</h1>
            </header>
            </div>
            <div className="txt">
            <h1>Start by adding what you want!</h1>
            
            <div className="sp">
            <Popup trigger={
            <img 
            className ="icons"
            src={picone}
            >
            </img>}
            position='bottom left centers'
            >
            <Form></Form>
            </Popup>
            <img
            className ="icons"
            src={pictwo}>
            </img>
            <img
            className ="icons"
            src={picthree}>
            </img>
            <img
            className ="icons"
            src={picfour}>
            </img>
            </div>
            <div className= "listed">
            <List ></List>
            <List ></List>
            </div>
            
            </div>
            </div>
        )
    }
}
export default Category;