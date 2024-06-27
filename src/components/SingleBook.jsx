import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <div>
        <Card
          style={{
            width: "18rem",
            border: selected ? "2px solid red" : "2px solid grey",
            cursor: "pointer",
          }}
          onClick={() => this.setState({ selected: !selected })}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SingleBook;
