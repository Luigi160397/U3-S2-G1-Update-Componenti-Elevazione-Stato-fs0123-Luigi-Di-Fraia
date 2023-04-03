import { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: ""
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/reservation", {
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        this.setState({
          comment: {
            comment: "",
            rate: "1",
            elementId: ""
          }
        });
      } else {
        alert("errore nell'invio dei dati");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <Container>
        <h5 className="fw-bold text-center">Scrivi il tuo commento:</h5>
        <Row className="justify-content-center">
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="comment">
                <Form.Label>Commento:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Scrivi il tuo commento..."
                  value={this.state.comment.comment}
                  onChange={e => {
                    this.setState({
                      comment: {
                        ...this.state.comment,
                        comment: e.target.value
                      }
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="rate">
                <Form.Label>Vota il libro:</Form.Label>
                <Form.Select
                  value={this.state.comment.rate}
                  onChange={e => {
                    this.setState({
                      comment: {
                        ...this.state.comment,
                        rate: e.target.value
                      }
                    });
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="elementId">
                <Form.Label>Element Id:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Scrivi l'Element Id"
                  value={this.state.comment.elementId}
                  onChange={e => {
                    this.setState({
                      comment: {
                        ...this.state.comment,
                        elementId: e.target.value
                      }
                    });
                  }}
                />
              </Form.Group>
              <Button className="mb-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddComment;
