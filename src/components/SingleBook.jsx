import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    asin: ""
  };

  toggleBook = () => {
    this.setState(prevState => ({
      selected: !prevState.selected,
      asin: !prevState.selected ? this.props.asin : ""
    }));
  };

  render() {
    const selectedStyle = {
      border: this.state.selected ? "2px solid red" : "none"
    };
    return (
      <Card className="shadow libri" style={selectedStyle}>
        <Card.Img onClick={this.toggleBook} variant="top" className="img-fluid" id="image-card" src={this.props.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.title}</Card.Title>
          <Card.Text>Prezzo: {this.props.price} €</Card.Text>
          {this.state.selected && <CommentArea asin={this.props.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
