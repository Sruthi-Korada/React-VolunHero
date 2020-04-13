import React from 'react';
import Button from 'components/Button';
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

class Show extends React.Component{
  
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div className="sticky">
        <h2>Tittle</h2>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
        <div className="pad">
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </div>
      </div>

      )
    }
}
export default Show;