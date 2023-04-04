import { Component } from "react";
import { Badge, Button, Col, ListGroupItem, Row } from "react-bootstrap";

class SingleComment extends Component {
  deleteComment = async () => {
    const commentId = this.props._id;
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzOWZmOWM1NmIzNjAwMTMzZmU1NWEiLCJpYXQiOjE2ODA1MDIyMDEsImV4cCI6MTY4MTcxMTgwMX0.fig-8rFCTFRY2yqHXAH6TirDOGQ_4zSo2BeVwq0XAj0",
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        this.props.request();
        alert("Commento eliminato con successo.");
      } else {
        throw new Error("Error deleting comment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ListGroupItem>
        <Row className="d-flex justify-content-between align-items-center gy-2">
          <Col className="text-truncate" xs={12}>
            <strong>Autore:</strong> {this.props.author}
          </Col>
          <Col xs={12}>
            <strong>Commento:</strong> {this.props.comment}
          </Col>
          <Col xs={12}>
            <strong>Rate:</strong> <Badge bg="dark">{this.props.rate}</Badge>
          </Col>
          <Col xs={12}>
            <Button variant="danger" className="fs-6" onClick={this.deleteComment}>
              <small>Elimina</small>
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default SingleComment;
