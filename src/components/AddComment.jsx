import { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzOWZmOWM1NmIzNjAwMTMzZmU1NWEiLCJpYXQiOjE2ODA1MDIyMDEsImV4cCI6MTY4MTcxMTgwMX0.fig-8rFCTFRY2yqHXAH6TirDOGQ_4zSo2BeVwq0XAj0",
          "Content-type": "application/json"
        }
      });

      if (response.ok) {
        this.setState({
          comment: {
            comment: "",
            rate: "1",
            elementId: this.props.asin
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
            <Form onSubmit={this.handleSubmit}>
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

              <Button className="mb-3" variant="warning" type="submit">
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
