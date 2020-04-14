import React from 'react';

const Postit = ( props ) => {

let backgroundColour = props.colour
const colourstyle = {
  backgroundColor: backgroundColour,
}

return (

<div draggable
  className="post-it" 
  style={colourstyle}
  onDragStart={() => props.onDragStart(props.key)}>
    <ul>
      
      <h3>{props.title}</h3>
      <li>{props.content}</li>
      <h3>{props.date}</h3>
      <button className="smallbtn" onClick={() => props.onClick(props.key)}>Update</button>
      
    </ul>
  </div>

  );
};

export default Postit;