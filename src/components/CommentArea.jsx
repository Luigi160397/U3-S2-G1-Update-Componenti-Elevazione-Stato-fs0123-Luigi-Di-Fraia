import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Alert } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: []
  };

  request = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzOWZmOWM1NmIzNjAwMTMzZmU1NWEiLCJpYXQiOjE2ODA1MDIyMDEsImV4cCI6MTY4MTcxMTgwMX0.fig-8rFCTFRY2yqHXAH6TirDOGQ_4zSo2BeVwq0XAj0"
        }
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.request();
  }

  render() {
    return (
      <>
        <AddComment asin={this.props.asin} />
        {this.state.comments.length > 0 ? (
          <CommentsList comments={this.state.comments} />
        ) : (
          <Alert variant="warning">Nessun commento trovato</Alert>
        )}
      </>
    );
  }
}

export default CommentArea;
