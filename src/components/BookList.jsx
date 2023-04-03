import { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    stringa: ""
  };

  render() {
    return (
      <>
        <Form
          id="cerca"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <Form.Group className="mb-3" controlId="search">
            <Form.Control
              type="text"
              placeholder="Cerca nella sezione"
              value={this.state.stringa}
              onChange={e => {
                this.setState({
                  stringa: e.target.value
                });
              }}
            />
          </Form.Group>
        </Form>
        <Row style={{ overflow: "auto" }} className="pt-3 flex-nowrap">
          {!this.state.stringa ? (
            <>
              {this.props.books.map(book => (
                <Col key={book.asin} className="pb-3 px-2">
                  <SingleBook img={book.img} title={book.title} price={book.price} />
                </Col>
              ))}
            </>
          ) : (
            <>
              {this.props.books
                .filter(book => book.title.toLowerCase().includes(this.state.stringa.toLowerCase()))
                .map(book => (
                  <Col key={book.asin} className="pb-3 px-2">
                    <SingleBook img={book.img} title={book.title} price={book.price} />
                  </Col>
                ))}
            </>
          )}
        </Row>
      </>
    );
  }
}

export default BookList;
