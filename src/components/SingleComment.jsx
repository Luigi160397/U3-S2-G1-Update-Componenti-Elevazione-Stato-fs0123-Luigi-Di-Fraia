import { Component } from "react";
import { Badge, Col, ListGroupItem, Row } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <ListGroupItem>
        <Row className="d-flex justify-content-between align-items-center">
          <Col xs={4}>Autore: {this.props.author}</Col>
          <Col xs={5}>{this.props.comment}</Col>
          <Col xs={3}>
            Rate: <Badge bg="dark">{this.props.rate}</Badge>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default SingleComment;
