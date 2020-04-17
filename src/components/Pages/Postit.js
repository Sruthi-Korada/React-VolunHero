import React from "react";
import { Card, Button } from "react-bootstrap";

const Postit = (props) => {
  let backgroundColour = props.colour;
  const colourstyle = {
    backgroundColor: 'white',
  };
  const categories = ['Groceries', 'Household', 'Outdoor', 'Others']

  return (
    <div
      draggable
      className="post-it"
      onDragStart={() => props.onDragStart(props.key)}
    >
      <Card style={colourstyle}>
        <Card.Header>{categories && categories[props.category_id - 1]}</Card.Header>
        <Card.Body>
          <Card.Title>{props.description}</Card.Title>
          <Card.Text>{props.date}</Card.Text>
          <Button variant="primary" onClick={() => props.onClick(props.key)}>
            Update
          </Button>
          <Button style={{marginLeft: '10px'}} variant="primary" onClick={() => props.onClick(props.key)}>
            {props.is_completed ? 'Completed' : 'Pending'}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Postit;
