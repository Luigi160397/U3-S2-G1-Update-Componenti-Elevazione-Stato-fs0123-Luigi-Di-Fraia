import { Component } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import books1 from "../books/fantasy.json";
import books2 from "../books/history.json";
import books3 from "../books/horror.json";
import books4 from "../books/romance.json";
import books5 from "../books/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container className="pb-5">
        <h2 className="display-4 pt-5">Sezione Fantasy:</h2>
        <Row style={{ overflow: "auto" }} className="pt-3 flex-nowrap">
          {books1.map((book, index) => (
            <Col key={`Fantasy-${index}`} className="pb-3 px-2">
              <Card className="shadow libri">
                <Card.Img variant="top" className="img-fluid" id="image-card" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h2 className="display-4 pt-5">Sezione History:</h2>
        <Row style={{ overflow: "auto" }} className="pt-3 flex-nowrap">
          {books2.map((book, index) => (
            <Col key={`History-${index}`} className="pb-3 px-2">
              <Card className="shadow libri">
                <Card.Img variant="top" className="img-fluid" id="image-card" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h2 className="display-4 pt-5">Sezione Horror:</h2>
        <Row style={{ overflow: "auto" }} className="pt-3 flex-nowrap">
          {books3.map((book, index) => (
            <Col key={`Horror-${index}`} className="pb-3 px-2">
              <Card className="shadow libri">
                <Card.Img variant="top" className="img-fluid" id="image-card" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h2 className="display-4 pt-5">Sezione Romance:</h2>
        <Row style={{ overflow: "auto" }} className="pt-3 flex-nowrap">
          {books4.map((book, index) => (
            <Col key={`Romance-${index}`} className="pb-3 px-2">
              <Card className="shadow libri">
                <Card.Img variant="top" className="img-fluid" id="image-card" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h2 className="display-4 pt-5">Sezione Sci-fi:</h2>
        <Row style={{ overflow: "auto" }} className="pt-3 flex-nowrap">
          {books5.map((book, index) => (
            <Col key={`Scifi-${index}`} className="pb-3 px-2">
              <Card className="shadow libri">
                <Card.Img variant="top" className="img-fluid" id="image-card" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
